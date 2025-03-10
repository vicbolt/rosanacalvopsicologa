import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Obtener el token del localStorage
    const token = localStorage.getItem('authToken');

    // Comprobar si la solicitud es para una ruta protegida (por ejemplo, las que comienzan con '/api/protected')
    if (token && request.url.includes('/protected')) {
      // Si el token existe y la URL contiene '/api/protected', añadimos el token en las cabeceras
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // 'Bearer' es el tipo de autenticación comúnmente usado
        }
      });
    }

    return next.handle(request);
  }
} 
