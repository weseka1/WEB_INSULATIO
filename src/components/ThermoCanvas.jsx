import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { thermal } from '../lib/thermal'

/**
 * Capa WebGL termográfica del hero (Three.js puro).
 * Renderiza la foto industrial como una cámara infrarroja:
 *  - estado por defecto = acero desaturado y sobrio (registro ingeniería)
 *  - donde está el cursor y según el slider térmico, se REVELA el mapa
 *    infrarrojo real, con distorsión de calor, scanlines y grano de instrumento.
 * Lee `thermal` (store compartido) cada frame. Sin postprocessing (perf).
 */

const VERT = `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

const FRAG = `
  precision highp float;
  uniform sampler2D uTex;
  uniform float uTime;
  uniform float uHot;
  uniform float uCold;
  uniform vec2  uMouse;
  uniform vec2  uRes;
  uniform vec2  uImg;
  varying vec2 vUv;

  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
  float noise(vec2 p){
    vec2 i=floor(p), f=fract(p);
    float a=hash(i), b=hash(i+vec2(1,0)), c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1));
    vec2 u=f*f*(3.0-2.0*f);
    return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
  }

  // Paleta infrarroja real: azul profundo → cian → verde → amarillo → rojo → blanco
  vec3 thermal(float t){
    t = clamp(t, 0.0, 1.0);
    vec3 c1=vec3(0.02,0.05,0.26);
    vec3 c2=vec3(0.05,0.55,0.85);
    vec3 c3=vec3(0.10,0.75,0.35);
    vec3 c4=vec3(0.96,0.80,0.16);
    vec3 c5=vec3(0.96,0.26,0.10);
    vec3 c6=vec3(1.0,0.96,0.88);
    vec3 col=mix(c1,c2,smoothstep(0.0,0.2,t));
    col=mix(col,c3,smoothstep(0.2,0.4,t));
    col=mix(col,c4,smoothstep(0.4,0.6,t));
    col=mix(col,c5,smoothstep(0.6,0.82,t));
    col=mix(col,c6,smoothstep(0.82,1.0,t));
    return col;
  }

  void main(){
    // cover-fit (como background-size:cover)
    float screenA = uRes.x/uRes.y;
    float imgA = uImg.x/uImg.y;
    vec2 uv = vUv;
    if(screenA > imgA){ uv.y = (uv.y-0.5)*(imgA/screenA)+0.5; }
    else { uv.x = (uv.x-0.5)*(screenA/imgA)+0.5; }

    float heat = uHot;
    float cold = uCold;

    // foco térmico siguiendo el cursor
    float foc = 1.0 - smoothstep(0.0, 0.42, distance(vUv, uMouse));

    // distorsión de calor: desplazamiento UV ondulante (sube con el calor)
    float wob = noise(vec2(uv.x*15.0, uv.y*15.0 - uTime*0.9));
    float disp = (heat*0.013 + 0.0022) * (wob-0.5);
    uv.y += disp * (0.5 + foc);

    vec4 src = texture2D(uTex, uv);
    float lum = dot(src.rgb, vec3(0.299,0.587,0.114));

    // lectura térmica desde luminancia, sesgada por slider + foco del cursor
    float tval = lum;
    tval += foc * (0.20 + heat*0.35);
    tval += (heat - cold) * 0.30;
    tval = clamp(tval, 0.0, 1.0);
    vec3 ir = thermal(tval);

    // base sobria: foto desaturada con leve tinte acero
    vec3 steel = mix(vec3(lum*0.92), src.rgb, 0.34);
    steel *= vec3(0.90,0.95,1.06);

    // mezcla: cuanto más interacción, más se revela el infrarrojo
    float reveal = clamp(foc*0.95 + heat*0.75 + cold*0.55, 0.0, 1.0);
    vec3 col = mix(steel, ir, reveal*0.86);

    // scanlines + grano de instrumento
    float scan = 0.965 + 0.035*sin(vUv.y*uRes.y*1.1 + uTime*2.2);
    col *= scan;
    col += (hash(vUv*uRes + uTime) - 0.5) * 0.022;

    // viñeta
    float vig = smoothstep(1.15, 0.42, distance(vUv, vec2(0.5)));
    col *= mix(0.66, 1.0, vig);

    gl_FragColor = vec4(col, 1.0);
  }
`

export default function ThermoCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
    } catch {
      return // sin WebGL → queda el fallback (img)
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const uniforms = {
      uTex: { value: null },
      uTime: { value: 0 },
      uHot: { value: 0 },
      uCold: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.55) },
      uRes: { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
      uImg: { value: new THREE.Vector2(1600, 900) },
    }
    const material = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms })
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
    scene.add(mesh)

    new THREE.TextureLoader().load('/assets/obras/altura.jpg', (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace
      uniforms.uTex.value = tex
      if (tex.image) uniforms.uImg.value.set(tex.image.width, tex.image.height)
    })

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight
      renderer.setSize(w, h)
      uniforms.uRes.value.set(w, h)
    }
    window.addEventListener('resize', onResize)

    const clock = new THREE.Clock()
    let raf = 0
    let visible = true
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting }, { threshold: 0 })
    io.observe(mount)

    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!visible || !uniforms.uTex.value) return
      uniforms.uTime.value = clock.getElapsedTime()
      uniforms.uHot.value += (thermal.hot - uniforms.uHot.value) * 0.1
      uniforms.uCold.value += (thermal.cold - uniforms.uCold.value) * 0.1
      uniforms.uMouse.value.x += (thermal.mx - uniforms.uMouse.value.x) * 0.07
      uniforms.uMouse.value.y += (thermal.my - uniforms.uMouse.value.y) * 0.07
      renderer.render(scene, camera)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', onResize)
      mesh.geometry.dispose()
      material.dispose()
      if (uniforms.uTex.value) uniforms.uTex.value.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="thermo-canvas" ref={mountRef} aria-hidden="true" />
}
