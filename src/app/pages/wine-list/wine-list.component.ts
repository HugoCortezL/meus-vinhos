import { Component } from '@angular/core';
import { WineViewService } from '../../core/services/wine-view.service';
import { WineView } from '../../core/models/WineView.interface';
import { CommonModule } from '@angular/common';
import { WineCardComponent } from '../../shared/components/wine-card/wine-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wine-list',
  imports: [CommonModule, WineCardComponent],
  templateUrl: './wine-list.component.html',
  styleUrl: './wine-list.component.scss'
})
export class WineListComponent {
  wines: WineView[] = [];

  constructor(private wineViewService: WineViewService, private router: Router) { }

  ngOnInit(): void {

    this.updateWines()
  }

  updateWines() {
    this.wineViewService.getAllWineViews().subscribe((data) => {
      this.wines = data;
    });
  }

  onWineClick(wineId: number) {
    this.router.navigate([`/vinhos/${wineId}`]);
  }

}
