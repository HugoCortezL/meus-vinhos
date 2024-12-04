import { Routes } from '@angular/router';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';

export const routes: Routes = [
    { path: 'paises', component: CountryListComponent }, // Página inicial com a lista de países
    { path: 'paises/:id', component: CountryDetailComponent } // Rota para os detalhes de um país
  ];
