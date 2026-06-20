// Los 11 servicios de Insulatio (orden = como aparecen en la grilla).
// accent: 'warm' | 'cold' | 'dual'  ·  icon: clave en components/Icons.jsx
export const services = [
  { n: '01', accent: 'dual', icon: 'thermal', title: 'Aislaciones Térmicas',
    desc: 'Asesoramiento técnico, cálculo e instalación para frío y calor. Selección del espesor y material óptimos para optimizar el proceso y el ahorro energético.' },
  { n: '02', accent: 'cold', icon: 'snow', title: 'Aislamiento Frío & Criogénico',
    desc: 'Para ítems operando bajo temperatura ambiente, hasta valores criogénicos (100 K). Control de la condensación, conservación de energía y protección de fluidos de proceso.' },
  { n: '03', accent: 'warm', icon: 'spray', title: 'Proyección de Poliuretano',
    desc: 'Inyección y proyección de espuma de poliuretano con máquina Valgoi VAL 500. Aislación de techos y paredes en viviendas, galpones e industria.' },
  { n: '04', accent: 'cold', icon: 'duct', title: 'Conductos Preaislados',
    desc: 'Paneles de poliisocianurato recubiertos con foil de aluminio. Livianos, versátiles, de gran rigidez estructural y fáciles de cortar y ensamblar.' },
  { n: '05', accent: 'cold', icon: 'air', title: 'Unidades de Tratamiento de Aire',
    desc: 'Hierro estructural y doble pared de chapa galvanizada con aislación de poliisocianurato. Puertas de inspección y burletes que garantizan estanqueidad y silencio.' },
  { n: '06', accent: 'dual', icon: 'chart', title: 'Racionalización Energética',
    desc: 'Termografías, inspecciones y cálculos termodinámicos y financieros. Diagnóstico de los sistemas aislantes existentes y análisis crítico de resultados.' },
  { n: '07', accent: 'cold', icon: 'badge', title: 'Implantación ISO-50001',
    desc: 'Sistema de Gestión Energética. Ahorre dinero y gane incentivos fiscales mejorando su desempeño energético mediante diagnóstico, monitoreo y mantenimiento.' },
  { n: '08', accent: 'dual', icon: 'layers', title: 'Espesores Económicos',
    desc: 'Análisis del espesor económico de aislación para lograr la performance necesaria minimizando las pérdidas energéticas en cada proyecto.' },
  { n: '09', accent: 'warm', icon: 'hazard', title: 'Remoción de Asbestos',
    desc: 'Control del pasivo ambiental: medición, toma de muestras y análisis de laboratorio, retiro de aislaciones, embalaje, disposición final e ingeniería del nuevo sistema.' },
  { n: '10', accent: 'warm', icon: 'flame', title: 'Protección Pasiva Contra Fuego',
    desc: 'Ingeniería, provisión y montaje para fuego celulósico y petroquímico. Materiales certificados bajo normas internacionales. Hasta 240 minutos de resistencia.' },
  { n: '11', accent: 'cold', icon: 'sound', title: 'Análisis y Tratamiento del Ruido',
    desc: 'Estudio del espectro sonoro y mapas de ruido. Identificadas las fuentes, proponemos soluciones de control eficiente con previsión precisa de resultados.' },
]

export const stats = [
  { count: 30, suffix: '+', cap: 'Años de experiencia de nuestros directivos en el rubro' },
  { count: 25000, thousand: true, suffix: '+ m²', cap: 'Aislados en obra entre equipos y cañerías' },
  { count: 240, suffix: 'min', cap: 'Protección certificada contra fuego petroquímico' },
  { count: 11, suffix: '', cap: 'Servicios industriales integrados' },
]
