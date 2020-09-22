import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransportData } from './components/main/models/transportapi.interface';

// import { environment } from '../../environments/environment';
import { environment } from '@env/environments'


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
  getBusStops(latitude: number, longitude: number): Observable<any> {
    return this.http.get(
      "https://transportapi.com/v3/uk/places.json?" +
      `&app_id=${environment.transportApi.ID}` +
      `&app_key=${environment.transportApi.key}` +
      `&lat=${latitude}` +
      `&lon=${longitude}` +
      "&type=bus_stop"
    )
  }

}