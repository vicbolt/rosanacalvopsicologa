import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen: boolean = false;
  subcontainer: boolean = false;

  // Método para alternar la visibilidad del menú hamburguesa
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Método para alternar el submenú (si lo necesitas)
  toggleSubMenu() {
    this.subcontainer = !this.subcontainer;
  }

  showSubcontainer() {
    this.subcontainer = true;
  }

  hideSubcontainer() {
    this.subcontainer = false;
  }
}
