import './Page.css'
import { useState } from 'react';

export default function Testimonials() {

  const testimonials = [
    `A maquilhagem estava e ficou perfeita durante todo o casamento! Cheguei ao final da noite e não a queria tirar! Senti-me linda e poderosa! Conseguiste fazer a minha pele natural para que as minhas sardas ainda se notassem, e foi muito elogiada!
Obrigada por me dares confiança e me fazeres sentir linda!
Tens umas mãos de fada ❤️`,
    `Mais uma maquilhagem, incrível! Que deixou toda a gente sem palavras inclusivo eu! 🩵🩵
A única coisa que te pedi foi que fosse diferente! Queria arriscar! Mas sem perder a elegância que um casamento assim o exige!
E tu fizeste de forma perfeita! Como foi sair da minha zona de conforto ao longo da maquilhagem ias-me mostrando e pedindo que fosse confiando em ti e no processo! E o processo ficou lindo!! Mais do que eu alguma vez esperava!
Foi uma maquilhagem bastante elogiada!!! E aguentou a noite toda!!
Depois de muita dança, lágrimas e transpiração no fim da noite estava perfeita!
És sem dúvida, o meu porto seguro em relação à maquilhagem, ouves e entendes o que queremos e fazes as coisas com uma energia incrível e o resultado final fala por si, simplesmente perfeito!
Recomendo-te a 10000% porque tu tornas tudo elegante, perfeito e natural! Tudo o que posso pedir`,
    `Catarina, a maquilhagem ficou lindaaaa
Os olhos estavam exatamente como pedi, e ainda bem que te dei ouvidos e coloquei as pestanas, fez toda diferença, a maquilhadora tem sempre razão :)
Em relação à pele, fiquei com a pele que gostava de ter todos os dias!!
A maquilhagem durou o casamento todo, mesmo com o calor e a choradeira!
És maravilhosa, obrigada 💛`,
    `Adorei meeesmo a maquilhagem! Foi ao encontro exato daquilo que te tinha pedido e aguentou firme o dia e noite e ao (muito) calor do dia 🫶🏼
E sem dúvida que as pestanas deram aquele toque especial!
Mas confiei totalmente em ti e nas sugestões que ias dando e não podia ter ficado mais perfeito ❤️`,
    `Olá Catarina!! Só queria agradecer imenso todo o trabalho, a maquilhagem estava incrível e durou-me a noite toda! Foi realmente muito especial para mim e com certeza nos vamos encontrar mais vezes.
Muitos beijinhos e mais uma vez, obrigada. 😘😘`,
    `Não te cheguei a dizer mas a maquilhagem que me fizeste para o casamento durou o tempo todo! Inclusive no final da noite fui dar um mergulho na piscina da quinta e mesmo assim aguentou!
Além disso senti-me super confortável, não senti que estava demasiado maquilhada, conseguiste o que eu pretendia desde sempre, uma maquilhagem simples mas linda 😍`,
    `A maquilhagem ficou lindíssima com o vestido e com o cabelo!
Obrigada! Fazes uma pessoa sentir-se 300 vezes mais confiante e mais bonita. Não há palavras para o excelente trabalho que fazes 🩷😘`,
    `Incrível, gostei imenso 🥰 aguentou o tempo todo mesmo com a temperatura que esteve 🙏🏼
Obrigada mais uma vez pelo teu excelente profissionalismo ✨`
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };


  return (
    <section className="page about">
      <h1 className="page-title">Testemunhos</h1>

      <div className="slider-container">

        {/* Bubble + Arrows ONLY */}
        <div className="bubble-wrapper">
          <button className="arrowTestimonials left" onClick={prevSlide}>
            ‹
          </button>

          <div key={index} className="message-bubble">
            {testimonials[index]}
          </div>

          <button className="arrowTestimonials right" onClick={nextSlide}>
            ›
          </button>
        </div>

        {/* DOTS OUTSIDE */}
        <div className="dotsTestimonials">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`dotTestimonials ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );

}

