import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



// api.openweathermap.org/data/2.5/weather?q=Kabul,AF&APPID=794ee95e63c5a32aaf88cd813fa2e425
  // - {{c.alpha2Code}}

export class AppComponent  {
  title = 'Weather App';
  data: any;
  constructor(private http: HttpClient) { }
    ngOnInit() {
        // Simple GET request with response type <any>
      this.http.get<any>('https://restcountries.eu/rest/v2/all').subscribe(data => {
        console.log(data);
            this.data = data;
        })
    }
}
