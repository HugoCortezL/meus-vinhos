import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Winery } from '../models/Winery.interface';
import { WINERIES } from '../data/Winery.data';

@Injectable({
  providedIn: 'root'
})
export class WineryService {

  constructor() { }

  getAllWineries(): Observable<Winery[]> {
    return of(WINERIES);
  }

  getWineryById(id: number): Observable<Winery | undefined> {
    const winery = WINERIES.find((winery) => winery.id === id);
    return of(winery);
  }
}
