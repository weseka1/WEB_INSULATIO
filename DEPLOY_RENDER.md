# Deploy Insulatio → Render (Static Site) + dominio insulatio.wsk.com.ar

Web Vite+React estática. Render la buildea y sirve `dist/`.

## 1) Deploy en Render (login tuyo)
1. Render → **New → Blueprint** → elegí el repo **weseka1/WEB_INSULATIO** → **Apply**.
   - Render lee `render.yaml`: build `npm run build`, sirve `dist/`, y **pre-registra el dominio** `insulatio.wsk.com.ar`.
2. Queda online en `https://insulatio-demo.onrender.com` (URL interna de Render).

## 2) Dominio propio insulatio.wsk.com.ar
1. En Render → el Static Site → **Settings → Custom Domains**: ya debería figurar `insulatio.wsk.com.ar` (lo trae el blueprint). Si no, agregalo.
2. Render te muestra el **target del CNAME**. En el **DNS de wsk.com.ar** creá:
   - **Tipo:** CNAME · **Host:** `insulatio` · **Valor:** `insulatio-demo.onrender.com` (o el que indique Render)
3. Esperá a que Render verifique + emita el **SSL** (unos minutos). Cuando esté en verde, el link anda con https.

> Las og tags ya apuntan a `https://insulatio.wsk.com.ar` → recién compartí el link con Jorge **cuando el dominio esté activo** (si no, el preview de WhatsApp no carga la imagen).

## Antes de pasarle el link a Jorge
- [ ] Dominio activo (verde/SSL) en Render.
- [ ] Confirmar dato: ubicación "Planta Promaíz · Córdoba" (inferida) en `VideoShowcase.jsx`.
- [ ] Probar el link en celu (Jorge lo abre desde WhatsApp).

## Notas
- Video de obra: ~44 MB, click-to-play (no se descarga hasta el play). Render lo sirve por CDN.
