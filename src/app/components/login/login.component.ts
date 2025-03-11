import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router'; 
import { of } from 'rxjs'; // Importar of para retornar un observable vacío
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  private loginUrl = environment.apiUrl;
  isLoading: boolean = false;  // Estado de carga para evitar múltiples clics

  constructor(private http: HttpClient, private router: Router) {}

  // Método que se llama cuando el formulario es enviado
  onSubmit() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, introduce usuario y contraseña.';
      return;
    }

    // Evitar enviar múltiples peticiones
    if (this.isLoading) return;
    this.isLoading = true;

    // Realizamos la petición POST directamente
    this.http
      .post<{ token: string }>(this.loginUrl+'/api/login', { username: this.username, password: this.password }, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        catchError((error) => {
          // Utilizar el mensaje de error del backend
          this.errorMessage = error.error?.msg || 'Error al iniciar sesión.';
          console.error('Error en la autenticación:', error);
          this.isLoading = false;  // Terminar el estado de carga
          return of(null);  // Retornar un observable vacío para continuar
        })
      )
      .subscribe({
        next: (response) => {
          if (response?.token) {
            localStorage.setItem('authToken', response.token);
            console.log('Token recibido:', response.token);
            // Redirigir al usuario a la página de inicio
            this.router.navigate(['/protected/dashboard']); // Redirection to home page
          } else {
            this.errorMessage = 'Credenciales incorrectas.';
            console.error('No se recibió token. Las credenciales pueden ser incorrectas.');
          }
          this.isLoading = false;  // Terminar el estado de carga
        },
        error: (error) => {
          console.error('Error en la autenticación:', error);
          this.isLoading = false;  // Terminar el estado de carga
        },
      });
  }
}
