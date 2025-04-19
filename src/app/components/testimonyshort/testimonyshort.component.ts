import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-testimonyshort',
  templateUrl: './testimonyshort.component.html',
  styleUrl: './testimonyshort.component.scss',
})
export class TestimonyshortComponent implements OnInit {
  currentIndex: number = 0;
  slides: any[] = [];

  isModalOpen: boolean = false;
  isSubmitted: boolean = false;

  newReview: {
    nombre: string;
    edad: string;
    motivo: string;
    review: string;
    revisado: boolean;
    aceptada: boolean;
  } = {
    nombre: '',
    edad: '',
    motivo: '',
    review: '',
    revisado: false,
    aceptada: false,
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAceptada();
  }

  //GET RESEÑAS ACEPTADAS
  fetchAceptada(): void {
    this.http
      .get<{
        reviews: {
          nombre: string;
          edad: string;
          motivo: string;
          review: string;
          revisado: boolean;
          aceptada: boolean;
        }[];
      }>(`${environment.apiUrl}/api/getAceptada`)
      .subscribe({
        next: (data) => {
          if (data && Array.isArray(data.reviews)) {
            this.slides = data.reviews;
            console.log('Fetched accepted reviews:', this.slides);
          } else {
            console.error('Unexpected response format:', data);
          }
        },
        error: (error) => {
          console.error('Error fetching accepted reviews:', error);
        },
      });
  }

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

  openModal(): void {
    this.isModalOpen = true;
    this.isSubmitted = false;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }


  submitReview(): void {
    
    const reviewToSubmit = {
      ...this.newReview,
      revisada: false,
      aceptada: false,
    };

    this.http
      .post(`${environment.apiUrl}/api/createReview`, reviewToSubmit)
      .subscribe({
        next: () => {
          console.log('Review submitted:', reviewToSubmit);
          this.isSubmitted = true;
        },
        error: (error) => {
          console.error('Error submitting review:', error);
          alert(
            'Hubo un error al enviar su reseña. Por favor, inténtelo de nuevo.'
          );
        },
      });
  }
}
