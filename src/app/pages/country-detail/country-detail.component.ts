import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../core/services/country.service';
import { Country } from '../../core/models/Country.interface';

@Component({
  selector: 'app-country-detail',
  imports: [],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent {
  country: Country | undefined;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) { }
  
  ngOnInit(): void {
    // Obter o ID do país da URL
    const countryId = Number(this.route.snapshot.paramMap.get('id'));

    // Buscar o país pelo ID
    this.countryService.getCountryById(countryId).subscribe(country => {
      this.country = country;
    });
  }
}
