import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Region } from '../models/Region.interface';
import { REGIONS } from '../data/Region.data';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor() { }

  getAllRegions(): Observable<Region[]> {
    return of(REGIONS);
  }

  getRegionById(id: number): Observable<Region | undefined> {
    const region = REGIONS.find((region) => region.id === id);
    return of(region);
  }
}
