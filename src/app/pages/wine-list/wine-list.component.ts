import { Component } from '@angular/core';
import { WineViewService } from '../../core/services/wine-view.service';
import { WineView } from '../../core/models/WineView.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wine-list',
  imports: [CommonModule],
  templateUrl: './wine-list.component.html',
  styleUrl: './wine-list.component.scss'
})
export class WineListComponent {
  wines: WineView[] = [];

  constructor(private wineViewService: WineViewService) { }

  ngOnInit(): void {

    this.updateWines()
  }

  updateWines() {
    this.wineViewService.getAllWineViews().subscribe((data) => {
      this.wines = data;
    });
  }

}
