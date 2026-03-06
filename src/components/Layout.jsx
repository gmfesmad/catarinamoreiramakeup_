import { useState } from 'react'
import './Layout.css'
import Home from '../pages/Home'
import About from '../pages/About'
import MissionValues from '../pages/MissionValues'
import Services from '../pages/Services'
import Testimonials from '../pages/Testimonials'
import Portfolio from '../pages/Portfolio'
import Contacts from '../pages/Contacts'

export default function Layout() {
  const [navOpen, setNavOpen] = useState(false)

  const handleNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setNavOpen(false)
  }

  return (
    <div className="layout">
      <header className="header">
        <nav className={`nav ${navOpen ? 'nav-open' : ''}`}>
          <button
            type="button"
            className="nav-toggle"
            aria-label={navOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="nav-links">
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNavClick('home')}
            >
              Início
            </button>
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNavClick('about')}
            >
              Sobre mim
            </button>
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNavClick('mission-values')}
            >
              Missão &amp; Valores
            </button>
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNavClick('services')}
            >
              Serviços
            </button>
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNavClick('testemunhos')}
            >
              Testemunhos
            </button>
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNavClick('contacts')}
            >
              Contactos
            </button>
          </div>
        </nav>
      </header>
      <main className="main">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="mission-values" className="section">
          <MissionValues />
        </section>
        <section id="services" className="section">
          <Services />
        </section>
        <section id="testemunhos" className="section">
          <Testimonials />
        </section>
        <section id="contacts" className="section">
          <Contacts />
        </section>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Catarina Moreira Makeup Artist. All rights reserved.</p>
      </footer>
    </div>
  )
}
