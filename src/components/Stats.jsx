import { stats } from '../data/services'

export default function Stats() {
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
            <div className="cap">{s.cap}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
