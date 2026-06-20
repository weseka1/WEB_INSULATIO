import { useEffect, useRef } from 'react'

/**
 * Convierte un contenedor con overflow-x en un carrusel arrastrable.
 * - Touch (la mano): usa el scroll nativo + scroll-snap.
 * - Mouse: drag-to-scroll (clic y arrastrar). Suprime el click si hubo arrastre,
 *   para que no se dispare un botón/enlace al soltar.
 * Devuelve un ref para enganchar al contenedor.
 */
export default function useDragScroll() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let active = false
    let startX = 0
    let startLeft = 0
    let moved = false

    const onDown = (e) => {
      if (e.pointerType === 'touch' || e.button !== 0) return // touch = scroll nativo
      active = true
      moved = false
      startX = e.clientX
      startLeft = el.scrollLeft
      el.classList.add('dragging')
      try { el.setPointerCapture(e.pointerId) } catch { /* noop */ }
    }
    const onMove = (e) => {
      if (!active) return
      const dx = e.clientX - startX
      if (Math.abs(dx) > 4) moved = true
      el.scrollLeft = startLeft - dx
      e.preventDefault()
    }
    const end = (e) => {
      if (!active) return
      active = false
      el.classList.remove('dragging')
      try { el.releasePointerCapture(e.pointerId) } catch { /* noop */ }
    }
    const onClickCapture = (e) => {
      if (moved) { e.preventDefault(); e.stopPropagation(); moved = false }
    }
    const onDragStart = (e) => e.preventDefault()

    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerup', end)
    el.addEventListener('pointercancel', end)
    el.addEventListener('click', onClickCapture, true)
    el.addEventListener('dragstart', onDragStart)

    return () => {
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', end)
      el.removeEventListener('pointercancel', end)
      el.removeEventListener('click', onClickCapture, true)
      el.removeEventListener('dragstart', onDragStart)
    }
  }, [])

  return ref
}
