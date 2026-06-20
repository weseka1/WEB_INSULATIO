import { services } from '../data/services'
import { Icon } from './Icons'
import { useLang } from '../lib/i18n'

export default function Services() {
  const { t } = useLang()

  return (
    <section className="section" id="servicios">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" data-reveal>{t({ es: 'Servicios', en: 'Services' })}</span>
          <h2 data-reveal>{t({ es: 'Todo el ciclo térmico, de la ingeniería a la obra.', en: 'The entire thermal cycle, from engineering to the field.' })}</h2>
          <p data-reveal>{t({ es: 'Asesoramos, calculamos, fabricamos e instalamos. Una sola empresa para resolver cada necesidad de aislación, eficiencia energética y protección de su planta.', en: 'We advise, calculate, manufacture and install. A single company to solve every insulation, energy-efficiency and protection need of your plant.' })}</p>
        </div>

        <div className="svc-grid">
          {services.map((s) => (
            <article className="svc-card" data-reveal key={s.n}>
              <span className="svc-idx">{s.n}</span>
              <div className="svc-ic"><Icon name={s.icon} /></div>
              <h3>{t(s.title)}</h3>
              <p>{t(s.desc)}</p>
            </article>
          ))}
          <article className="svc-card cta" data-reveal>
            <div className="svc-ic"><Icon name="badge" /></div>
            <h3>{t({ es: '¿Su proyecto requiere varios servicios?', en: 'Does your project need several services?' })}</h3>
            <p>{t({ es: 'Integramos todas las disciplinas en una sola obra, con un único interlocutor técnico.', en: 'We integrate every discipline into a single project, with one technical point of contact.' })}</p>
            <a href="#cotizacion" className="btn btn-primary magnetic">{t({ es: 'Solicitar asesoramiento', en: 'Request advice' })}<Icon name="arrow" /></a>
          </article>
        </div>
      </div>
    </section>
  )
}
