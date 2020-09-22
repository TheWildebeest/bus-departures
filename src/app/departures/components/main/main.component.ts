import { Component, Input, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ExternalApisService } from '../../external-apis.service'

import { TransportData, TransportDataMember } from './models/transportapi.interface';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  busStopsData: TransportDataMember;
  latitude: number;
  longitude: number;

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

  getBusStops(lat: number, lng: number) {
    this._externalApisService.getBusStops(lat, lng).subscribe(
      (data: TransportData) => {
        this.busStopsData = data.member[0];
        console.log("data:", data);
      },
      error => console.log(error),
      () => console.log(this.busStopsData)
    );
  }

  moveMap(event: google.maps.MouseEvent) {
    this.options.center = (event.latLng.toJSON());
  }

  handleClick(event: google.maps.MouseEvent) {
    // event.preventDefault; doesn't stop default map behaviour
    this.latitude = event.latLng.lat();
    this.longitude = event.latLng.lng();
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
    this.getBusStops(this.latitude, this.longitude);

    // will probably need a forkJoin() here

  }

}
