import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ExternalApisService } from '../../external-apis.service'

import { TransportData, TransportDataMember } from './models/transportapi.interface';
import customStyles from './googlemaps.styles';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  mapOptions: google.maps.MapOptions = {};
  height: string = "100%";
  width: string = "100%";

  markerPosition: google.maps.LatLng;
  markerOptions: google.maps.MarkerOptions;


  busStopName: any;
  departuresBoardListings: any = [
    { service: "" },
    { service: "" }
  ];
  // latitude: number;
  // longitude: number;



  // @angular/google-maps readme:
  // https://github.com/angular/components/blob/master/src/google-maps/README.md

  constructor(
    private _externalApisService: ExternalApisService
  ) { }

  ngOnInit(): void {
    this.mapOptions = {
      center: {
        lat: 51.4952,
        lng: -0.1439
      },
      zoom: 16,
      clickableIcons: false,
      mapTypeId: 'roadmap',
      styles: customStyles,
      mapTypeControl: false,
      streetViewControl: false
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

  getBusStopName(lat, lng) {
    this._externalApisService.getAtcoCode(lat, lng).subscribe(
      (dataMember: any) => {
        this.busStopName = `Live departures for ${dataMember.name}`;
      }
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
    this.markerPosition = event.latLng;
    this.markerOptions = {
      icon: {
        url: 'assets/images/logo.png',
        size: {
          width: 25,
          height: 25
        },
        scaledSize: {
          width: 25,
          height: 25
        }
      }
    }
    this.getBusStopName(event.latLng.lat(), event.latLng.lng());
    this.getDepartures(event.latLng.lat(), event.latLng.lng());
    // this.getBusStop(this.latitude, this.longitude);

    // will probably need a forkJoin() here

  }

}
