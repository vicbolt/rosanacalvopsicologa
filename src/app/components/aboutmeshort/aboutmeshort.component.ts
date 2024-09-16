import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-aboutmeshort',
  templateUrl: './aboutmeshort.component.html',
  styleUrl: './aboutmeshort.component.scss'
})
export class AboutmeshortComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const img = this.el.nativeElement.querySelectorAll('.img-rosana');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view'); // Opcional, si quieres que se quiten al salir de la vista
        }
      });
    }, {
      threshold: 0.6 // Se activa cuando el 10% de la caja está visible
    });

    img.forEach((box: Element) => {
      observer.observe(box);
    });
  }
}
