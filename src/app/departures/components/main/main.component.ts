import { Component, Input, OnInit } from '@angular/core';

import { ExternalApisService } from '../../external-apis.service'

import customStyles from './googlemaps.styles';
import { DeparturesBoardListing, TransportDataMember, CustomMarkerOptions, CustomMapOptions } from './models/transportapi.interface';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  mapOptions: CustomMapOptions;
  mapHeight: string;
  mapWidth: string;
  markerPosition: google.maps.LatLng;
  markerOptions: CustomMarkerOptions; // : google.maps.MarkerOptions;


  busStopName: string = "Click the map to show live departures for the closest bus stop";
  departuresBoardListings: DeparturesBoardListing[] = [
    { service: "", destination: "", departureTime: "" },
  ];
  // latitude: number;
  // longitude: number;



  // @angular/google-maps readme:
  // https://github.com/angular/components/blob/master/src/google-maps/README.md

  constructor(private _externalApisService: ExternalApisService) { }

  ngOnInit(): void {
    this.mapOptions = {
      center: {
        lat: 51.5124,
        lng: -0.0902
      },
      clickableIcons: false,
      mapTypeControl: false,
      mapTypeId: 'roadmap',
      streetViewControl: false,
      styles: customStyles, // bug ?
      zoom: 16,
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
          height: 25,
        },
        scaledSize: {
          width: 25,
          height: 25,
        }
      }
    }
    this.getBusStopName(event.latLng.lat(), event.latLng.lng());
    this.getDepartures(event.latLng.lat(), event.latLng.lng());
    // this.getBusStop(this.latitude, this.longitude);

    // will probably need a forkJoin() here

  }

}
