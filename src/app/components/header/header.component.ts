import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public subcontainer = false;

  constructor(){
  }

  showSubcontainer(){
    this.subcontainer = true;
  }

  hideSubcontainer(){
    this.subcontainer = false;
  }

}
