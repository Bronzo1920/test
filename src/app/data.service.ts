import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWeather() {
    //return this.https.get('http://api.darksky.net/forecast/d10a145d31fba53f7a1b23fdb30964c6/37.8267,-122.4233')
    return this.http.get('https://api.github.com/users/Bronzo1920')

  }
}
