import Logo from './Logo'
import { useLang } from '../lib/i18n'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer id="contacto">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Logo />
            <p>{t({ es: 'Aislaciones térmicas y servicios industriales. Asesoramiento técnico, cálculo e instalación para procesos críticos en toda la Argentina.', en: 'Thermal insulation and industrial services. Technical advice, calculation and installation for critical processes across Argentina.' })}</p>
          </div>
          <div className="foot-col">
            <h5>{t({ es: 'Servicios', en: 'Services' })}</h5>
            <a href="#servicios">{t({ es: 'Aislaciones térmicas', en: 'Thermal insulation' })}</a>
            <a href="#servicios">{t({ es: 'Aislamiento frío & criogénico', en: 'Cold & cryogenic insulation' })}</a>
            <a href="#servicios">{t({ es: 'Racionalización energética', en: 'Energy rationalization' })}</a>
            <a href="#servicios">{t({ es: 'Remoción de asbestos', en: 'Asbestos removal' })}</a>
            <a href="#servicios">{t({ es: 'Protección pasiva contra fuego', en: 'Passive fire protection' })}</a>
          </div>
          <div className="foot-col">
            <h5>{t({ es: 'Contacto', en: 'Contact' })}</h5>
            <p>Av. Corrientes 1386, Piso 9 · CABA</p>
            <p>Pedro Pico 3236 · Bahía Blanca</p>
            <a href="tel:+541152727200">(011) 5272 7200</a>
            <a href="tel:+542914570522">(0291) 457 0522 / 0302</a>
            <a href="mailto:ventas@insulatio.com.ar">ventas@insulatio.com.ar</a>
          </div>
        </div>
        <div className="bigword">insulatio</div>
        <div className="foot-bottom">
          <p>{t({ es: '© 2026 Insulatio S.A. — Aislaciones Térmicas y Servicios Industriales. Todos los derechos reservados.', en: '© 2026 Insulatio S.A. — Thermal Insulation & Industrial Services. All rights reserved.' })}</p>
          <p className="weseka">{t({ es: 'Sitio desarrollado por', en: 'Site developed by' })} <b>WESEKA.IA</b></p>
        </div>
      </div>
    </footer>
  )
}
