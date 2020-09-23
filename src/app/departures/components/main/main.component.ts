import { Component, Input, OnInit } from '@angular/core';

import { ExternalApisService } from '../../external-apis.service'

import { TransportData, TransportDataMember } from './models/transportapi.interface';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  busStopData: TransportDataMember;
  departuresBoardListings: any;
  // latitude: number;
  // longitude: number;

  @Input() options: google.maps.MapOptions;

  @Input()
  height: string = "100%";
  @Input()
  width: string = "100%";

  // @angular/google-maps readme:
  // https://github.com/angular/components/blob/master/src/google-maps/README.md

  constructor(
    private _externalApisService: ExternalApisService
  ) { }

  ngOnInit(): void {
    this.options = {
      center: {
        lat: 51.4952,
        lng: -0.1439
      },
      zoom: 16,
      clickableIcons: false,
    }
  }

  // getBusStop(lat: number, lng: number) {
  //   this._externalApisService.getBusStop(lat, lng).subscribe(
  //     (data: TransportData) => {
  //       this.busStopData = data.member[0];
  //     },
  //     error => console.log(error),
  //     () => console.log("Success"))
  // }

  getDepartures(lat: number, lng: number) {
    this._externalApisService.getDepartures(lat, lng).subscribe(
      (departuresBoardInfo: any) => {
        this.departuresBoardListings = departuresBoardInfo;
      },
      error => console.log("(@MainComponent): Error getting departures info from ExternalApisService: ", error),
      () => console.log("(@MainComponent): Departures Board listings updated successfully.")
    )
  }



  // moveMap(event: google.maps.MouseEvent) {
  //   this.options.center = (event.latLng.toJSON());
  // }

  handleClick(event: google.maps.MouseEvent) {
    // event.preventDefault; doesn't stop default map behaviour
    // adjust settings via googe-map element attributes
    // this.latitude = event.latLng.lat();
    // this.longitude = event.latLng.lng();
    // console.log(event.latLng.lat());
    // console.log(event.latLng.lng());
    this.getDepartures(event.latLng.lat(), event.latLng.lng());
    // this.getBusStop(this.latitude, this.longitude);

    // will probably need a forkJoin() here

  }

}
