import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../country';
import { COUNTRIES } from '../mock-countries';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private url = 'https://api.covid19api.com/summary';
  constructor(private http: HttpClient) { }

  countriesData(): Observable<any>
  {
    return this.http.get(this.url).pipe(map((res) => 
      {
        return res["Countries"];
      }))
  }

  globalData(): Observable<any>
  {
    return this.http.get(this.url).pipe(map((res) => 
      {
        return res["Global"];
      }))
  }

  spainData(): Observable<any>
  {
    return this.http.get(this.url).pipe(map((res) =>
      {
        return res['Countries'].filter( (country) =>
          {
            return country.Country === 'Spain'
          })
      }))
  }
}