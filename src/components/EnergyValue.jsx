const STEPS = [
  { n: '01', title: 'Diagnóstico', desc: 'Termografías, inspecciones y cálculos termodinámicos y financieros para localizar las pérdidas de calor.' },
  { n: '02', title: 'Cálculo', desc: 'Definición del material y el espesor económico que ofrecen el mejor desempeño al menor costo.' },
  { n: '03', title: 'Resultado', desc: 'Implantación de la Norma ISO-50001 y acceso a incentivos fiscales por la mejora del desempeño energético.' },
]

export default function EnergyValue() {
  return (
    <section className="section value">
      <div className="wrap">
        <div className="inner">
          {/* Panel de diagnóstico térmico — vectorial, nítido en cualquier pantalla */}
          <div className="thermo-panel" data-reveal>
            <div className="tp-head">
              <span className="tp-title">Diagnóstico termográfico</span>
              <span className="tp-live"><i />En proceso · °C</span>
            </div>

            <div className="tp-row">
              <div className="tp-label">Sin aislación<small>El calor se escapa a la atmósfera</small></div>
              <div className="tp-pipe hot">
                <span className="tp-scan" />
                <span className="tp-temp">≈ 250 °C</span>
              </div>
            </div>

            <div className="tp-row">
              <div className="tp-label">Con Insulatio<small>La energía se conserva en el proceso</small></div>
              <div className="tp-pipe cool">
                <span className="tp-layers" />
                <span className="tp-temp cold">≈ 45 °C</span>
              </div>
            </div>

            <div className="tp-scale"><span>−40°</span><div className="tp-bar" /><span>+600°</span></div>

            <div className="tp-result">
              <div><b>Hasta 90%</b><span>menos pérdida de calor</span></div>
              <div><b>&lt; 60 °C</b><span>superficie segura al tacto</span></div>
            </div>
          </div>

          <div>
            <span className="eyebrow" data-reveal>Eficiencia energética</span>
            <h2 data-reveal>Eficiencia energética con respaldo de ingeniería.</h2>
            <p className="lead-sm" data-reveal>Identificamos dónde se pierde la energía, calculamos el aislante y el espesor óptimos, y documentamos la mejora del desempeño energético de la instalación.</p>
            <div className="steps">
              {STEPS.map((s) => (
                <div className="step" data-reveal key={s.n}>
                  <div className="sn">{s.n}</div>
                  <div><h4>{s.title}</h4><p>{s.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
