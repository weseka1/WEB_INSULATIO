import { clients } from '../data/clients'
import { Icon } from './Icons'
import useDragScroll from '../lib/useDragScroll'
import { useLang } from '../lib/i18n'

export default function Clients() {
  const { t } = useLang()
  const trackRef = useDragScroll()

  const nudge = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.client-card')
    const amount = (card ? card.offsetWidth : 280) + 18
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="clients" id="clientes">
      <div className="wrap">
        <div className="clients-head">
          <div>
            <span className="eyebrow" data-reveal>{t({ es: 'Clientes', en: 'Clients' })}</span>
            <h2 data-reveal>{t({ es: 'Empresas e instituciones que confían en Insulatio.', en: 'Companies and institutions that trust Insulatio.' })}</h2>
          </div>
          <div className="svc-arrows" data-reveal>
            <button className="svc-arrow" aria-label={t({ es: 'Anterior', en: 'Previous' })} onClick={() => nudge(-1)}><Icon name="chevLeft" /></button>
            <button className="svc-arrow" aria-label={t({ es: 'Siguiente', en: 'Next' })} onClick={() => nudge(1)}><Icon name="chevRight" /></button>
          </div>
        </div>

        <span className="drag-hint" data-reveal><Icon name="swipe" />{t({ es: 'Deslice para recorrer la cartera', en: 'Drag to browse the portfolio' })}</span>

        <div className="clients-track" ref={trackRef}>
          {clients.map((c, i) => (
            <article className={'client-card ' + (i % 2 ? 'cold' : 'warm')} data-reveal key={c.name}>
              <div className="cc-plate"><img src={c.img} alt={c.name} loading="lazy" /></div>
              <div className="cc-meta">
                <span className="cc-sector">{t(c.sector)}</span>
                <h4>{c.name}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
