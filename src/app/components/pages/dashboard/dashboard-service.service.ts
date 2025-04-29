import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';

interface Review {
  _id: string;
  nombre: string;
  edad: string;
  motivo: string;
  review: string;
  revisado: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  private newReviewsSubject = new BehaviorSubject<Review[]>([]);
  newReviews$ = this.newReviewsSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchNoRevisado(): void {
    this.http.get<{ reviews: Review[] }>(`${environment.apiUrl}/api/getNoRevisado`).subscribe({
      next: (data) => {
        if (data && Array.isArray(data.reviews)) {
          this.newReviewsSubject.next(data.reviews);
          console.log('Fetched NO REVIEWED reviews:', data.reviews);
        }
      },
      error: (error) => {
        console.error('Error fetching no-reviewed reviews:', error);
      }
    });
  }
}
