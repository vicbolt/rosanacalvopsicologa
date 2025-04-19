import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; // <-- importa esto

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private baseUrl = `${environment.apiUrl}/analytics`;  // 👈 más limpio

  constructor(private http: HttpClient) {}

  getTotalUsers() {
    return this.http.get<{ total: number }>(`${this.baseUrl}/usuarios`);
  }
}
