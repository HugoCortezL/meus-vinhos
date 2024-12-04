import { Component, Input } from '@angular/core';
import { WineView } from '../../../core/models/WineView.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wine-card',
  imports: [CommonModule],
  templateUrl: './wine-card.component.html',
  styleUrl: './wine-card.component.scss'
})
export class WineCardComponent {
  @Input() wine!: WineView;
}
