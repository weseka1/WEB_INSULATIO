/**
 * Iconos SVG de toda la web. Cada uno replica 1:1 los trazos del demo.
 * Uso: <Icon name="thermal" />  ·  los servicios referencian la clave en data/services.js
 */
const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor' }
const lc = { strokeLinecap: 'round', strokeLinejoin: 'round' }

const ICONS = {
  // --- Servicios ---
  thermal: <svg {...base}><path d="M3 12h4l2-7 4 14 2-7h6" {...lc} /></svg>,
  snow: <svg {...base}><path d="M12 2v20M4 7l16 10M20 7L4 17M12 2l3 3-3 3-3-3 3-3z" {...lc} /></svg>,
  spray: <svg {...base}><path d="M14 2c0 4-5 5-5 9a4 4 0 008 0c0-2-1-3-1-3M9 13a4 4 0 108 0" {...lc} /></svg>,
  duct: <svg {...base}><path d="M3 8l9-5 9 5-9 5-9-5z M3 8v8l9 5 9-5V8" {...lc} /></svg>,
  air: <svg {...base}><circle cx="12" cy="12" r="3" /><path d="M12 9c-1 0-5-1-5-4M12 15c1 0 5 1 5 4M9 12c0-1-1-5-4-5M15 12c0 1 1 5 4 5" strokeLinecap="round" /></svg>,
  chart: <svg {...base}><path d="M3 3v18h18M7 14l3-4 3 3 5-7" {...lc} /></svg>,
  badge: <svg {...base}><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z M9 12l2 2 4-4" {...lc} /></svg>,
  layers: <svg {...base}><path d="M4 4h16v16H4z M4 9h16M9 4v16M4 14h16" {...lc} /></svg>,
  hazard: <svg {...base}><path d="M12 2L2 20h20L12 2z M12 9v5M12 17h.01" {...lc} /></svg>,
  flame: <svg {...base}><path d="M12 3c2 3 5 4 5 8a5 5 0 01-10 0c0-2 1-3 2-4M5 14a7 7 0 0014 0" {...lc} /></svg>,
  sound: <svg {...base}><path d="M3 12h2l2-6 4 14 3-10 2 4h5" {...lc} /></svg>,

  // --- Utilitarios ---
  arrow: <svg {...base}><path d="M5 12h14M13 6l6 6-6 6" strokeWidth="2" {...lc} /></svg>,
  check: <svg {...base} strokeWidth="2"><path d="M20 6L9 17l-5-5" {...lc} /></svg>,
  checkBig: <svg {...base} strokeWidth="2.5"><path d="M20 6L9 17l-5-5" {...lc} /></svg>,
  shield: <svg {...base} strokeWidth="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" {...lc} /></svg>,
  refresh: <svg {...base}><path d="M3 12a9 9 0 109-9M3 12a9 9 0 019-9M12 3v9l6 3" {...lc} /></svg>,
  zoom: <svg {...base} strokeWidth="2"><path d="M21 21l-4.3-4.3M11 18a7 7 0 100-14 7 7 0 000 14zM11 8v6M8 11h6" {...lc} /></svg>,
  close: <svg {...base} strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" /></svg>,
  chevLeft: <svg {...base} strokeWidth="2"><path d="M15 18l-6-6 6-6" {...lc} /></svg>,
  chevRight: <svg {...base} strokeWidth="2"><path d="M9 18l6-6-6-6" {...lc} /></svg>,
  swipe: <svg {...base} strokeWidth="1.8"><path d="M2 12h20M6 8l-4 4 4 4M18 8l4 4-4 4" {...lc} /></svg>,
  phone: <svg {...base} strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" {...lc} /></svg>,
  phoneThin: <svg {...base} strokeWidth="1.6"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" {...lc} /></svg>,
  mail: <svg {...base} strokeWidth="1.8"><path d="M4 4h16v16H4zM4 6l8 6 8-6" {...lc} /></svg>,
  mailThin: <svg {...base} strokeWidth="1.6"><path d="M4 4h16v16H4zM4 6l8 6 8-6" {...lc} /></svg>,
  pin: <svg {...base} strokeWidth="1.6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" {...lc} /><circle cx="12" cy="10" r="3" /></svg>,
  user: <svg {...base} strokeWidth="1.6"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" /><path d="M2 9h4v12H2z" /></svg>,
  whatsapp: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zM6.597 20.13c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>,
}

export function Icon({ name }) {
  return ICONS[name] || null
}

export default Icon
