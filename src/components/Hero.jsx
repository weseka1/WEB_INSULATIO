import { useEffect, useRef, lazy, Suspense } from 'react'
import { Icon } from './Icons'
import { thermal } from '../lib/thermal'

const ThermoCanvas = lazy(() => import('./ThermoCanvas'))

export default function Hero() {
  const gaugeRef = useRef(null)
  const allowWebGL = typeof window !== 'undefined' &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Medidor térmico interactivo: el punto central se arrastra con el mouse/dedo.
  // Hacia el rojo → la web "irradia" calor; hacia el frío → irradia frío.
  // Sin arrastrar, hace un vaivén 3D vivo (se desactiva con reduce-motion).
  useEffect(() => {
    const el = gaugeRef.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer:fine)').matches
    const root = document.documentElement
    const bar = el.querySelector('.t3-bar')
    const thumb = el.querySelector('.t3-node.m')
    const readEl = el.querySelector('.lab.m')
    if (!bar || !thumb) return
    const baseText = readEl ? readEl.textContent : ''
    const T_MIN = -196, T_MAX = 600

    let pos = 0.5, target = 0.5, dragging = false
    let tMx = 0, tMy = 0, mx = 0, my = 0, t = 0, raf = 0

    const posFromX = (clientX) => {
      const r = bar.getBoundingClientRect()
      return Math.min(1, Math.max(0, (clientX - r.left) / r.width))
    }
    const onDown = (e) => {
      dragging = true
      el.classList.add('dragging')
      try { thumb.setPointerCapture(e.pointerId) } catch { /* noop */ }
      target = posFromX(e.clientX)
      e.preventDefault(); e.stopPropagation()
    }
    const onDrag = (e) => { if (dragging) target = posFromX(e.clientX) }
    const onUp = (e) => {
      if (!dragging) return
      dragging = false
      el.classList.remove('dragging')
      try { thumb.releasePointerCapture(e.pointerId) } catch { /* noop */ }
      target = 0.5
      if (readEl) readEl.textContent = baseText
    }
    thumb.addEventListener('pointerdown', onDown)
    thumb.addEventListener('pointermove', onDrag)
    thumb.addEventListener('pointerup', onUp)
    thumb.addEventListener('pointercancel', onUp)

    const onGaugeMove = (e) => {
      const r = el.getBoundingClientRect()
      tMx = (e.clientX - r.left) / r.width - 0.5
      tMy = (e.clientY - r.top) / r.height - 0.5
    }
    const onGaugeLeave = () => { tMx = 0; tMy = 0 }
    if (fine) {
      el.addEventListener('pointermove', onGaugeMove)
      el.addEventListener('pointerleave', onGaugeLeave)
    }

    // Foco térmico del shader: sigue el cursor sobre toda la pantalla
    const onFocal = (e) => {
      thermal.mx = e.clientX / window.innerWidth
      thermal.my = 1 - e.clientY / window.innerHeight
    }
    window.addEventListener('pointermove', onFocal)

    const loop = () => {
      t += 0.016
      pos += (target - pos) * 0.18
      el.style.setProperty('--pos', pos.toFixed(4))
      const tv = (pos - 0.5) * 2
      const hot = Math.max(0, tv), cold = Math.max(0, -tv)
      root.style.setProperty('--hot', hot.toFixed(3))
      root.style.setProperty('--cold', cold.toFixed(3))
      thermal.hot = hot
      thermal.cold = cold
      if (dragging && readEl) {
        const v = Math.round(T_MIN + pos * (T_MAX - T_MIN))
        readEl.textContent = (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v) + ' °C'
      }
      if (!reduce) {
        const grab = dragging ? 0 : 1
        mx += (tMx - mx) * 0.08
        my += (tMy - my) * 0.08
        el.style.setProperty('--ry', ((Math.sin(t * 0.6) * 7 + mx * 22) * grab).toFixed(2) + 'deg')
        el.style.setProperty('--rx', ((Math.cos(t * 0.5) * 3 - my * 14) * grab).toFixed(2) + 'deg')
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      thumb.removeEventListener('pointerdown', onDown)
      thumb.removeEventListener('pointermove', onDrag)
      thumb.removeEventListener('pointerup', onUp)
      thumb.removeEventListener('pointercancel', onUp)
      el.removeEventListener('pointermove', onGaugeMove)
      el.removeEventListener('pointerleave', onGaugeLeave)
      window.removeEventListener('pointermove', onFocal)
      root.style.setProperty('--hot', '0')
      root.style.setProperty('--cold', '0')
      thermal.hot = 0; thermal.cold = 0
    }
  }, [])

  return (
    <header className="hero">
      <div className="hero-bg">
        <img src="/assets/obras/altura.jpg" alt="Obra de aislación térmica en planta industrial" fetchPriority="high" />
        {allowWebGL && (
          <Suspense fallback={null}><ThermoCanvas /></Suspense>
        )}
        <div className="hero-thermal" />
        <div className="grain" />
      </div>
      <div className="wrap">
        <span className="eyebrow" data-reveal>Aislaciones térmicas · Servicios industriales</span>
        <h1 data-reveal>Ingeniería en aislación térmica para <span className="thermal-text">calor</span> y <span className="thermal-text">frío</span>.</h1>
        <p className="lead" data-reveal>Asesoramiento técnico, cálculo e instalación de aislaciones térmicas para procesos industriales y residenciales. Más de 30 años de experiencia en el ámbito nacional e internacional.</p>
        <div className="hero-cta" data-reveal>
          <a href="#cotizacion" className="btn btn-primary magnetic">Solicitar cotización<Icon name="arrow" /></a>
          <a href="#obras" className="btn btn-ghost magnetic">Ver nuestros trabajos</a>
        </div>
        <div className="hero-meta" data-reveal>
          <div className="thermo3d" ref={gaugeRef}>
            <div className="t3-stage">
              <span className="cap l">Criogénico</span>
              <span className="cap r">Alta temp.</span>
              <div className="t3-bar">
                <span className="t3-frost" />
                <span className="t3-heat" />
                <span className="t3-scan" />
              </div>
              <span className="t3-node l" />
              <span className="t3-node m" />
              <span className="t3-node r" />
              <span className="lab l">−196 °C</span>
              <span className="lab m">Rango industrial completo</span>
              <span className="lab r">+600 °C</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
