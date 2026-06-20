import { Icon } from './Icons'
import { useLang } from '../lib/i18n'

const FEATS = [
  { icon: 'shield', title: { es: 'Control de CUI', en: 'CUI Control' },
    desc: { es: 'Sistemas que evitan la corrosión bajo aislamiento, el principal enemigo oculto de las cañerías.',
            en: 'Systems that prevent corrosion under insulation, the main hidden enemy of piping.' } },
  { icon: 'refresh', title: { es: 'Recambio en operación', en: 'Changeover in operation' },
    desc: { es: 'Sistema exclusivo de base europea para recambiar aislaciones criogénicas sin detener la unidad.',
            en: 'An exclusive European-based system to replace cryogenic insulation without shutting down the unit.' } },
  { icon: 'check', title: { es: 'Terminación de obra', en: 'Site finishing' },
    desc: { es: 'Calidad reconocida en el trazado y la terminación de la chapa, y en las construcciones auxiliares.',
            en: 'Recognized quality in metal-sheet layout and finishing, and in auxiliary constructions.' } },
]

export default function Differentiator() {
  const { t } = useLang()
  return (
    <section className="section band">
      <div className="wrap">
        <div className="inner">
          <div>
            <span className="eyebrow" data-reveal>{t({ es: 'El diferencial Insulatio', en: 'The Insulatio difference' })}</span>
            <h2 data-reveal>{t({ es: 'Protección del activo, más allá de la aislación.', en: 'Asset protection, beyond insulation.' })}</h2>
            <p data-reveal>{t({ es: 'Trabajamos con materiales y terminaciones que evitan la corrosión bajo el aislamiento (CUI), garantizando la vida útil del equipo y la estabilidad de la instalación en el tiempo.', en: 'We work with materials and finishes that prevent corrosion under insulation (CUI), ensuring the equipment’s service life and the long-term stability of the installation.' })}</p>
            <div className="feats">
              {FEATS.map((f) => (
                <div className="feat" data-reveal key={f.icon}>
                  <div className="fi"><Icon name={f.icon} /></div>
                  <div><h4>{t(f.title)}</h4><p>{t(f.desc)}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="kpi-card" data-reveal>
            <div className="big">0 <span style={{ fontSize: '.5em' }}>Perm</span></div>
            <div className="big-cap">{t({ es: 'Permeabilidad combinada nula en nuestro composite de recambio criogénico — preserva el sustrato y mantiene la instalación estable.', en: 'Zero combined permeability in our cryogenic-replacement composite — it preserves the substrate and keeps the installation stable.' })}</div>
            <div className="divider" />
            <div className="row"><span>{t({ es: 'Estabilidad garantizada', en: 'Guaranteed stability' })}</span><b>{t({ es: '+10 años', en: '+10 years' })}</b></div>
            <div className="row"><span>{t({ es: 'Base tecnológica', en: 'Technology base' })}</span><b>{t({ es: 'Europea', en: 'European' })}</b></div>
            <div className="row"><span>{t({ es: 'Operación durante el recambio', en: 'Operation during changeover' })}</span><b>{t({ es: 'Sin parada', en: 'No shutdown' })}</b></div>
          </div>
        </div>
      </div>
    </section>
  )
}
