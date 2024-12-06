import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss'
})
export class CountryCardComponent {
  @Input() imageUrl!: string;
  @Input() text!: string;
}
