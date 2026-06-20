import { services } from '../data/services'
import { Icon } from './Icons'
import useDragScroll from '../lib/useDragScroll'
import { useLang } from '../lib/i18n'

export default function Services() {
  const { t } = useLang()
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
          <span className="eyebrow" data-reveal>{t({ es: 'Servicios', en: 'Services' })}</span>
          <h2 data-reveal>{t({ es: 'Todo el ciclo térmico, de la ingeniería a la obra.', en: 'The entire thermal cycle, from engineering to the field.' })}</h2>
          <p data-reveal>{t({ es: 'Asesoramos, calculamos, fabricamos e instalamos. Una sola empresa para resolver cada necesidad de aislación, eficiencia energética y protección de su planta.', en: 'We advise, calculate, manufacture and install. A single company to solve every insulation, energy-efficiency and protection need of your plant.' })}</p>
        </div>

        <div className="svc-bar" data-reveal>
          <span className="drag-hint"><Icon name="swipe" />{t({ es: 'Deslice para recorrer los 11 servicios', en: 'Drag to browse the 11 services' })}</span>
          <div className="svc-arrows">
            <button className="svc-arrow" aria-label={t({ es: 'Anterior', en: 'Previous' })} onClick={() => nudge(-1)}><Icon name="chevLeft" /></button>
            <button className="svc-arrow" aria-label={t({ es: 'Siguiente', en: 'Next' })} onClick={() => nudge(1)}><Icon name="chevRight" /></button>
          </div>
        </div>

        <div className="svc-track" ref={trackRef}>
          {services.map((s) => (
            <article className={'svc ' + s.accent} data-reveal key={s.n}>
              <span className="num-badge">{s.n}</span>
              <div className="ic"><Icon name={s.icon} /></div>
              <h3>{t(s.title)}</h3>
              <p>{t(s.desc)}</p>
            </article>
          ))}
          <article className="svc dual svc-cta" data-reveal>
            <h3>{t({ es: '¿Su proyecto requiere varios servicios?', en: 'Does your project require several services?' })}</h3>
            <p>{t({ es: 'Integramos todas las disciplinas en una sola obra, con un único interlocutor técnico.', en: 'We integrate every discipline into a single project, with one technical point of contact.' })}</p>
            <a href="#cotizacion" className="btn btn-ghost magnetic">{t({ es: 'Solicitar asesoramiento', en: 'Request advice' })}</a>
          </article>
        </div>
      </div>
    </section>
  )
}
