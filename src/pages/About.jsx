import './Page.css'
import profilePic from '../assets/NewProfilePic.png'

export default function About() {
  return (
    <section className="page about">
      <h1 className="page-title">Sobre mim</h1>
      <p className="page-text">
        Sejam muito bem-vinda(o)s 🖤
      </p>
      <p className="page-text">
        O meu nome é Catarina Moreira, tenho 26 anos, sou do Porto e sou Maquilhadora Profissional.
      </p>
      <p className="page-text">
        Desde pequena que a criatividade faz parte de mim. Cresci apaixonada por pintura, desenho e trabalhos manuais. Com o passar dos anos, essa paixão transformou-se noutra - a maquilhagem. E com ela nasceu também um sonho - tornar-me maquilhadora profissional.
      </p>
      <p className="page-text">
        Guardei esse sonho durante algum tempo. Depois de terminar o secundário, segui o caminho “mais seguro” e
        formei-me em Terapia Ocupacional. Trabalhei alguns anos na área da pediatria, uma experiência pela qual sou
        profundamente grata e que me fez crescer muito, tanto a nível pessoal como profissional. Ainda assim, sentia
        que algo não estava certo e que o meu coração já tinha escolhido outro caminho.
      </p>
      <p className="page-text">
        Em 2024, tomei a decisão mais transformadora da minha vida: mudar. Dei o primeiro passo com a formação “The
        Makeup Pro”, com a Mafalda Vieira. Nesse mesmo ano, investi também nas formações “Expert em Cor”
        (Colorimetria) e “Magic Makeup” (Maquilhagem resistente ao atrito e à água).
      </p>
      <p className="page-text">
        Desde então, continuo a apostar na minha formação e no aperfeiçoamento constante da minha técnica, porque
        acredito profundamente na importância da aprendizagem contínua. Quero evoluir, inovar e oferecer sempre o
        melhor a cada cliente que confia em mim.
      </p>
      <p className="page-text">
        Hoje sou Maquilhadora Profissional a tempo inteiro e sou verdadeiramente feliz. A maquilhagem é, para mim, muito
        mais do que estética: é identidade, confiança e poder. É através da minha arte que procuro realçar a beleza
        única de cada pessoa e ajudá-la a sentir-se ainda mais segura, confiante e empoderada 💫🖤
      </p>
      <img
        src={profilePic}
        alt="Catarina Moreira Profile Picture"
        className="profile-pic"
      />
    </section>
  )
}
