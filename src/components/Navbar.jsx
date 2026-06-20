import { useEffect, useState } from 'react'
import Logo from './Logo'
import { Icon } from './Icons'
import { useLang } from '../lib/i18n'

const LINKS = [
  ['#servicios', { es: 'Servicios', en: 'Services' }],
  ['#materiales', { es: 'Materiales', en: 'Materials' }],
  ['#video', { es: 'Obra', en: 'Work' }],
  ['#obras', { es: 'Trabajos', en: 'Projects' }],
  ['#nosotros', { es: 'Nosotros', en: 'About' }],
  ['#contacto', { es: 'Contacto', en: 'Contact' }],
]

function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang-toggle" role="group" aria-label="Idioma / Language">
      <button className={lang === 'es' ? 'on' : ''} onClick={() => setLang('es')} aria-pressed={lang === 'es'}>ES</button>
      <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
    </div>
  )
}

export default function Navbar() {
  const { t } = useLang()
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
          {LINKS.map(([href, label]) => <a key={href} href={href}>{t(label)}</a>)}
        </div>
        <div className="nav-cta">
          <LangToggle />
          <a href="#cotizacion" className="btn btn-primary magnetic">{t({ es: 'Solicitar cotización', en: 'Request a quote' })}<Icon name="arrow" /></a>
          <button className="burger" aria-label="Menú" onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={'mobile-menu' + (open ? ' open' : '')}>
        {LINKS.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{t(label)}</a>)}
        <a href="#cotizacion" className="btn btn-primary" onClick={() => setOpen(false)}>{t({ es: 'Solicitar cotización', en: 'Request a quote' })}</a>
        <div className="mm-lang"><LangToggle /></div>
      </div>
    </>
  )
}
