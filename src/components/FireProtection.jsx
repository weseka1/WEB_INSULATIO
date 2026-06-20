import { Icon } from './Icons'
import { useLang } from '../lib/i18n'

const ITEMS = [
  { es: 'Tratamiento de penetraciones y cierre de shaft', en: 'Penetration sealing and shaft closure' },
  { es: 'Protección de bandejas eléctricas', en: 'Protection of cable trays' },
  { es: 'Líneas de control de procesos', en: 'Process control lines' },
  { es: 'Protección contra fuego de estructuras', en: 'Structural fire protection' },
  { es: 'Spray ignífugo Blaze Shield', en: 'Blaze Shield fireproof spray' },
  { es: 'Pinturas mastics e intumescentes', en: 'Mastic and intumescent coatings' },
]

export default function FireProtection() {
  const { t } = useLang()
  return (
    <section className="section fire">
      <div className="wrap">
        <div className="inner">
          <div>
            <span className="eyebrow" data-reveal>{t({ es: 'Protección pasiva contra fuego', en: 'Passive Fire Protection' })}</span>
            <h2 data-reveal style={{ fontSize: 'clamp(1.9rem,4vw,3rem)' }}>{t({ es: 'Sistemas certificados de protección pasiva contra fuego.', en: 'Certified passive fire protection systems.' })}</h2>
            <p data-reveal style={{ color: 'var(--muted)', marginTop: 18, maxWidth: '50ch' }}>{t({ es: 'Ingeniería, provisión y montaje de sistemas para fuego celulósico y petroquímico, con materiales certificados bajo normas internacionales.', en: 'Engineering, supply and installation of systems for cellulosic and petrochemical fire, with materials certified to international standards.' })}</p>
            <ul data-reveal>
              {ITEMS.map((it) => (
                <li key={it.es}><Icon name="check" />{t(it)}</li>
              ))}
            </ul>
            <div className="insure" data-reveal>
              <Icon name="shield" />
              {t({ es: 'Sistemas que ayudan a reducir las primas de seguro de la planta.', en: 'Systems that help reduce the plant’s insurance premiums.' })}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }} data-reveal>
            <div className="badge240">
              <span className="n">240<small> min</small></span>
              <span className="t">{t({ es: 'de resistencia al fuego petroquímico certificada', en: 'of certified petrochemical fire resistance' })}</span>
            </div>
            <div className="badge240" style={{ borderColor: 'rgba(251,176,66,.3)', background: 'rgba(251,176,66,.05)' }}>
              <span className="n" style={{ color: 'var(--warm-2)' }}>180<small> min</small></span>
              <span className="t" style={{ color: '#ecd6b3' }}>{t({ es: 'en piernas de esfera de gas y estructuras críticas', en: 'on gas-sphere legs and critical structures' })}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
