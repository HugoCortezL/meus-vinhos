import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wine } from '../models/Wine.interface';
import { WINES } from '../data/Wine.data';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor() { }

  getAllWines(): Observable<Wine[]> {
    return of(WINES);
  }

  getWineById(id: number): Observable<Wine | undefined> {
    const wine = WINES.find((wine) => wine.id === id);
    return of(wine);
  }
}
