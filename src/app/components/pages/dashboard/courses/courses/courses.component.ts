import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';

interface Course {
  _id: string;
  titulo: string;
  descripcion: string;
  lugar: string;
  fechaInicio: string;
  fechaFin: string;
  hora: string;
  vigente: boolean;
  imagen: string; // Agrega la propiedad imagen al interfaz Course
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  isModalOpen: boolean = false;
  newCourse: Course = {
    _id: '',
    titulo: '',
    descripcion: '',
    lugar: '',
    fechaInicio: '',
    fechaFin: '',
    hora: '',
    vigente: true,
    imagen: '',
  };
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.http
      .get<{ courses: Course[] }>(`${environment.apiUrl}/api/getAllCourses`)
      .subscribe({
        next: (data) => {
          if (data && Array.isArray(data.courses)) {
            this.courses = data.courses;
            console.log('Fetched courses:', this.courses);
          } else {
            console.error('Unexpected response format:', data);
          }
        },
        error: (error) => {
          console.error('Error fetching courses:', error);
        },
      });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Archivo seleccionado:', this.selectedFile);
    }
  }

  addCourse(): void {
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile);
    }

    formData.append('titulo', this.newCourse.titulo);
    formData.append('descripcion', this.newCourse.descripcion);
    formData.append('lugar', this.newCourse.lugar);
    formData.append('fechaInicio', this.newCourse.fechaInicio);
    formData.append('fechaFin', this.newCourse.fechaFin);
    formData.append('hora', this.newCourse.hora);
    formData.append('vigente', String(this.newCourse.vigente));

    this.http
      .post(`${environment.apiUrl}/api/createCourse`, formData)
      .subscribe({
        next: (res) => {
          console.log('Curso añadido', res);
          this.closeModal();
          this.fetchCourses();
        },
        error: (err) => {
          console.error('Error al añadir curso', err);
        },
      });
  }

  deleteCourse(course: Course): void {
    this.http
      .delete(`${environment.apiUrl}/api/deleteCourse/${course._id}`)
      .subscribe({
        next: () => {
          this.courses = this.courses.filter((c) => c._id !== course._id);
          console.log('Course deleted:', course);
        },
        error: (error) => {
          console.error('Error deleting course:', error);
        },
      });
  }

  markAsPast(course: Course): void {
    this.http.post(`${environment.apiUrl}/api/markCourseAsNotVigente/${course._id}`, {}).subscribe({
      next: () => {
        course.vigente = false;
        console.log('Course marked as not vigente:', course);
      },
      error: (error) => {
        console.error('Error marking course as not vigente:', error);
      }
    });
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.newCourse = {
      _id: '',
      titulo: '',
      descripcion: '',
      lugar: '',
      fechaInicio: '',
      fechaFin: '',
      hora: '',
      vigente: true,
      imagen: '',
    };
    this.selectedFile = null;
  }
}
