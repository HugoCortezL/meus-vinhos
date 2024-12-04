import { Component } from '@angular/core';
import { Country } from '../../core/models/Country.interface';
import { CountryService } from '../../core/services/country.service';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from '../../shared/components/country-card/country-card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { CountryFilter } from '../../core/models/filters/CountryFilter.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  imports: [CommonModule, ReactiveFormsModule, CountryCardComponent],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent {
  countries: Country[] = [];
  searchControl: FormControl = new FormControl('');
  countryFilter: CountryFilter

  constructor(private countryService: CountryService, private router: Router) {
    this.countryFilter = {
      name: "",
      order: "nameAsc"
    }
  }

  ngOnInit(): void {

    this.updateCountries()

    this.searchControl.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(value => {
      this.countryFilter.name = value;
      this.updateCountries()
    });
  }

  onSortCountryChange(event: any): void {
    this.countryFilter.order = event.target.value;
    this.updateCountries()
  }

  updateCountries() {
    this.countryService.getAllCountries(this.countryFilter).subscribe((data) => {
      this.countries = data;
    });
  }

  onCountryClick(id: number): void {
    this.router.navigate([`/paises/${id}`]);
  }
}
