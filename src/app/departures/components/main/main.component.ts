import { Component } from '@angular/core';

import { ExternalApisService } from '../../external-apis.service'

import { DeparturesBoardListing, TransportDataMember } from './models/transportapi.interface';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {

  // departures board  properties
  busStopName: string = "Click the map to show live departures for the closest bus stop";
  departuresBoardListings: DeparturesBoardListing[] = [
    { service: "", destination: "", departureTime: "" },
  ];

  // @angular/google-maps readme:
  // https://github.com/angular/components/blob/master/src/google-maps/README.md

  constructor(private _externalApisService: ExternalApisService) { }

  // maps interaction
  getMapLeftClickData(event: google.maps.MouseEvent): google.maps.MouseEvent {
    console.log(event.latLng)
    return event;
  }

  // departures board interaction
  getDepartures(lat: number, lng: number) {
    this._externalApisService.getDepartures(lat, lng).subscribe(
      (departuresBoardInfo) => {
        this.departuresBoardListings = departuresBoardInfo;
        console.log(this.departuresBoardListings);
      },
      error => console.log("(@MainComponent): Error getting departures info from ExternalApisService: ", error),
      () => console.log("(@MainComponent): Departures Board listings updated successfully.")
    )
  }

  getBusStopName(lat: number, lng: number): void {
    this._externalApisService.getAtcoCode(lat, lng).subscribe(
      (dataMember: TransportDataMember) => {
        this.busStopName = `Live departures for ${dataMember.name}`;
      }
    )
  }

  handleClick(event: google.maps.MouseEvent) {
    this.getBusStopName(event.latLng.lat(), event.latLng.lng());
    this.getDepartures(event.latLng.lat(), event.latLng.lng());
    // this.getBusStop(this.latitude, this.longitude);
  }

}
