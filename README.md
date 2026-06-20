# WEB INSULATIO

Web corporativa de **Insulatio — Aislaciones Térmicas & Servicios Industriales**.
Stack: **Vite + React + GSAP + Lenis**. Modular, secciones independientes, fotos reales de obra.

## Cómo correrla

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist para hostear
npm run preview  # previsualiza el build
```

## Estructura

```
public/assets/         Fotos reales (obras, materiales, logos de clientes) + logo SVG
src/
  ├─ main.jsx          Punto de entrada
  ├─ App.jsx           Orquesta todas las secciones
  ├─ styles/globals.css  Tokens de marca + estilos
  ├─ lib/useScrollSetup.js  Lenis + GSAP + reveals + contadores
  ├─ data/             Contenido editable (servicios, materiales, obras, clientes)
  └─ components/       Una sección = un componente
```

## Editar contenido

Casi todo el texto/contenido vive en `src/data/`:
- `services.js` — los 11 servicios
- `materials.js` — materiales aislantes + coberturas
- `works.js` — galería de trabajos + proyectos con m²
- `clients.js` — logos de clientes

Para cambiar fotos: reemplazá los archivos en `public/assets/` (mismo nombre) o actualizá las rutas en los `data/`.

## Branding (oficial, del logo SVG)

| | Hex |
|---|---|
| Cálido (calor) | `#ef4237` → `#fbb042` |
| Frío | `#2bace2` → `#2a3c90` |
| Negro logo | `#231f20` |

## Deploy

Sitio estático. `npm run build` genera `/dist`, que se sirve en cualquier hosting estático.
Configurado para **Render** vía `render.yaml` (build + publish + dominio). Node pineado en `.node-version`.

---
Desarrollado por **WESEKA.IA**
