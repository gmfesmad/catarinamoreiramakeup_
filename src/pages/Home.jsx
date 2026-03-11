import './Page.css'
import banner from '../assets/CatarinaMoreiraBanner.png'
import bannerMobile from '../assets/banner_mobile.png'

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Home() {
  return (
    <section className="page home">
      <div
        className="home-bg home-bg-desktop"
        style={{ backgroundImage: `url(${banner})` }}
        aria-hidden
      />
      <div
        className="home-bg home-bg-mobile"
        style={{ backgroundImage: `url(${bannerMobile})` }}
        aria-hidden
      />
      <img
        src={bannerMobile}
        alt=""
        className="home-bg-mobile-img"
        aria-hidden
      />
      <div className="home-hero">
        <button
          type="button"
          className="home-hero-cta"
          onClick={() => scrollToSection('contacts')}
        >
          Saber mais
        </button>
      </div>
    </section>
  )
}
