import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Logo from './Logo'

/** Pantalla de carga con la marca y barra de progreso animada (GSAP). */
export default function Preloader() {
  const root = useRef(null)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setHidden(true); return }

    const mark = el.querySelector('.pl-mark')
    const fill = el.querySelector('.pl-fill')
    const num = el.querySelector('.pl-num')

    gsap.to(mark, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
    const prog = { v: 0 }
    const tween = gsap.to(prog, {
      v: 100, duration: 1.5, ease: 'power2.inOut',
      onUpdate() {
        const p = Math.round(prog.v)
        fill.style.width = p + '%'
        num.textContent = p + '%'
      },
      onComplete() {
        gsap.to(el, { opacity: 0, duration: 0.6, delay: 0.15, ease: 'power2.inOut', onComplete: () => setHidden(true) })
      },
    })
    return () => { tween.kill(); gsap.killTweensOf([mark, el]) }
  }, [])

  if (hidden) return null
  return (
    <div className="preloader" ref={root}>
      <Logo variant="mark" className="pl-mark" />
      <div className="pl-bar"><div className="pl-fill" /></div>
      <div className="pl-num">0%</div>
    </div>
  )
}
