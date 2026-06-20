import { services } from '../data/services'
import { Icon } from './Icons'
import useDragScroll from '../lib/useDragScroll'

export default function Services() {
  const trackRef = useDragScroll()

  const nudge = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.svc')
    const amount = (card ? card.offsetWidth : 340) + 16
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="section" id="servicios">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" data-reveal>Servicios</span>
          <h2 data-reveal>Todo el ciclo térmico, de la ingeniería a la obra.</h2>
          <p data-reveal>Asesoramos, calculamos, fabricamos e instalamos. Una sola empresa para resolver cada necesidad de aislación, eficiencia energética y protección de su planta.</p>
        </div>

        <div className="svc-bar" data-reveal>
          <span className="drag-hint"><Icon name="swipe" />Deslice para recorrer los 11 servicios</span>
          <div className="svc-arrows">
            <button className="svc-arrow" aria-label="Anterior" onClick={() => nudge(-1)}><Icon name="chevLeft" /></button>
            <button className="svc-arrow" aria-label="Siguiente" onClick={() => nudge(1)}><Icon name="chevRight" /></button>
          </div>
        </div>

        <div className="svc-track" ref={trackRef}>
          {services.map((s) => (
            <article className={'svc ' + s.accent} data-reveal key={s.n}>
              <span className="num-badge">{s.n}</span>
              <div className="ic"><Icon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
          <article className="svc dual svc-cta" data-reveal>
            <h3>¿Su proyecto requiere varios servicios?</h3>
            <p>Integramos todas las disciplinas en una sola obra, con un único interlocutor técnico.</p>
            <a href="#cotizacion" className="btn btn-ghost magnetic">Solicitar asesoramiento</a>
          </article>
        </div>
      </div>
    </section>
  )
}
