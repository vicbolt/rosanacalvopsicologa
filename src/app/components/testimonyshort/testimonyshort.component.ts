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
