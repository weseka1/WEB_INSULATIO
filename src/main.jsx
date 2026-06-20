import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'

// Sin StrictMode a propósito: evita la doble inicialización de Lenis/ScrollTrigger en dev.
createRoot(document.getElementById('root')).render(<App />)
