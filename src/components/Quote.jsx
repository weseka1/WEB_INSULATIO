import { useState } from 'react'
import { Icon } from './Icons'

const SERVICES = [
  'Aislación térmica (calor/frío)',
  'Aislamiento frío / criogénico',
  'Proyección de poliuretano',
  'Conductos preaislados',
  'Unidades de tratamiento de aire',
  'Racionalización energética / termografía',
  'Remoción de asbestos',
  'Protección pasiva contra fuego',
  'Análisis y tratamiento del ruido',
]

export default function Quote() {
  const [sent, setSent] = useState(false)

  return (
    <section className="section quote" id="cotizacion">
      <div className="wrap">
        <div className="inner">
          <div className="left">
            <span className="eyebrow" data-reveal>Solicitar cotización</span>
            <h2 data-reveal>Cuéntenos su proyecto y le proponemos una solución técnica.</h2>
            <p data-reveal>Nuestro equipo técnico analiza cada caso para proponer el material, el espesor y la terminación óptimos. Cuanto mayor sea el detalle, más precisa será la cotización.</p>
            <div className="ctas" data-reveal>
              <a href="https://wa.me/5492915774387?text=Hola%20Insulatio%2C%20quisiera%20una%20cotizaci%C3%B3n" target="_blank" rel="noopener noreferrer">
                <span className="qi wa"><Icon name="whatsapp" /></span>
                <span><b>WhatsApp directo</b><span>+54 9 291 577 4387 · Ing. Jorge Morantes</span></span>
              </a>
              <a href="tel:+541152727200">
                <span className="qi ph"><Icon name="phone" /></span>
                <span><b>Administración y Ventas</b><span>(011) 5272 7200 · CABA</span></span>
              </a>
              <a href="mailto:ventas@insulatio.com.ar">
                <span className="qi ml"><Icon name="mail" /></span>
                <span><b>Correo</b><span>ventas@insulatio.com.ar</span></span>
              </a>
            </div>
          </div>

          <form className="form" data-reveal onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            {!sent ? (
              <div>
                <div className="row">
                  <div className="field"><label>Nombre y apellido</label><input type="text" required placeholder="Su nombre" /></div>
                  <div className="field"><label>Empresa</label><input type="text" placeholder="Razón social" /></div>
                </div>
                <div className="row">
                  <div className="field"><label>Email</label><input type="email" required placeholder="nombre@empresa.com" /></div>
                  <div className="field"><label>Teléfono / WhatsApp</label><input type="tel" placeholder="+54 …" /></div>
                </div>
                <div className="row">
                  <div className="field"><label>Tipo de servicio</label>
                    <select>{SERVICES.map((s) => <option key={s}>{s}</option>)}</select>
                  </div>
                  <div className="field"><label>Superficie aproximada</label><input type="text" placeholder="m² estimados" /></div>
                </div>
                <div className="row">
                  <div className="field"><label>Ubicación de la obra</label><input type="text" placeholder="Localidad / Provincia" /></div>
                  <div className="field"><label>Temperatura de proceso</label><input type="text" placeholder="Ej. 250 °C / −40 °C" /></div>
                </div>
                <div className="field full"><label>Detalle del proyecto</label><textarea placeholder="Indique qué necesita aislar: equipos, cañerías, tanques, ductos…" /></div>
                <button type="submit" className="btn btn-primary submit magnetic">Enviar solicitud<Icon name="arrow" /></button>
                <p className="form-note">Su consulta se deriva directamente a nuestro equipo técnico-comercial.</p>
              </div>
            ) : (
              <div className="success">
                <div className="ck"><Icon name="checkBig" /></div>
                <h4>Solicitud recibida</h4>
                <p>Gracias por su consulta. Nuestro equipo técnico se pondrá en contacto a la brevedad con una propuesta a medida.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
