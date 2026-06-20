import { Icon } from './Icons'

const FEATS = [
  { icon: 'shield', title: 'Control de CUI', desc: 'Sistemas que evitan la corrosión bajo aislamiento, el principal enemigo oculto de las cañerías.' },
  { icon: 'refresh', title: 'Recambio en operación', desc: 'Sistema exclusivo de base europea para recambiar aislaciones criogénicas sin detener la unidad.' },
  { icon: 'check', title: 'Terminación de obra', desc: 'Calidad reconocida en el trazado y la terminación de la chapa, y en las construcciones auxiliares.' },
]

export default function Differentiator() {
  return (
    <section className="section band">
      <div className="wrap">
        <div className="inner">
          <div>
            <span className="eyebrow" data-reveal>El diferencial Insulatio</span>
            <h2 data-reveal>Protección del activo, más allá de la aislación.</h2>
            <p data-reveal>Trabajamos con materiales y terminaciones que evitan la corrosión bajo el aislamiento (CUI), garantizando la vida útil del equipo y la estabilidad de la instalación en el tiempo.</p>
            <div className="feats">
              {FEATS.map((f) => (
                <div className="feat" data-reveal key={f.title}>
                  <div className="fi"><Icon name={f.icon} /></div>
                  <div><h4>{f.title}</h4><p>{f.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="kpi-card" data-reveal>
            <div className="big">0 <span style={{ fontSize: '.5em' }}>Perm</span></div>
            <div className="big-cap">Permeabilidad combinada nula en nuestro composite de recambio criogénico — preserva el sustrato y mantiene la instalación estable.</div>
            <div className="divider" />
            <div className="row"><span>Estabilidad garantizada</span><b>+10 años</b></div>
            <div className="row"><span>Base tecnológica</span><b>Europea</b></div>
            <div className="row"><span>Operación durante el recambio</span><b>Sin parada</b></div>
          </div>
        </div>
      </div>
    </section>
  )
}
