import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  menuItens = [
    {
      link: "/paises",
      iconUrl: "/assets/icons/icon-country-search.svg",
      alt: "buscar pais",
      name: "Países"
    }
  ]
}
