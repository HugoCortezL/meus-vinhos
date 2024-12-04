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

  /**
   * Obtém todos os países.
   * @returns Observable contendo a lista de países.
   */
  getAllCountries(filter: CountryFilter): Observable<Country[]> {
    return of(this.sortCountries(this.filterCountries(filter.name), filter.order));
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

  /**
   * Filtra a lista de países com base no nome.
   * @param searchText - Texto a ser buscado no nome dos países.
   * @returns Lista de países filtrada.
   */
  filterCountries(searchText: string): Country[] {
    return COUNTRIES.filter(country =>
      country.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  /**
   * Ordena a lista de países de acordo com a ordem especificada.
   * @param countries - Lista de países a ser ordenada.
   * @param sortOrder - Critério de ordenação (por exemplo, 'nameAsc', 'nameDesc').
   * @returns Lista de países ordenada.
   */
  sortCountries(countries: Country[], sortOrder: string): Country[] {
    switch (sortOrder) {
      case 'nameAsc':
        return countries.sort((a, b) => a.name.localeCompare(b.name)); // Ordena pelo nome em ordem crescente
      case 'nameDesc':
        return countries.sort((a, b) => b.name.localeCompare(a.name)); // Ordena pelo nome em ordem decrescente
      default:
        return countries;  // Se nenhuma ordem foi definida, retorna a lista sem ordenar
    }
  }
}
