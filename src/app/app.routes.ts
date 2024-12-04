import { Routes } from '@angular/router';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { WineListComponent } from './pages/wine-list/wine-list.component';

export const routes: Routes = [
    { path: 'paises', component: CountryListComponent },
    { path: 'paises/:id', component: CountryDetailComponent },

    { path: 'vinhos', component: WineListComponent }
  ];
