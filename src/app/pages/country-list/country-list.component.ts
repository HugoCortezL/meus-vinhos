import { Component } from '@angular/core';
import { Country } from '../../core/models/Country.interface';
import { CountryService } from '../../core/services/country.service';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from '../../shared/components/country-card/country-card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-country-list',
  imports: [CommonModule, ReactiveFormsModule, CountryCardComponent],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent {
  countries: Country[] = [];
  searchControl: FormControl = new FormControl('');
  searchText: string = '';
  sortOrder: string = 'nameAsc';

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    // Obtém todos os países
    this.countryService.getAllCountries().subscribe((data) => {
      this.countries = data;
    });

    this.searchControl.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(value => {
      this.searchText = value;
      console.log(value)
    });
  }

  filteredCountries() {
    let filtered = this.countries.filter(country =>
      country.name.toLowerCase().includes(this.searchText.toLowerCase())
    );

    // Ordena os países com base na seleção de ordenação
    return this.sortCountries(filtered);
  }

  sortCountries(filteredCountries: Country[]): Country[] {
    switch (this.sortOrder) {
      case 'nameAsc':
        return filteredCountries.sort((a, b) => a.name.localeCompare(b.name)); // Ordena pelo nome em ordem crescente
      case 'nameDesc':
        return filteredCountries.sort((a, b) => b.name.localeCompare(a.name)); // Ordena pelo nome em ordem decrescente
      default:
        return filteredCountries;  // Se nenhuma ordem foi definida, retorna a lista sem ordenar
    }
  }

  onSortCountryChange(event: any): void {
    this.sortOrder = event.target.value;
  }
}
