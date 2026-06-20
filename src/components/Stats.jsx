import { stats } from '../data/services'
import { useLang } from '../lib/i18n'

export default function Stats() {
  const { t } = useLang()
  return (
    <section className="stats">
      <div className="grid">
        {stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className="num">
              <span data-count={s.count} {...(s.thousand ? { 'data-thousand': '1' } : {})}>
                {s.thousand ? s.count.toLocaleString('es-AR') : s.count}
              </span>
              {s.suffix && <small>{s.suffix}</small>}
            </div>
            <div className="cap">{t(s.cap)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
