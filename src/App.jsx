import useScrollSetup from './lib/useScrollSetup'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Stats from './components/Stats'
import Services from './components/Services'
import Materials from './components/Materials'
import EnergyValue from './components/EnergyValue'
import Differentiator from './components/Differentiator'
import VideoShowcase from './components/VideoShowcase'
import Works from './components/Works'
import FireProtection from './components/FireProtection'
import Quote from './components/Quote'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  useScrollSetup()
  return (
    <>
      <Preloader />
      <Navbar />
      <main id="top">
        <Hero />
        <VideoShowcase />
        <Clients />
        <Stats />
        <Services />
        <Materials />
        <EnergyValue />
        <Differentiator />
        <Works />
        <FireProtection />
        <Quote />
        <About />
        <Footer />
      </main>
      <div className="fx-hot" aria-hidden="true" />
      <div className="fx-cold" aria-hidden="true" />
    </>
  )
}
