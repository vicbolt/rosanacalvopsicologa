import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Global } from './global';


@Injectable()
    export class MensajeService{
        public url: String;
        public mensajes: any;
        
        constructor(
            private _http: HttpClient,
        ){
            this.url = Global.url
        }

        getMsg():Observable<any>{
            return this.mensajes = this._http.get(this.url+'/getMsg');
        }
    }