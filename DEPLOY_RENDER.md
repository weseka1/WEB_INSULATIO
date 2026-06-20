# Deploy Insulatio → Render (Static Site)

Web Vite+React estática. Render la buildea y sirve `dist/`.

## Pasos (una vez)
1. **Repo aislado en GitHub** (patrón Bochile): subir SOLO esta carpeta a un repo nuevo, ej. `WEB_INSULATIO`.
2. **Render** → New → **Static Site** (o Blueprint si toma el `render.yaml`):
   - Build command: `npm ci && npm run build`
   - Publish directory: `dist`
3. Deploy. Queda en `https://insulatio-demo.onrender.com` (o el nombre que elijas).

## Antes de pasarle el link a Jorge
- [ ] En `index.html`: reemplazar `insulatio.onrender.com` por la URL real en `og:url`, `og:image`, `twitter:image` (si no, el preview de WhatsApp no carga la imagen).
- [ ] Confirmar dato: ubicación "Planta Promaíz · Córdoba" (inferida) en `VideoShowcase.jsx`.
- [ ] (Opcional pro) Dominio propio: `insulatio.wsk.com.ar` apuntando al Static Site (Render → Custom Domain + CNAME en tu DNS).

## Notas
- Video de obra: 44 MB, click-to-play (no se descarga hasta el play). Render lo sirve por CDN sin problema.
- Probar el link en celu antes de mandarlo (Jorge lo abre desde WhatsApp).
