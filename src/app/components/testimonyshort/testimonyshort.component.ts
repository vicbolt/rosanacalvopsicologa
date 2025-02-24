import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonyshort',
  templateUrl: './testimonyshort.component.html',
  styleUrl: './testimonyshort.component.scss',
})
export class TestimonyshortComponent {
  currentIndex: number = 0;

  slides = [
    {
      client: 'Alejandro',
      age: 'Programador',
      motivation: '',    
      text: 'A quien le pueda interesar, <br> Me resulta imposible encontrar las palabras que describan lo mucho que le agradezco a Rosana toda su ayuda, por lo que si estás leyendo esto puede que al menos te resulte útil conocer un poco mi experiencia en su terapia. <br> Antes de haber ido a terapia con Rosana yo era una persona que consideraba que hacía mucha introspección, que no tenía ningún prejuicio hacia la terapia pero aún así  pensaba que eso no era para mi, que no me hacía falta porque "No tengo ningún inconveniente con la terapia, pero yo no me encuentro tan mal como para ir". Por suerte, un día me atreví. <br> Comprendí entonces que la buena terapia trata de ayudarte a conocerte a ti mismo, a entender dónde nacen esas emociones que pudieron surgir en algún momento del pasado, pero que siguen afectando a situaciones en el presente. <br> Llevaba toda mi vida intentando conocerme mejor, pero recuerdo el día en el que pude ver claramente que, en mi opinión, hay ciertas partes de uno mismo que son demasiado difíciles de visitar sin ayuda. Para ello, no puedo recomendar mejor guía que Rosana',
    },

    {
      client: 'Víctor',
      age: '31 años',
      motivation: 'Mareos por ansiedad',
      text: 'Durante más de 10 años he convivido con mareos, (somatización de mi ansiedad). Había probado distintos métodos y técnicas pero gracias a Rosana y su experiencia con la terapia EMDR, he conseguido entender de donde venían todos esos miedos y poco a poco ir trabajandolos juntos para sentir que tengo de nuevo el control. Suena tópico, pero Rosana me ha cambiado la vida.',
    },

    {
      client: 'Nerea',
      age: '32 años',
      motivation: 'Problemas personales',    
      text: 'Conocí a Rosana en una época difícil, dónde me sentía superada por algunos problemas personales. Desde el primer dia sentí que me comprendía, porque hizo las preguntas adecuadas. Recuerdo salir con angustia sobre mi situación, pero con la esperanza de que me iba a poder ayudar. Junto a Rosana he ido analizando mi historia de vida y creando una narrativa distinta de lo que he vivido y de quién soy. Hemos ido a lo profundo, dentro de un espacio seguro, y con tiempo he cambiado, no de forma superficial, sino en "los pilares". Sigo siendo yo, pero ahora sin lastres, confiando más en mí, aprendiendo a cuidarme y verbalizar mis limites y necesidades, a sentir mi tristeza y mi enfado y a entender el mensaje traen. El cambio mas significatuvo quizás ha sido que ya no me menosprecio, ni me culpo, ya no me hago"bullying. Ahora me quiero y me abrazo y creo más en mí. Gracias a la guia de Rosana he podido sanar muchar heridas del pasado. Tanto es asi que varios familiares y amigos han empezado a hacer terapia con ella. Y yo, que soy psicóloga, la tengo como modelo de cómo quiero ser con mis pacientes.',
    },

    {
      client: 'Elena Gutierrez',
      age: 'Ingeniera',
      motivation: '',    
      text: 'He tenido la suerte de que Rosana me tratase durante varias etapas un poco más complicadas. Desde el primer día me sentí súper cómoda, es una gran profesional, amable, cariñosa y empática (y también divertida cuando las sesiones lo permiten!) Me ha ayudado muchísimo y me ha dado las herramientas que necesitaba para avanzar. Gracias a ella he superado miedos e inseguridades. Me tranquiliza mucho saber que si mi cabeza no puede sola siempre está Rosana para ayudarme',
    },
    {
      client: 'Gabriel',
      age: 'Manager de ventas',
      motivation: '',    
      text: 'He tenido el placer de estar en terapia con Rosana desde el 2021. Hemos tratado diversos temas personales, profesionales y emocionales de forma profunda. Su gran experiencia y su forma tan humana de conducir las sesiones, me han ayudado a superar circunstancias complicadas, con éxito y fortaleza. La calidad y calidez de su trabajo como psicóloga es inigualable. Le he recomendado a amigos y familiares porque doy  testimonio de lo competente que es, pero sobre todo, de la honestidad, paciencia y gran ayuda con la que gestiona a sus pacientes. Gracias siempre, Rosana.',
    },

    {
      client: 'Daniel',
      age: 'Ingeniero',
      motivation: '',    
      text: 'El mayor aprendizaje de mi vida empezó mi primer día de terapia EMDR con Rosana. <br> No puedo describir en estas pocas líneas todo lo que he vivido en este tiempo de terapia, pero sí puedo decir algunos tesoros que he ganado con ella, como por ejemplo: confianza en mí mismo a través del autoconocimiento (bendito EMDR), implementación de límites y autocuidado, estabilidad mental gracias a la identificación temprana de emociones como la ansiedad, el miedo, la tristeza... En general, bienestar y estabilidad interna, que es el mayor regalo que puedo tener. <br> Muchísimas gracias Rosana, no pude haber tomado una decisión mejor que ir a tu consulta aquel Septiembre del 2023.',
    },

  ];

  showPreviousSlide(): void {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
  }

  showNextSlide(): void {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  getTransformStyle(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
