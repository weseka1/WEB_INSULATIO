import { createContext, useCallback, useContext, useEffect, useState } from 'react'

/**
 * i18n liviano (sin dependencias). Idioma global ES/EN.
 * Uso en componentes:  const { t, lang, setLang } = useLang()
 *   t('texto plano')               → lo devuelve igual
 *   t({ es: '…', en: '…' })        → elige según el idioma activo
 * Los archivos de datos guardan los campos como { es, en } y se renderizan con t().
 */
const LangContext = createContext(null)
const KEY = 'insulatio_lang'

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem(KEY) || 'es' } catch { return 'es' }
  })

  const setLang = useCallback((l) => {
    setLangState(l)
    try { localStorage.setItem(KEY, l) } catch { /* noop */ }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'en'
      ? 'Insulatio — Thermal Insulation & Industrial Services'
      : 'Insulatio — Aislaciones Térmicas & Servicios Industriales'
  }, [lang])

  const t = useCallback((x) => {
    if (x == null) return ''
    if (typeof x === 'string') return x
    return x[lang] ?? x.es ?? ''
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang() debe usarse dentro de <LangProvider>')
  return ctx
}
