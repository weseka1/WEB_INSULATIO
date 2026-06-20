// Estado térmico compartido entre el slider del Hero y el shader WebGL.
// Mutable a propósito: se actualiza por frame sin disparar renders de React.
//   hot/cold  → 0..1 según el control térmico (slider)
//   mx/my     → foco del cursor en coords UV (0..1, y hacia arriba)
export const thermal = { hot: 0, cold: 0, mx: 0.5, my: 0.55 }
