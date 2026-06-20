import { Icon } from './Icons'
import { useLang } from '../lib/i18n'

export default function About() {
  const { t } = useLang()
  return (
    <section className="section about" id="nosotros">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" data-reveal>{t({ es: 'Nosotros', en: 'About us' })}</span>
          <h2 data-reveal>{t({ es: 'Más de 30 años de ingeniería térmica al servicio de la industria.', en: 'Over 30 years of thermal engineering at the service of industry.' })}</h2>
          <p data-reveal>{t({ es: 'Insulatio es una empresa especializada en el asesoramiento técnico, cálculo e instalación de aislaciones térmicas, contribuyendo a la optimización de los procesos y a la eficiencia energética a nivel industrial y residencial. Entre nuestros directivos contamos con profesionales con 30 años de experiencia en el ámbito nacional e internacional del aislamiento térmico.', en: 'Insulatio is a company specialized in the technical advice, calculation and installation of thermal insulation, contributing to process optimization and energy efficiency at the industrial and residential level. Our directors include professionals with 30 years of experience in the national and international thermal-insulation field.' })}</p>
          <div className="iso" data-reveal>
            <span>{t({ es: 'En implementación de Normas ISO 9001', en: 'Implementing ISO 9001 standards' })}</span>
            <span>{t({ es: 'Materiales certificados bajo normas internacionales', en: 'Materials certified to international standards' })}</span>
            <span>{t({ es: 'Personal capacitado con experiencia en obra', en: 'Trained personnel with on-site experience' })}</span>
          </div>
        </div>
        <div className="sedes">
          <div className="sede caba" data-reveal>
            <div className="tag">{t({ es: 'Administración y Ventas', en: 'Administration & Sales' })}</div>
            <h3>Buenos Aires</h3>
            <div className="line"><Icon name="pin" />Av. Corrientes 1386, Piso 9 · CABA</div>
            <div className="line"><Icon name="phoneThin" />(011) 5272 7200</div>
            <div className="line"><Icon name="mailThin" />administracion@insulatio.com.ar · ventas@insulatio.com.ar</div>
          </div>
          <div className="sede bb" data-reveal>
            <div className="tag">{t({ es: 'Departamento Técnico · Talleres', en: 'Technical Department · Workshops' })}</div>
            <h3>Bahía Blanca</h3>
            <div className="line"><Icon name="pin" />Pedro Pico 3236 · Bahía Blanca, Bs. As.</div>
            <div className="line"><Icon name="phoneThin" />(0291) 457 0522 / 0302</div>
            <div className="line"><Icon name="user" />{t({ es: 'Ing. Jorge Morantes · Director Técnico', en: 'Ing. Jorge Morantes · Technical Director' })}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
