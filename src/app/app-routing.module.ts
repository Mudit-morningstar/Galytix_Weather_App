import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { AppComponent } from './app.component';
import { CountryTableComponent } from './country-table/country-table.component';

const routes: Routes = [
  { path: ':q', component: CountryDetailsComponent },
  { path: '', component: CountryTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
