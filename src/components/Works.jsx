import { useCallback, useEffect, useState } from 'react'
import { works, projects } from '../data/works'
import { Icon } from './Icons'

export default function Works() {
  const [idx, setIdx] = useState(-1)
  const open = idx >= 0

  const close = useCallback(() => setIdx(-1), [])
  const go = useCallback((d) => setIdx((i) => (i + d + works.length) % works.length), [])

  // Navegación por teclado mientras el lightbox está abierto.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'ArrowRight') go(1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close, go])

  const current = open ? works[idx] : null

  return (
    <section className="section works" id="obras">
      <div className="wrap">
        <div className="head-row">
          <div style={{ maxWidth: 640 }}>
            <span className="eyebrow" data-reveal>Trabajos realizados</span>
            <h2 data-reveal style={{ fontSize: 'clamp(2rem,4.6vw,3.5rem)', marginTop: 18 }}>Obras ejecutadas en la industria argentina.</h2>
          </div>
          <p data-reveal style={{ color: 'var(--muted)', maxWidth: '34ch', fontSize: 15 }}>Energía, petroquímica, alimentación y agroindustria en todo el país. Seleccione una imagen para ampliarla.</p>
        </div>

        <div className="gallery">
          {works.map((w, i) => (
            <figure
              className={'tile' + (w.size ? ' ' + w.size : '')}
              data-reveal
              key={w.img}
              onClick={() => setIdx(i)}
            >
              <img src={w.img} alt={w.title} loading="lazy" />
              <span className="zoom"><Icon name="zoom" /></span>
              <figcaption className="cap">
                <div className="k">{w.k}</div>
                <h4>{w.title}</h4>
                <div className="loc">{w.loc}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="proj-row">
          {projects.map((p) => (
            <div className="proj" data-reveal key={p.name}>
              <div className={'pm2' + (p.cold ? ' cold' : '')}>{p.m2}<small> m²</small></div>
              <h5>{p.name}</h5>
              <div className="loc">{p.loc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <div className={'lightbox' + (open ? ' open' : '')} aria-hidden={!open} onClick={(e) => { if (e.target === e.currentTarget) close() }}>
        <button className="lbtn lclose" aria-label="Cerrar" onClick={close}><Icon name="close" /></button>
        <button className="lbtn lnav prev" aria-label="Anterior" onClick={() => go(-1)}><Icon name="chevLeft" /></button>
        <button className="lbtn lnav next" aria-label="Siguiente" onClick={() => go(1)}><Icon name="chevRight" /></button>
        {current && <img src={current.img} alt={current.title} />}
        <div className="lcap">{current ? `${current.title} · ${current.loc}` : ''}</div>
      </div>
    </section>
  )
}
