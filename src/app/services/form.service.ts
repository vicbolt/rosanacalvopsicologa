import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Global } from './global';

import { Mensaje } from '../models/mensaje.model';;


@Injectable({
    providedIn: 'root'
  })
  export class FormService {
    public url: String;
  
    constructor(
        private _http: HttpClient
    ) { 
        this.url = Global.url
    }
  
    saveMensaje(mensaje: Mensaje): Observable<any> {
      return this._http.post(this.url+'/saveMsg', mensaje);
    }
  }