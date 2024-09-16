import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-howtohelp',
  templateUrl: './howtohelp.component.html',
  styleUrl: './howtohelp.component.scss'
})
export class HowtohelpComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const cards = this.el.nativeElement.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view'); // Opcional, si quieres que se quiten al salir de la vista
        }
      });
    }, {
      threshold: 0.5 // Se activa cuando el 10% de la caja está visible
    });

    cards.forEach((box: Element) => {
      observer.observe(box);
    });
  }
}
