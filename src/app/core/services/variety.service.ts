import { Injectable } from '@angular/core';
import { Variety } from '../models/Variety.interface';
import { VARIETIES } from '../data/Variety.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VarietyService {

  constructor() { }

  getAllVarieties(): Observable<Variety[]> {
    return of(VARIETIES);
  }

  getVarietyById(id: number): Observable<Variety | undefined> {
    const variety = VARIETIES.find((variety) => variety.id === id);
    return of(variety);
  }
}
