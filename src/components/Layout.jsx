import { useState, useEffect } from 'react'
import './Layout.css'
import BackToTop from './BackToTop'
import icon from '../assets/icon.PNG'
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
    setNavOpen(false)
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 250)
    }
  }

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [navOpen])

  return (
    <div className="layout">
      {navOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Fechar menu"
          onClick={() => setNavOpen(false)}
        />
      )}
      <header className="header">
        <button
          type="button"
          className="nav-icon nav-icon-desktop"
          onClick={() => handleNavClick('home')}
          aria-label="Ir para início"
        >
          <img src={icon} alt="" className="nav-icon-img" />
        </button>
        <nav className={`nav ${navOpen ? 'nav-open' : ''}`}>
          <button
            type="button"
            className="nav-icon nav-icon-mobile"
            onClick={() => handleNavClick('home')}
            aria-label="Ir para início"
          >
            <img src={icon} alt="" className="nav-icon-img" />
          </button>
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
              onClick={() => handleNavClick('mission-values')}
            >
              Missão &amp; Valores
            </button>
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNavClick('contacts')}
            >
              Contactos
            </button>
          </div>
          <button
            type="button"
            className="nav-cta"
            onClick={() => handleNavClick('contacts')}
          >
            Pedir Orçamento
          </button>
        </nav>
      </header>
      <main className="main">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="services" className="section">
          <Services />
        </section>
        <section id="testemunhos" className="section">
          <Testimonials />
        </section>
        <section id="mission-values" className="section">
          <MissionValues />
        </section>
        <section id="contacts" className="section">
          <Contacts />
        </section>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Catarina Moreira Makeup Artist. All rights reserved.</p>
      </footer>
      <BackToTop />
    </div>
  )
}
