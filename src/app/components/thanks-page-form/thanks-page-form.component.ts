import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterEvent} from '@angular/router'

@Component({
  selector: 'app-thanks-page-form',
  templateUrl: './thanks-page-form.component.html',
  styleUrl: './thanks-page-form.component.scss'
})
export class ThanksPageFormComponent implements OnInit{

  public name = String;
  public comPreference= String;
  public time= String;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ){}


  ngOnInit(){
    this._route.params.subscribe((params: Params) =>{
      this.name = params['name'];
      this.comPreference = params['comPreference'];
      this.time = params['time'];

    })
  }
}
