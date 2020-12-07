import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  // Una variable para guarlar la url del api
  private url = 'https://api.covid19api.com/summary';

  // Al constructor le pasamos el HttpClient para poder hacer peticiones GET al api
  constructor(private http: HttpClient) { }

  // Método que devuelve un observable con los datos de todos los países
  countriesData(): Observable<any>
  {
    return this.http.get(this.url).pipe(map((res) => 
      {
        return res["Countries"];
      }))
  }

  // Método que devuelve un observable con los datos globales
  globalData(): Observable<any>
  {
    return this.http.get(this.url).pipe(map((res) => 
      {
        return res["Global"];
      }))
  }

  // Método que devuelve un observable con los datos de España
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