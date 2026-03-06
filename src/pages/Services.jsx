import './Page.css'
import { useRef } from "react"
import { useState } from 'react'
import noiva from '../assets/noiva.JPG';
import noiva2 from '../assets/noiva2.JPG';
import noiva3 from '../assets/noiva3.JPG';


import socialv2 from '../assets/social_v2.JPG';
import social2 from '../assets/social2.JPG';
import social3 from '../assets/social3.JPG';
import social4 from '../assets/social4.JPG';
import social5 from '../assets/social5.JPG';
import social6 from '../assets/social6.JPG';
import social7 from '../assets/social7.JPG';
import social8 from '../assets/social8.JPG';


import criativa from '../assets/criativa.JPG';
import criativa2 from '../assets/criativa2.jpg';
import criativa3 from '../assets/criativa3.JPG';
import criativa4 from '../assets/criativa4.JPG';
import criativa5 from '../assets/criativa5.JPG';

function ImageSlider({ images, title }) {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  const goToSlide = (index) => {
    setCurrent(index)
  }

  return (
    <div className="slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title} ${index + 1}`}
            className="service-image"
          />
        ))}
      </div>

      <button className="arrow left" onClick={prevSlide}>
        ‹
      </button>

      <button className="arrow right" onClick={nextSlide}>
        ›
      </button>

      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}


const services = [
  {
    title: 'Maquilhagem de Noiva',
    images: [noiva, noiva3, noiva2],
    description: (
      <>
        <p>
          Experiência personalizada e exclusiva, pensada ao detalhe para o dia mais especial de cada noiva e criada para
          refletir a identidade e o estilo do casamento. Com produtos de alta qualidade e técnicas profissionais
          exclusivas, está assegurada a durabilidade, conforto e um resultado de excelência para que cada noiva se
          sinta segura, radiante e especial desde o primeiro ao último momento.
        </p>
        <div className="bridal-timeline-luxury">
          <div className="timeline-step">
            <div className="timeline-marker">
              <span>1</span>
            </div>

            <div className="timeline-content">
              <h4>Reserva da Data</h4>
              <p>
                Tudo começa aqui! Após o envio do orçamento e das condições de reserva,
                a data fica oficialmente reservada na agenda.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-marker">
              <span>2</span>
            </div>

            <div className="timeline-content">
              <h4>Prova de Maquilhagem</h4>
              <p>
                Este é um momento totalmente dedicado a conhecer a identidade da noiva
                e o estilo do casamento. Juntas criamos a maquilhagem ideal para o
                grande dia.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-marker">
              <span>3</span>
            </div>

            <div className="timeline-content">
              <h4>Organização da Timeline</h4>
              <p>
                Criação e envio de um horário e planeamento da preparação da noiva e
                convidadas, garantindo tranquilidade e tempo suficiente para cada
                etapa.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-marker">
              <span>4</span>
            </div>

            <div className="timeline-content">
              <h4>Dia do Casamento</h4>
              <p>
                No grande dia estou presente para criar a maquilhagem perfeita e
                acompanhar momentos importantes como a reportagem fotográfica.
              </p>
            </div>
          </div>

        </div>
      </>
    ),
  },
  {
    title: 'Maquilhagem Social',
    images: [socialv2, social4,social5,social2,social6,social8,social7,social3],
    description: (
      <p>
        Serviço de alta qualidade desenvolvido para quem procura elegância, sofisticação e um acabamento impecável,
        confortável e duradouro. Cada detalhe é cuidadosamente trabalhado para valorizar a beleza natural de forma
        elegante e harmoniosa, adaptando-se, sempre, à essência de cada pessoa e ao evento/ocasião.
      </p>
    ),
  },
  {
    title: 'Maquilhagem Criativa',
    images: [criativa5, criativa4, criativa3, criativa2, criativa],
    description: (
      <p>
        Serviço onde a criatividade, expressão visual e elegância andam de mãos dadas. Ideal para quem deseja destacar-se com cores, brilho, detalhes especiais e elementos decorativos. 
      </p>
    ),
  }
]

export default function Services() {
  return (
    <section className="page services">
      <h1 className="page-title">Serviços</h1>
      <ul className="services-list">
        {services.map((service) => (
          <li key={service.title} className="service-card">
            <details className="service-details">
              <summary className="service-summary">
                <span className="service-title">{service.title}</span>
                <span className="service-toggle" aria-hidden>
                  +
                </span>
              </summary>
              <div className="service-desc">
                {service.description}
                <ImageSlider images={service.images} title={service.title} />
              </div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  )
}
