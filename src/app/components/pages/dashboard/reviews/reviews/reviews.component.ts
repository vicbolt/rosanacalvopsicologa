import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';

interface Review {
  _id: string;
  nombre: string;
  edad: string;
  motivo: string;
  review: string;
  revisado: boolean;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  newReviews: Review[] = []; // Array para reseñas nuevas
  acceptedReviews: Review[] = []; // Array para reseñas aceptadas
  deniedReviews: Review[] = []; // Array para reseñas denegadas

  activeSection: string = 'newReviews';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchNoRevisado();
    this.fetchAceptada();
    this.fetchNoAceptada();
  }

  //RESEÑAS NUEVAS
  fetchNoRevisado(): void {
    this.http
      .get<{ reviews: Review[] }>(`${environment.apiUrl}/api/getNoRevisado`)
      .subscribe({
        next: (data) => {
          if (data && Array.isArray(data.reviews)) {
            this.newReviews = data.reviews; // Access the reviews array within the response object
            console.log('Fetched no-reviewed reviews:', this.newReviews);
          } else {
            console.error('Unexpected response format:', data);
          }
        },
        error: (error) => {
          console.error('Error fetching no-reviewed reviews:', error);
        },
      });
  }

  //RESEÑAS ACEPTADAS
  fetchAceptada(): void {
    this.http
      .get<{ reviews: Review[] }>(`${environment.apiUrl}/api/getAceptada`)
      .subscribe({
        next: (data) => {
          if (data && Array.isArray(data.reviews)) {
            this.acceptedReviews = data.reviews;
            console.log('Fetched accepted reviews:', this.acceptedReviews);
          } else {
            console.error('Unexpected response format:', data);
          }
        },
        error: (error) => {
          console.error('Error fetching accepted reviews:', error);
        },
      });
  }

  // RESEÑAS DENEGADAS
  fetchNoAceptada(): void {
    this.http
      .get<{ reviews: Review[] }>(`${environment.apiUrl}/api/getNoAceptada`)
      .subscribe({
        next: (data) => {
          if (data && Array.isArray(data.reviews)) {
            this.deniedReviews = data.reviews;
            console.log('Fetched no-accepted reviews:', this.deniedReviews);
          } else {
            console.error('Unexpected response format:', data);
          }
        },
        error: (error) => {
          console.error('Error fetching no-accepted reviews:', error);
        },
      });
  }

  //To show the sections when user clicks on the menu of validation reviews
  showSection(section: string): void {
    this.activeSection = section;
  }

  acceptReview(review: Review) {
    const updatedReview = { id: review._id, aceptada: true, revisada: true }; // Use _id
    this.http.post(`${environment.apiUrl}/api/updateReviewStatus`, updatedReview).subscribe({
      next: () => {
        this.acceptedReviews.push(review);
        this.newReviews = this.newReviews.filter((r) => r !== review);
        console.log('Review accepted:', review);
      this.fetchAceptada();
      this.fetchNoAceptada();


      },
      error: (error) => {
        console.error('Error updating review status:', error);
      }
    });
  }

  denyReview(review: Review) {
    const updatedReview = { id: review._id, aceptada: false, revisada: true };
    this.http.post(`${environment.apiUrl}/api/updateReviewStatus`, updatedReview).subscribe({
      next: () => {
        this.deniedReviews.push(review);
        this.newReviews = this.newReviews.filter((r) => r !== review);
        console.log('Review denied:', review);
        this.fetchNoAceptada();
      this.fetchAceptada();

      },
      error: (error) => {
        console.error('Error updating review status:', error);
      }
    });
  }
}
