import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WineViewService } from '../../core/services/wine-view.service';
import { WineView } from '../../core/models/WineView.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wine-detail',
  imports: [CommonModule],
  templateUrl: './wine-detail.component.html',
  styleUrl: './wine-detail.component.scss'
})
export class WineDetailComponent {

  wineView: WineView | undefined;

  constructor(
    private route: ActivatedRoute,
    private wineViewService: WineViewService
  ) { }

  ngOnInit(): void {
    // Obter o ID do país da URL
    const wineId = Number(this.route.snapshot.paramMap.get('id'));

    // Buscar o país pelo ID
    this.wineViewService.getWineViewByWineId(wineId).subscribe(wineView => {
      this.wineView = wineView;
    });
  }

}
