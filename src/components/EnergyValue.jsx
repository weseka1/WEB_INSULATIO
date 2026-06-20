import { useLang } from '../lib/i18n'

const STEPS = [
  { n: '01', title: { es: 'Diagnóstico', en: 'Diagnosis' },
    desc: { es: 'Termografías, inspecciones y cálculos termodinámicos y financieros para localizar las pérdidas de calor.',
            en: 'Thermography, inspections and thermodynamic and financial calculations to locate heat losses.' } },
  { n: '02', title: { es: 'Cálculo', en: 'Calculation' },
    desc: { es: 'Definición del material y el espesor económico que ofrecen el mejor desempeño al menor costo.',
            en: 'Definition of the material and economic thickness that deliver the best performance at the lowest cost.' } },
  { n: '03', title: { es: 'Resultado', en: 'Result' },
    desc: { es: 'Implantación de la Norma ISO-50001 y acceso a incentivos fiscales por la mejora del desempeño energético.',
            en: 'Implementation of the ISO-50001 standard and access to tax incentives for improved energy performance.' } },
]

export default function EnergyValue() {
  const { t } = useLang()
  return (
    <section className="section value">
      <div className="wrap">
        <div className="inner">
          {/* Panel de diagnóstico térmico — vectorial, nítido en cualquier pantalla */}
          <div className="thermo-panel" data-reveal>
            <div className="tp-head">
              <span className="tp-title">{t({ es: 'Diagnóstico termográfico', en: 'Thermographic diagnosis' })}</span>
              <span className="tp-live"><i />{t({ es: 'En proceso · °C', en: 'In progress · °C' })}</span>
            </div>

            <div className="tp-row">
              <div className="tp-label">{t({ es: 'Sin aislación', en: 'No insulation' })}<small>{t({ es: 'El calor se escapa a la atmósfera', en: 'Heat escapes into the atmosphere' })}</small></div>
              <div className="tp-pipe hot">
                <span className="tp-scan" />
                <span className="tp-temp">≈ 250 °C</span>
              </div>
            </div>

            <div className="tp-row">
              <div className="tp-label">{t({ es: 'Con Insulatio', en: 'With Insulatio' })}<small>{t({ es: 'La energía se conserva en el proceso', en: 'Energy is kept in the process' })}</small></div>
              <div className="tp-pipe cool">
                <span className="tp-layers" />
                <span className="tp-temp cold">≈ 45 °C</span>
              </div>
            </div>

            <div className="tp-scale"><span>−40°</span><div className="tp-bar" /><span>+600°</span></div>

            <div className="tp-result">
              <div><b>{t({ es: 'Hasta 90%', en: 'Up to 90%' })}</b><span>{t({ es: 'menos pérdida de calor', en: 'less heat loss' })}</span></div>
              <div><b>&lt; 60 °C</b><span>{t({ es: 'superficie segura al tacto', en: 'surface safe to the touch' })}</span></div>
            </div>
          </div>

          <div>
            <span className="eyebrow" data-reveal>{t({ es: 'Eficiencia energética', en: 'Energy Efficiency' })}</span>
            <h2 data-reveal>{t({ es: 'Eficiencia energética con respaldo de ingeniería.', en: 'Energy efficiency backed by engineering.' })}</h2>
            <p className="lead-sm" data-reveal>{t({ es: 'Identificamos dónde se pierde la energía, calculamos el aislante y el espesor óptimos, y documentamos la mejora del desempeño energético de la instalación.', en: 'We identify where energy is lost, calculate the optimal insulation and thickness, and document the improvement in the installation’s energy performance.' })}</p>
            <div className="steps">
              {STEPS.map((s) => (
                <div className="step" data-reveal key={s.n}>
                  <div className="sn">{s.n}</div>
                  <div><h4>{t(s.title)}</h4><p>{t(s.desc)}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
