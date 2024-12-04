import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../models/Country.interface';
import { COUNTRIES } from '../data/Country.data';
import { CountryFilter } from '../models/filters/CountryFilter.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getAllCountries(filter: CountryFilter): Observable<Country[]> {
    return of(this.sortCountries(this.filterCountries(filter.name), filter.order));
  }

  getCountryById(id: number): Observable<Country | undefined> {
    const country = COUNTRIES.find((country) => country.id === id);
    return of(country);
  }

  filterCountries(searchText: string): Country[] {
    return COUNTRIES.filter(country =>
      country.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  sortCountries(countries: Country[], sortOrder: string): Country[] {
    switch (sortOrder) {
      case 'nameAsc':
        return countries.sort((a, b) => a.name.localeCompare(b.name));
      case 'nameDesc':
        return countries.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return countries;
    }
  }
}
