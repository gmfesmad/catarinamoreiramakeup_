import './Page.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import noiva from '../assets/noiva.JPG'
import noiva2 from '../assets/noiva2.JPG'
import noiva3 from '../assets/noiva3.JPG'
import noiva4 from '../assets/noiva4.JPG'
import noiva5 from '../assets/noiva5.JPG'
import noiva6 from '../assets/noiva6.JPG'
import noiva8 from '../assets/noiva8.jpg'
import noiva9 from '../assets/noiva9.jpg'
import noiva10 from '../assets/noiva10.JPG'
import noiva11 from '../assets/noiva11.jpg'
import noiva12 from '../assets/noiva12.jpg'
import noiva13 from '../assets/noiva13.jpg'
import noiva14 from '../assets/noiva14.jpg'
import socialv2 from '../assets/social_v2.JPG'
import social2 from '../assets/social2.JPG'
import social3 from '../assets/social3.JPG'
import social4 from '../assets/social4.JPG'
import social5 from '../assets/social5.JPG'
import social6 from '../assets/social6.JPG'
import social7 from '../assets/social7.JPG'
import social8 from '../assets/social8.JPG'
import criativa from '../assets/criativa.JPG'
import criativa2 from '../assets/criativa2.jpg'
import criativa3 from '../assets/criativa3.JPG'
import criativa4 from '../assets/criativa4.JPG'
import criativa5 from '../assets/criativa5.JPG'

function ImageSlider({ images, title }) {
  return (
    <div className="slider-wrapper slider-wrapper--swiper">
      <Swiper
        className="slider slider--swiper"
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        speed={300}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        grabCursor
        resistanceRatio={0}
        touchReleaseOnEdges
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`${title} ${index + 1}`}
              className="service-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const services = [
  {
    title: 'Maquilhagem de Noiva',
    images: [noiva13, noiva11, noiva12, noiva6, noiva4, noiva5, noiva9, noiva8, noiva, noiva3],
    description: (
      <>
        <p>
          Experiência personalizada e exclusiva, pensada ao detalhe para o dia mais especial de cada noiva e criada para
          refletir a identidade e o estilo do casamento. Com produtos de alta qualidade e técnicas profissionais
          exclusivas, está assegurada a durabilidade, conforto e um resultado de excelência para que cada noiva se
          sinta segura, elegante e especial desde o primeiro ao último momento.
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
                e o estilo do casamento. Juntas criamos a maquilhagem perfeita para o
                grande dia!
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
                convidadas, garantindo tranquilidade e tempo suficiente para cada maquilhagem.

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
                Neste dia estou presente para criar a maquilhagem perfeita, com calma e atenção a cada detalhe, para que a noiva se sinta confiante e preparada para viver cada momento do seu grande dia. Para além disso, estou presente para acompanhar os momentos importantes, como a reportagem fotográfica.

              </p>
            </div>
          </div>

        </div>
      </>
    ),
  },
  {
    title: 'Maquilhagem Social',
    images: [socialv2, social4, social5, social2, social6, social8, social7, social3, noiva10],
    description: (
      <p>
        Serviço de alta qualidade e personalizado, desenvolvido para quem procura elegância, sofisticação e um acabamento impecável, confortável e duradouro. 
        Dos looks mais clássicos aos mais coloridos, cada maquilhagem é criada para refletir a personalidade de cada pessoa e fazê-la sentir-se confiante em qualquer ocasião especial.
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
  },
  {
    title: 'Master Your Makeup - Workshop de Automaquilhagem',
    images: [],
    description: (
      <p>
        Experiência totalmente personalizada, adaptada às necessidades, objetivos e estilo de cada pessoa.
        Em vez de seguir um método rígido, o workshop é construído de forma individual, permitindo aprender as técnicas e os produtos que realmente fazem sentido.
        O objetivo é que cada pessoa termine o workshop a conhecer melhor o seu rosto, a saber o que a valoriza e a sentir-se mais confiante ao maquilhar-se.
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
