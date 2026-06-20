import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

/**
 * Motor de scroll + animaciones de toda la web.
 * Lenis (smooth scroll) sincronizado con GSAP ScrollTrigger,
 * reveals al hacer scroll, contadores animados, botones magnéticos
 * y parallax suave del hero. Se ejecuta una sola vez al montar la App.
 */
export default function useScrollSetup() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    gsap.registerPlugin(ScrollTrigger)

    let lenis = null
    let rafId = 0
    const onTick = (time) => lenis && lenis.raf(time * 1000)

    if (!reduce) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add(onTick)
      gsap.ticker.lagSmoothing(0)
      document.body.classList.add('lenis')
    }

    // ---- Smooth-scroll en anchors ----
    const onAnchor = (e) => {
      const a = e.currentTarget
      const id = a.getAttribute('href')
      if (!id || id.length < 2) return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      document.dispatchEvent(new CustomEvent('insulatio:closemenu'))
      if (lenis) lenis.scrollTo(el, { offset: -70, duration: 1.3 })
      else el.scrollIntoView({ behavior: 'smooth' })
    }
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'))
    anchors.forEach((a) => a.addEventListener('click', onAnchor))

    // ---- Nav scrolled state ----
    const nav = document.getElementById('nav')
    const onScroll = (y) => nav && nav.classList.toggle('scrolled', y > 30)
    if (lenis) lenis.on('scroll', (e) => onScroll(e.scroll))
    const winScroll = () => onScroll(window.scrollY)
    window.addEventListener('scroll', winScroll, { passive: true })

    const ctx = gsap.context(() => {
      // ---- Hero intro ----
      const heroItems = gsap.utils.toArray('.hero [data-reveal]')
      gsap.set(heroItems, { y: 26, opacity: 0 })
      gsap.to(heroItems, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.25 })

      // ---- Reveals on scroll ----
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        if (el.closest('.hero')) return
        gsap.set(el, { y: 34, opacity: 0 })
        ScrollTrigger.create({
          trigger: el, start: 'top 88%', once: true,
          onEnter: () => gsap.to(el, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }),
        })
      })

      // ---- Counters ----
      gsap.utils.toArray('[data-count]').forEach((el) => {
        const target = parseFloat(el.getAttribute('data-count'))
        const thousand = el.getAttribute('data-thousand') === '1'
        const obj = { v: 0 }
        ScrollTrigger.create({
          trigger: el, start: 'top 92%', once: true,
          onEnter: () => gsap.to(obj, {
            v: target, duration: 1.8, ease: 'power2.out',
            onUpdate: () => { el.textContent = thousand ? Math.round(obj.v).toLocaleString('es-AR') : Math.round(obj.v).toString() },
          }),
        })
      })

      // ---- Hero parallax ----
      if (!reduce) {
        gsap.to('.hero-bg img', {
          yPercent: 14, ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
        })
      }
    })

    // ---- Magnetic buttons ----
    const magneticHandlers = []
    if (!reduce && window.matchMedia('(pointer:fine)').matches) {
      document.querySelectorAll('.magnetic').forEach((btn) => {
        const move = (e) => {
          const r = btn.getBoundingClientRect()
          gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.5, ease: 'power3.out' })
        }
        const leave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1,0.4)' })
        btn.addEventListener('mousemove', move)
        btn.addEventListener('mouseleave', leave)
        magneticHandlers.push([btn, move, leave])
      })
    }

    // refrescar luego de que entren imágenes
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const refreshT = setTimeout(refresh, 600)

    return () => {
      anchors.forEach((a) => a.removeEventListener('click', onAnchor))
      window.removeEventListener('scroll', winScroll)
      window.removeEventListener('load', refresh)
      clearTimeout(refreshT)
      magneticHandlers.forEach(([btn, move, leave]) => { btn.removeEventListener('mousemove', move); btn.removeEventListener('mouseleave', leave) })
      gsap.ticker.remove(onTick)
      if (rafId) cancelAnimationFrame(rafId)
      ctx.revert()
      if (lenis) lenis.destroy()
      document.body.classList.remove('lenis')
    }
  }, [])
}
