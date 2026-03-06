import './Page.css'
import banner from '../assets/CatarinaMoreiraBanner.png'

export default function Home() {
  return (
    <section className="page home">
      <img
        src={banner}
        alt="Catarina Moreira Makeup Artist – destaque de maquilhagem"
        className="home-banner"
      />
    </section>
  )
}
