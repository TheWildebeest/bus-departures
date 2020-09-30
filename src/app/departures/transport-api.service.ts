import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map, mergeMap } from 'rxjs/operators/';

import { TransportData, TransportDataMember } from './components/main/models/transportapi.interface';

// import { environment } from '../../environments/environment';
import { environment } from '@env/environment'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExternalApisService {
  data: Observable<TransportData>;
  transportApiUrl: string = "https://transportapi.com/v3/uk/";
  atcoCode: string;

  constructor(private http: HttpClient) { }

  // get busStops function
  getBusStop(latitude: number, longitude: number): Observable<TransportData> {
    const data = this.http.get<TransportData>(
      this.transportApiUrl +
      "places.json?" +
      `&app_id=${environment.transportApi.ID}` +
      `&app_key=${environment.transportApi.key}` +
      `&lat=${latitude}` +
      `&lon=${longitude}` +
      "&type=bus_stop"
    );
    return data
  }

  getAtcoCode(latitude: number, longitude: number): Observable<TransportDataMember> {
    return this.getBusStop(latitude, longitude).pipe(
      map(data => data.member[0]))
  }

  getDepartures(latitude: number, longitude: number) {
    const departuresBoardInfo = this
      .getAtcoCode(latitude, longitude)
      .pipe
      (
        mergeMap((transportDataMember: TransportDataMember) => this.http.get(
          this.transportApiUrl +
          `bus/stop/${transportDataMember.atcocode}/` +
          "/live.json?" +
          `&app_id=${environment.transportApi.ID}` +
          `&app_key=${environment.transportApi.key}` +
          `&group=route&limit=1&nextbuses=no`
        ))
      )
      .pipe(
        // map(data => console.log(data)),
        map((busStopData: any) => Object.entries(busStopData.departures)),
        map((departures: any) => {
          return departures.map(departure => departure[1]);
        }),
        map((departuresArray: any) => {
          const departuresList = departuresArray.map(
            (departure: any) => {
              return {
                service: departure[0].line_name,
                destination: departure[0].direction,
                departureTime: departure[0].best_departure_estimate,
                id: departure[0].id,
                linkText: 'View full timetable'
              }
            })
          return departuresList;
        })
      );
    return departuresBoardInfo;
  }
}