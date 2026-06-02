import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Offer from './components/Offer.jsx'
import Benefits from './components/Benefits.jsx'
import Projects from './components/Projects.jsx'
import Process from './components/Process.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white text-navy-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Offer />
        <Benefits />
        <Projects />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
