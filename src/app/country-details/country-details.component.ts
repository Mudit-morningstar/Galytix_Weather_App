import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})

export class CountryDetailsComponent implements OnInit  {
  title = 'Weather App';
  data: any;
  temprature: any;
  description: any;
  constructor(private http: HttpClient, private router: Router) { }
    ngOnInit() {
      this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${this.router.url.substring(1)}&APPID=794ee95e63c5a32aaf88cd813fa2e425`).subscribe(data => {
        console.log(data);
        this.data = data;
        this.temprature = (data.main.temp - 273.15).toFixed(2);
      })
    }
}
