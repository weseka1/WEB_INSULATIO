import { Icon } from './Icons'

const ITEMS = [
  'Tratamiento de penetraciones y cierre de shaft',
  'Protección de bandejas eléctricas',
  'Líneas de control de procesos',
  'Protección contra fuego de estructuras',
  'Spray ignífugo Blaze Shield',
  'Pinturas mastics e intumescentes',
]

export default function FireProtection() {
  return (
    <section className="section fire">
      <div className="wrap">
        <div className="inner">
          <div>
            <span className="eyebrow" data-reveal>Protección pasiva contra fuego</span>
            <h2 data-reveal style={{ fontSize: 'clamp(1.9rem,4vw,3rem)' }}>Sistemas certificados de protección pasiva contra fuego.</h2>
            <p data-reveal style={{ color: 'var(--muted)', marginTop: 18, maxWidth: '50ch' }}>Ingeniería, provisión y montaje de sistemas para fuego celulósico y petroquímico, con materiales certificados bajo normas internacionales.</p>
            <ul data-reveal>
              {ITEMS.map((t) => (
                <li key={t}><Icon name="check" />{t}</li>
              ))}
            </ul>
            <div className="insure" data-reveal>
              <Icon name="shield" />
              Sistemas que ayudan a reducir las primas de seguro de la planta.
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }} data-reveal>
            <div className="badge240">
              <span className="n">240<small> min</small></span>
              <span className="t">de resistencia al fuego petroquímico certificada</span>
            </div>
            <div className="badge240" style={{ borderColor: 'rgba(251,176,66,.3)', background: 'rgba(251,176,66,.05)' }}>
              <span className="n" style={{ color: 'var(--warm-2)' }}>180<small> min</small></span>
              <span className="t" style={{ color: '#ecd6b3' }}>en piernas de esfera de gas y estructuras críticas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
