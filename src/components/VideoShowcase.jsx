import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icons'

const SRC = '/assets/video/obra-promaiz-2026.mp4'
const POSTER = '/assets/video/poster-promaiz.jpg'

/**
 * "Obra en ejecución" — card FLOTANTE futurista con flow térmico.
 * Levita + se inclina con el mouse (mismo lenguaje que el medidor del hero),
 * con aura térmica caliente↔frío detrás y un anillo IR que gira en el borde.
 * El <video> no se descarga hasta el play (fachada con póster, lazy).
 */
export default function VideoShowcase() {
  const [playing, setPlaying] = useState(false)
  const cardRef = useRef(null)
  const vidRef = useRef(null)
  const playingRef = useRef(false)

  useEffect(() => { playingRef.current = playing }, [playing])
  useEffect(() => { if (playing) vidRef.current?.play?.().catch(() => {}) }, [playing])

  // Tilt 3D + levitación (se calma mientras reproduce, para usar los controles).
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const fine = window.matchMedia('(pointer:fine)').matches
    let tMx = 0, tMy = 0, mx = 0, my = 0, t = 0, raf = 0

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      tMx = (e.clientX - r.left) / r.width - 0.5
      tMy = (e.clientY - r.top) / r.height - 0.5
    }
    const onLeave = () => { tMx = 0; tMy = 0 }
    if (fine) {
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)
    }

    const loop = () => {
      t += 0.016
      const calm = playingRef.current ? 0 : 1
      mx += (tMx - mx) * 0.07
      my += (tMy - my) * 0.07
      const ry = (Math.sin(t * 0.5) * 2.2 + mx * 10) * calm
      const rx = (Math.cos(t * 0.45) * 1.4 - my * 8) * calm
      const fy = Math.sin(t * 0.7) * 7 * calm
      el.style.setProperty('--rx', rx.toFixed(2) + 'deg')
      el.style.setProperty('--ry', ry.toFixed(2) + 'deg')
      el.style.setProperty('--fy', fy.toFixed(2) + 'px')
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <section className="section videoshow float" id="video">
      <div className="wrap">
        <div className="vs-head">
          <span className="eyebrow" data-reveal>Obra en ejecución</span>
          <h2 data-reveal>Planta Promaíz — registro de obra, Mayo 2026.</h2>
        </div>

        <div className="vs-stage" data-reveal>
          <article className={'vs-card' + (playing ? ' playing' : '')} ref={cardRef}>
            <span className="vs-rim" aria-hidden="true" />
            <figure className="vs-frame">
              {playing ? (
                <video
                  ref={vidRef}
                  className="vs-media"
                  src={SRC}
                  poster={POSTER}
                  controls
                  playsInline
                  preload="auto"
                />
              ) : (
                <button className="vs-facade" onClick={() => setPlaying(true)} aria-label="Reproducir video de obra">
                  <img
                    className="vs-poster"
                    src={POSTER}
                    alt="Planta Promaíz — aislación térmica industrial en obra, Mayo 2026"
                    loading="lazy"
                  />
                  <span className="vs-scrim" aria-hidden="true" />
                  <span className="vs-corners" aria-hidden="true"><i /><i /><i /><i /></span>

                  <span className="vs-hud vs-top" aria-hidden="true">
                    <span className="vs-rec"><span className="rdot" />REC</span>
                    <span className="vs-tag">REGISTRO AÉREO DE OBRA</span>
                  </span>

                  <span className="vs-play">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                    <span className="vs-play-ring" />
                  </span>

                  <span className="vs-hud vs-bottom" aria-hidden="true">
                    <span className="vs-loc"><Icon name="pin" />Planta Promaíz · Córdoba</span>
                    <span className="vs-time">02:15</span>
                  </span>
                </button>
              )}
            </figure>
          </article>
        </div>

        <div className="vs-meta" data-reveal>
          <span className="vs-chip">Agroindustria</span>
          <span className="vs-chip">Columnas · cañerías · equipos</span>
          <span className="vs-chip">Aislación en proceso</span>
          <span className="vs-chip">Mayo 2026</span>
        </div>
      </div>
    </section>
  )
}
