import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExternalApisService {

  constructor(private http: HttpClient) { }

  // get busStops function
  getBusStops() {
    return this.http.get(`googlemapurl`)
  }

}
