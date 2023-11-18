import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Weather2Service {

  apiKey = 'ec7804d3e14cd167727a0922c09eb8a6';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = 'https://api.openweathermap.org/data/2.5/weather?q=Santiago,Chile&appid=' + this.apiKey + '&units=metric';
  }

  getWeather2(cityName: string, countryCode: string) {
    return this.http.get(this.URI);
  }

}
