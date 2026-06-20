import Logo from './Logo'

export default function Footer() {
  return (
    <footer id="contacto">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Logo />
            <p>Aislaciones térmicas y servicios industriales. Asesoramiento técnico, cálculo e instalación para procesos críticos en toda la Argentina.</p>
          </div>
          <div className="foot-col">
            <h5>Servicios</h5>
            <a href="#servicios">Aislaciones térmicas</a>
            <a href="#servicios">Aislamiento frío &amp; criogénico</a>
            <a href="#servicios">Racionalización energética</a>
            <a href="#servicios">Remoción de asbestos</a>
            <a href="#servicios">Protección pasiva contra fuego</a>
          </div>
          <div className="foot-col">
            <h5>Contacto</h5>
            <p>Av. Corrientes 1386, Piso 9 · CABA</p>
            <p>Pedro Pico 3236 · Bahía Blanca</p>
            <a href="tel:+541152727200">(011) 5272 7200</a>
            <a href="tel:+542914570522">(0291) 457 0522 / 0302</a>
            <a href="mailto:ventas@insulatio.com.ar">ventas@insulatio.com.ar</a>
          </div>
        </div>
        <div className="bigword">insulatio</div>
        <div className="foot-bottom">
          <p>© 2026 Insulatio S.A. — Aislaciones Térmicas y Servicios Industriales. Todos los derechos reservados.</p>
          <p className="weseka">Sitio desarrollado por <b>WESEKA.IA</b></p>
        </div>
      </div>
    </footer>
  )
}
