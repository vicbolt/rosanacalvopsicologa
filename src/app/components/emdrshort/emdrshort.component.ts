import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-emdrshort',
  templateUrl: './emdrshort.component.html',
  styleUrl: './emdrshort.component.scss'
})
export class EmdrshortComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const ventajas = this.el.nativeElement.querySelectorAll('.ventaja');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.4
    });

    ventajas.forEach((box: Element) => {
      observer.observe(box);
    });
  }
}
