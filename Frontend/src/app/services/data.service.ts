import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidData } from '../models/data.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = 'http://localhost:3000/data';

  constructor( private http : HttpClient) { }

  getData () {
    return this.http.get<Array<CovidData>>(this.baseURL)
  }

  getEntry( id ) {
    return this.http.get<CovidData>(this.baseURL + "/" + id)
  }

  addEntry = (data: CovidData) => {
    return this.http.post<CovidData>(this.baseURL, {
      "country": data.country,
        "population": data.population,
        "cases": data.cases,
        "deaths": data.deaths,
        "recoveries": data.recoveries,
        "recoveryRate": data.recoveryRate,
        "fatalityRate": data.fatalityRate,
        "continent": data.Continent,
        "classification": data.classification,
        "date": data.date
    });
  };

  deleteEntry( id ){
    return this.http.delete(this.baseURL + "/" + id)
  }

}
