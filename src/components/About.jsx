import { Icon } from './Icons'

export default function About() {
  return (
    <section className="section about" id="nosotros">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" data-reveal>Nosotros</span>
          <h2 data-reveal>Más de 30 años de ingeniería térmica al servicio de la industria.</h2>
          <p data-reveal>Insulatio es una empresa especializada en el asesoramiento técnico, cálculo e instalación de aislaciones térmicas, contribuyendo a la optimización de los procesos y a la eficiencia energética a nivel industrial y residencial. Entre nuestros directivos contamos con profesionales con 30 años de experiencia en el ámbito nacional e internacional del aislamiento térmico.</p>
          <div className="iso" data-reveal>
            <span>En implementación de Normas ISO 9001</span>
            <span>Materiales certificados bajo normas internacionales</span>
            <span>Personal capacitado con experiencia en obra</span>
          </div>
        </div>
        <div className="sedes">
          <div className="sede caba" data-reveal>
            <div className="tag">Administración y Ventas</div>
            <h3>Buenos Aires</h3>
            <div className="line"><Icon name="pin" />Av. Corrientes 1386, Piso 9 · CABA</div>
            <div className="line"><Icon name="phoneThin" />(011) 5272 7200</div>
            <div className="line"><Icon name="mailThin" />administracion@insulatio.com.ar · ventas@insulatio.com.ar</div>
          </div>
          <div className="sede bb" data-reveal>
            <div className="tag">Departamento Técnico · Talleres</div>
            <h3>Bahía Blanca</h3>
            <div className="line"><Icon name="pin" />Pedro Pico 3236 · Bahía Blanca, Bs. As.</div>
            <div className="line"><Icon name="phoneThin" />(0291) 457 0522 / 0302</div>
            <div className="line"><Icon name="user" />Ing. Jorge Morantes · Director Técnico</div>
          </div>
        </div>
      </div>
    </section>
  )
}
