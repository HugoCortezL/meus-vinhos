import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VintageView, WineView } from '../models/WineView.interface';
import { WineService } from './wine.service';
import { WineryService } from './winery.service';
import { RegionService } from './region.service';
import { CountryService } from './country.service';
import { VarietyService } from './variety.service';
import { VintageService } from './vintage.service';
import { Wine, WineType } from '../models/Wine.interface';
import { Winery } from '../models/Winery.interface';
import { WineVintage } from '../models/WineVintage.interface';

@Injectable({
  providedIn: 'root'
})
export class WineViewService {
  wines!: WineView[];

  constructor(private wineService: WineService,
    private wineryService: WineryService,
    private regionService: RegionService,
    private countryService: CountryService,
    private varietyService: VarietyService,
    private vintageService: VintageService
  ) { }

  getAllWineViews(): Observable<WineView[]> {
    this.wineService.getAllWines().subscribe(wines => {
      this.wines = wines.map(wine => this.describeWine(wine));
    })
    return of(this.wines);
  }

  getWineViewByWineId(wineId: number): Observable<WineView> {
    let wineView: WineView = {
      id: 0,
      name: '',
      image_url: '',
      winery_name: '',
      region_name: '',
      country_name: '',
      country_image_url: '',
      type: WineType.Tinto,
      vintages: [
        { varieties_name: [], vintage: 0 }
      ],
    }

    this.wineService.getWineById(wineId).subscribe(wine => {
      if (wine) {
        wineView = this.describeWine(wine)
      }
    })
    return of(wineView);
  }

  describeWine(wine: Wine): WineView {
    let wineView: WineView = {
      id: wine.id,
      name: wine.name,
      image_url: wine.image_url,
      winery_name: '',
      region_name: '',
      country_name: '',
      country_image_url: '',
      type: wine.type,
      vintages: [
        { varieties_name: [], vintage: 0 }
      ],
    }

    this.wineryService.getWineryById(wine.winery_id).subscribe(winery => {
      wineView.winery_name = winery?.name ?? `Vinícula com id ${wine.winery_id} não cadastrada`
      this.regionService.getRegionById(winery?.region_id ?? 0).subscribe(region => {
        wineView.region_name = region?.name ?? `Região com id ${winery?.region_id} não cadastrada`
        this.countryService.getCountryById(region?.country_id ?? 0).subscribe(country => {
          wineView.country_name = country?.name ?? `País com id ${region?.country_id} não cadastrado`
          wineView.country_image_url = country?.image_name ?? `País com id ${region?.country_id} não cadastrado`
        })
      })
    })

    this.vintageService.getAllVintagesByWineId(wine.id).subscribe(vintages => {
      wineView.vintages = vintages.map(vintage => this.describeWineVintages(vintage));
    })

    return wineView

  }

  describeWineVintages(vintage: WineVintage): VintageView {
    let vintageView: VintageView = {
      vintage: vintage.vintage,
      varieties_name: []
    }

    for (let varietyId of vintage.variety_ids) {
      this.varietyService.getVarietyById(varietyId).subscribe(variety => {
        vintageView.varieties_name.push(variety?.name ?? `Variedade com id ${varietyId} não cadastrada`)
      })
    }

    return vintageView
  }


}