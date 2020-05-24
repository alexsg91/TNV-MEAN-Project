import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = 'http://localhost:3000/data';

  constructor( private http : HttpClient) { }

  getData () {
    return this.http.get(this.baseURL)
  }

  getEntry( id ) {
    return this.http.get(this.baseURL + "/" + id)
  }

  deleteEntry( id ){
    return this.http.delete(this.baseURL + "/" + id)
  }

}
