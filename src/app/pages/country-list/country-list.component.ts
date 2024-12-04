import { Component } from '@angular/core';
import { Country } from '../../core/models/Country.interface';
import { CountryService } from '../../core/services/country.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-list',
  imports: [CommonModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    // Obtém todos os países
    this.countryService.getAllCountries().subscribe((data) => {
      this.countries = data;
    });
  }
}
