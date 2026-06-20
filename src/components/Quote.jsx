import { useState } from 'react'
import { Icon } from './Icons'
import { useLang } from '../lib/i18n'

const SERVICES = [
  { es: 'Aislación térmica (calor/frío)', en: 'Thermal insulation (heat/cold)' },
  { es: 'Aislamiento frío / criogénico', en: 'Cold / cryogenic insulation' },
  { es: 'Proyección de poliuretano', en: 'Polyurethane spraying' },
  { es: 'Conductos preaislados', en: 'Pre-insulated ducts' },
  { es: 'Unidades de tratamiento de aire', en: 'Air handling units' },
  { es: 'Racionalización energética / termografía', en: 'Energy rationalization / thermography' },
  { es: 'Remoción de asbestos', en: 'Asbestos removal' },
  { es: 'Protección pasiva contra fuego', en: 'Passive fire protection' },
  { es: 'Análisis y tratamiento del ruido', en: 'Noise analysis & treatment' },
]

export default function Quote() {
  const { t } = useLang()
  const [sent, setSent] = useState(false)
  const waMsg = encodeURIComponent(t({ es: 'Hola Insulatio, quisiera una cotización', en: 'Hello Insulatio, I would like a quote' }))

  return (
    <section className="section quote" id="cotizacion">
      <div className="wrap">
        <div className="inner">
          <div className="left">
            <span className="eyebrow" data-reveal>{t({ es: 'Solicitar cotización', en: 'Request a quote' })}</span>
            <h2 data-reveal>{t({ es: 'Cuéntenos su proyecto y le proponemos una solución técnica.', en: 'Tell us about your project and we’ll propose a technical solution.' })}</h2>
            <p data-reveal>{t({ es: 'Nuestro equipo técnico analiza cada caso para proponer el material, el espesor y la terminación óptimos. Cuanto mayor sea el detalle, más precisa será la cotización.', en: 'Our technical team analyzes each case to propose the optimal material, thickness and finish. The more detail you provide, the more accurate the quote.' })}</p>
            <div className="ctas" data-reveal>
              <a href={`https://wa.me/5492915774387?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
                <span className="qi wa"><Icon name="whatsapp" /></span>
                <span><b>{t({ es: 'WhatsApp directo', en: 'Direct WhatsApp' })}</b><span>+54 9 291 577 4387 · Ing. Jorge Morantes</span></span>
              </a>
              <a href="tel:+541152727200">
                <span className="qi ph"><Icon name="phone" /></span>
                <span><b>{t({ es: 'Administración y Ventas', en: 'Administration & Sales' })}</b><span>(011) 5272 7200 · CABA</span></span>
              </a>
              <a href="mailto:ventas@insulatio.com.ar">
                <span className="qi ml"><Icon name="mail" /></span>
                <span><b>{t({ es: 'Correo', en: 'Email' })}</b><span>ventas@insulatio.com.ar</span></span>
              </a>
            </div>
          </div>

          <form className="form" data-reveal onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            {!sent ? (
              <div>
                <div className="row">
                  <div className="field"><label>{t({ es: 'Nombre y apellido', en: 'Full name' })}</label><input type="text" required placeholder={t({ es: 'Su nombre', en: 'Your name' })} /></div>
                  <div className="field"><label>{t({ es: 'Empresa', en: 'Company' })}</label><input type="text" placeholder={t({ es: 'Razón social', en: 'Company name' })} /></div>
                </div>
                <div className="row">
                  <div className="field"><label>{t({ es: 'Email', en: 'Email' })}</label><input type="email" required placeholder={t({ es: 'nombre@empresa.com', en: 'name@company.com' })} /></div>
                  <div className="field"><label>{t({ es: 'Teléfono / WhatsApp', en: 'Phone / WhatsApp' })}</label><input type="tel" placeholder="+54 …" /></div>
                </div>
                <div className="row">
                  <div className="field"><label>{t({ es: 'Tipo de servicio', en: 'Service type' })}</label>
                    <select>{SERVICES.map((s) => <option key={s.es}>{t(s)}</option>)}</select>
                  </div>
                  <div className="field"><label>{t({ es: 'Superficie aproximada', en: 'Approximate area' })}</label><input type="text" placeholder={t({ es: 'm² estimados', en: 'estimated m²' })} /></div>
                </div>
                <div className="row">
                  <div className="field"><label>{t({ es: 'Ubicación de la obra', en: 'Project location' })}</label><input type="text" placeholder={t({ es: 'Localidad / Provincia', en: 'City / Province' })} /></div>
                  <div className="field"><label>{t({ es: 'Temperatura de proceso', en: 'Process temperature' })}</label><input type="text" placeholder={t({ es: 'Ej. 250 °C / −40 °C', en: 'e.g. 250 °C / −40 °C' })} /></div>
                </div>
                <div className="field full"><label>{t({ es: 'Detalle del proyecto', en: 'Project details' })}</label><textarea placeholder={t({ es: 'Indique qué necesita aislar: equipos, cañerías, tanques, ductos…', en: 'Tell us what you need to insulate: equipment, piping, tanks, ducts…' })} /></div>
                <button type="submit" className="btn btn-primary submit magnetic">{t({ es: 'Enviar solicitud', en: 'Send request' })}<Icon name="arrow" /></button>
                <p className="form-note">{t({ es: 'Su consulta se deriva directamente a nuestro equipo técnico-comercial.', en: 'Your inquiry goes straight to our technical-sales team.' })}</p>
              </div>
            ) : (
              <div className="success">
                <div className="ck"><Icon name="checkBig" /></div>
                <h4>{t({ es: 'Solicitud recibida', en: 'Request received' })}</h4>
                <p>{t({ es: 'Gracias por su consulta. Nuestro equipo técnico se pondrá en contacto a la brevedad con una propuesta a medida.', en: 'Thank you for your inquiry. Our technical team will get in touch shortly with a tailored proposal.' })}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
