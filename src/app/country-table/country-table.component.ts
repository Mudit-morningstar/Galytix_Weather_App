import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})

export class CountryTableComponent implements OnInit  {
  title = 'Weather App';
  data: any;
  constructor(private http: HttpClient) { }
    ngOnInit() {
      this.http.get<any>('https://restcountries.eu/rest/v2/all').subscribe(data => {
        console.log(data);
        this.data = data;
      })
    }
}
