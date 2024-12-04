import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WineViewService } from '../../core/services/wine-view.service';
import { WineView } from '../../core/models/WineView.interface';
import { CommonModule } from '@angular/common';
import { Breadcrumb, BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-wine-detail',
  imports: [CommonModule, BreadcrumbsComponent],
  templateUrl: './wine-detail.component.html',
  styleUrl: './wine-detail.component.scss'
})
export class WineDetailComponent {
  wineView: WineView | undefined;
  breadcrumbs!: Breadcrumb[]

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

    this.breadcrumbs = [
      {
        name: this.wineView?.type ?? '',
        link: `/tipos/${this.wineView?.type}`
      },
      {
        name: this.wineView?.country.name ?? '',
        link: `/paises/${this.wineView?.country.id}`
      },
      {
        name: this.wineView?.region.name ?? '',
        link: `/regioes/${this.wineView?.region.id}`
      },
      {
        name: this.wineView?.winery.name ?? '',
        link: `/viniculas/${this.wineView?.winery.id}`
      },
      {
        name: this.wineView?.name ?? '',
        link: ''
      },
    ]

  }

}
