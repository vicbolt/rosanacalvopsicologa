import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../../services/analytics.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})

export class DashboardHomeComponent {
  totalUsers: number | null = null;

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.analyticsService.getTotalUsers().subscribe({
      next: (data) => {
        this.totalUsers = Number(data.total);
      },
      error: (err) => {
        console.error('Error fetching analytics:', err);
      }
    });
  }
}
