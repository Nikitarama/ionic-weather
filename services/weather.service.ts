import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
              private http: HttpClient,
  ) { }

  getWeatherData(): Observable<any> {
    let lat = -33.918861;
    let lon = 18.423300;
    let apiID = '9de081b04588e26fbd72269dbdf8da6d';
    let queryString = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=45&appid=${apiID}&units=metric`;
    //using the queryString to pull the info from the API//

    return this.http.get(queryString);
  }
}
