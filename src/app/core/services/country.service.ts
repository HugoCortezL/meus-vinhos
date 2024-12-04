import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../models/Country.interface';
import { COUNTRIES } from '../data/Country.data';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  /**
   * Obtém todos os países.
   * @returns Observable contendo a lista de países.
   */
  getAllCountries(): Observable<Country[]> {
    return of(COUNTRIES);
  }

  /**
   * Obtém um país pelo ID.
   * @param id - ID do país.
   * @returns Observable contendo o país ou undefined se não encontrado.
   */
  getCountryById(id: number): Observable<Country | undefined> {
    const country = COUNTRIES.find((c) => c.id === id);
    return of(country);
  }
}
