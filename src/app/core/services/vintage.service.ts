import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WineVintage } from '../models/WineVintage.interface';
import { WINE_VINTAGES } from '../data/WineVintage.data';

@Injectable({
  providedIn: 'root'
})
export class VintageService {

  constructor() { }

  getAllVintages(): Observable<WineVintage[]> {
    return of(WINE_VINTAGES);
  }

  getAllVintagesByWineId(wineId: number): Observable<WineVintage[]> {
    const vintages = WINE_VINTAGES.filter((vintage) => vintage.wine_id === wineId);
    return of(vintages);
  }
}
