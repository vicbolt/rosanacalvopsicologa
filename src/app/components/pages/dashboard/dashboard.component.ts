import { Component } from '@angular/core';
import { DashboardService } from './dashboard-service.service';

interface Course {
  photo: string;
  title: string;
  description: string;
  location: string;
  date: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
activeSection: string = 'home';
  activeCourses: Course[] = [];
  newReviews: any[] = [];

  newCourse: Course = {
    photo: '',
    title: '',
    description: '',
    location: '',
    date: ''
  };

  constructor(private dashboardService: DashboardService) {}
  
  ngOnInit(): void {
    this.dashboardService.fetchNoRevisado();
    this.dashboardService.newReviews$.subscribe(reviews => {
      this.newReviews = reviews;
    });
  };



  showSection(section: string, event: MouseEvent) {
    event.preventDefault();
    this.activeSection = section;
  };

  onPhotoChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newCourse.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addCourse() {
    // Add the new course to the active courses list
    this.activeCourses.push({ ...this.newCourse });
    // Reset the new course form
    this.newCourse = {
      photo: '',
      title: '',
      description: '',
      location: '',
      date: ''
    };
  }

  editCourse(course: Course) {
    // Logic to edit a course
    console.log('Edit course:', course);
  }

  hideCourse(course: Course) {
    // Logic to hide a course
    console.log('Hide course:', course);
  }

  deleteCourse(course: Course) {
    // Logic to delete a course
    this.activeCourses = this.activeCourses.filter(c => c !== course);
  }
}