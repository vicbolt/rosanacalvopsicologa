import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormService } from '../../services/form.service';
import { MensajeService } from '../../services/mensaje.service';
import { Mensaje } from '../../models/mensaje.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  providers: [MensajeService],
})
export class FormComponent implements OnInit {
  public user: any;
  public inputContainer1: any;
  public inputContainer2: any;
  public inputContainer3: any;
  public inputContainer4: any;
  public inputContainer5: any;
  public inputContainer6: any;
  public inputContainerFinal: any;
  public form: any;
  public thanksPage: any;
  public requestNumber: any;
  public requestTime: any;

  mensaje: Mensaje = new Mensaje('', '', '', '', '', '');

  constructor(private _router: Router, private _formService: FormService) {
    this.inputContainer1 = true;
    this.inputContainer2 = false;
    this.inputContainer3 = false;
    this.inputContainer4 = false;
    this.inputContainer5 = false;
    this.inputContainer5 = false;
    this.inputContainerFinal = false;
    this.form = false;

    this.requestNumber = false;
    this.requestTime = false;
    }

  ngOnInit() {}

  nextQuestionForm1() {
    console.log('Container 2 (email)');
    this.inputContainer2 = true;
    this.inputContainer1 = false;
  }

  previousQuestionForm2() {
    console.log('Container 1 (name)');
    this.inputContainer1 = true;
    this.inputContainer2 = false;
    this.mensaje.email = '';
  }

  nextQuestionForm2() {
    console.log('Container 3 (comPreference)');
    this.inputContainer3 = true;
    this.inputContainer2 = false;
  }

  handleClick() {
    if (this.mensaje.comPreference == 'Email') {
      this.requestNumber = false;
      this.requestTime = false;
      this.nextQuestionForm5();
    } else if (this.mensaje.comPreference == 'Llamada telefónica') {
      this.requestNumber = true;
      this.requestTime = true;
      this.nextQuestionForm3();
    } else {
      this.requestNumber = true;
      this.requestTime = false;
      this.nextQuestionForm4();
    }
  }

  previousQuestionForm3() {
    console.log('Container 2 (email)');
    this.inputContainer2 = true;
    this.inputContainer3 = false;
    this.mensaje.comPreference = '';
  }

  nextQuestionForm3() {
    console.log('Container 4 (franjaHor)');
    this.inputContainer4 = true;
    this.inputContainer3 = false;
  }

  previousQuestionForm4() {
    console.log('Container 3 (comPreference)');
    this.inputContainer3 = true;
    this.inputContainer4 = false;
    this.mensaje.time = '';
  }

  nextQuestionForm4() {
    if (this.requestNumber == true && this.requestTime == false) {
      console.log('Container 5 (phone)');
      this.inputContainer5 = true;
      this.inputContainer3 = false;
    } else {
      console.log('Container 4 (franjaHor)');
      this.inputContainer5 = true;
      this.inputContainer4 = false;
    }
  }

  previousQuestionForm5() {
    if (this.requestNumber == true && this.requestTime == true) {
      console.log('Container 4 (franjaHor)');
      this.inputContainer4 = true;
      this.inputContainer5 = false;
      this.mensaje.phone = '';
    } else {
      console.log('Container 3 (comPreference)');
      this.inputContainer3 = true;
      this.inputContainer5 = false;
      this.mensaje.phone = '';
    }
  }

  nextQuestionForm5() {
    if (this.requestNumber == false) {
      console.log('Container 6 (mensaje)');
      this.inputContainer6 = true;
      this.inputContainer3 = false;
    } else {
      console.log('Container 6 (mensaje)');
      this.inputContainer6 = true;
      this.inputContainer5 = false;
    }
  }

  previousQuestionForm6() {
    if (this.requestNumber == true) {
      console.log('Container 5 (phone)');
      this.inputContainer5 = true;
      this.inputContainer6 = false;
    } else {
      console.log('Container 4 (franjaHor)');
      this.inputContainer3 = true;
      this.inputContainer6 = false;
    }
  }

  nextQuestionForm6() {
    console.log('Container Final');
    this.inputContainerFinal = true;
    this.inputContainer5 = false;
  }

  previousQuestionFormFinal() {
    console.log('Container 6 (msg)');
    this.inputContainer6 = true;
    this.inputContainerFinal = false;
  }

  onSubmit() {
    this._formService.saveMensaje(this.mensaje).subscribe(
      (response) => {
        console.log('Mensaje guardado:', response);
        this._router.navigate([
          '/thanksPageForm',
          this.mensaje.name,
          this.mensaje.comPreference,
          this.mensaje.time,
        ]);
      },
      (error) => {
        console.error('Error al guardar el mensaje:', error);
      }
    );
  }
}
