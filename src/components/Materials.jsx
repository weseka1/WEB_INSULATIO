import { materials } from '../data/materials'
import { useLang } from '../lib/i18n'

export default function Materials() {
  const { t } = useLang()
  return (
    <section className="section materials" id="materiales">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" data-reveal>{t({ es: 'Materiales aislantes', en: 'Insulating Materials' })}</span>
          <h2 data-reveal>{t({ es: 'El material correcto para cada temperatura.', en: 'The right material for every temperature.' })}</h2>
          <p data-reveal>{t({ es: 'Instalamos diversos tipos de aislantes y coberturas según el requerimiento del cliente o la solución que surge del análisis de nuestros profesionales. También representamos y distribuimos productos de aislación térmica.', en: 'We install various types of insulation and cladding according to the client’s requirement or the solution arising from our professionals’ analysis. We also represent and distribute thermal-insulation products.' })}</p>
        </div>
        <div className="mat-grid">
          {materials.map((m) => (
            <div className="mat" data-reveal key={t(m.name)}>
              <img src={m.img} alt={t(m.name)} loading="lazy" />
              <div className="info">
                <h4>{t(m.name)}</h4>
                <div className={'meta' + (m.cold ? ' cold' : '')}>{t(m.meta)}</div>
                <p>{t(m.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
