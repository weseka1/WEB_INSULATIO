import { materials, coverings } from '../data/materials'

export default function Materials() {
  return (
    <section className="section materials" id="materiales">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" data-reveal>Materiales aislantes</span>
          <h2 data-reveal>El material correcto para cada temperatura.</h2>
          <p data-reveal>Instalamos diversos tipos de aislantes y coberturas según el requerimiento del cliente o la solución que surge del análisis de nuestros profesionales. También representamos y distribuimos productos de aislación térmica.</p>
        </div>
        <div className="mat-grid">
          {materials.map((m) => (
            <div className="mat" data-reveal key={m.name}>
              <img src={m.img} alt={m.name} loading="lazy" />
              <div className="info">
                <h4>{m.name}</h4>
                <div className={'meta' + (m.cold ? ' cold' : '')}>{m.meta}</div>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="coverings" data-reveal>
          <span className="ct">Coberturas</span>
          {coverings.map((c) => <span key={c}>{c}</span>)}
        </div>
      </div>
    </section>
  )
}
