import { useEffect, useState } from 'react'
import Logo from './Logo'
import { Icon } from './Icons'

const LINKS = [
  ['#servicios', 'Servicios'],
  ['#materiales', 'Materiales'],
  ['#video', 'Obra'],
  ['#obras', 'Trabajos'],
  ['#nosotros', 'Nosotros'],
  ['#contacto', 'Contacto'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // useScrollSetup dispara este evento al hacer clic en un anchor interno.
  useEffect(() => {
    const close = () => setOpen(false)
    document.addEventListener('insulatio:closemenu', close)
    return () => document.removeEventListener('insulatio:closemenu', close)
  }, [])

  return (
    <>
      <nav className="nav" id="nav">
        <a href="#top" className="brand" aria-label="Insulatio inicio"><Logo /></a>
        <div className="nav-links">
          {LINKS.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <div className="nav-cta">
          <a href="#cotizacion" className="btn btn-primary magnetic">Solicitar cotización<Icon name="arrow" /></a>
          <button className="burger" aria-label="Menú" onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={'mobile-menu' + (open ? ' open' : '')}>
        {LINKS.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#cotizacion" className="btn btn-primary" onClick={() => setOpen(false)}>Solicitar cotización</a>
      </div>
    </>
  )
}
