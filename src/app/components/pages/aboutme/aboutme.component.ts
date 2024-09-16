import { Component, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const containers = this.el.nativeElement.querySelectorAll('.container_aboutjs');

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

    containers.forEach((box: Element) => {
      observer.observe(box);
    });
  }
}
