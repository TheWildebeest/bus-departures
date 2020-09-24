import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomMapOptions, CustomMarkerOptions } from '../models/googlemapscustom.interface';
import { customStylesSnippet, MarkerStylesSnippet } from './googlemaps.snippets';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  mapOptions: CustomMapOptions;
  mapHeight: string;
  mapWidth: string;
  markerOptions: CustomMarkerOptions; // : google.maps.MarkerOptions;

  @Output()
  markerPosition: google.maps.LatLng;
  @Output()
  mapLeftClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter();

  constructor() { }

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
      styles: customStylesSnippet, // bug ?
      zoom: 16,
    }

  }

  handleClick(event: google.maps.MouseEvent) {
    // console.log(event.latLng);
    this.markerPosition = event.latLng;
    this.markerOptions = MarkerStylesSnippet;
    this.mapLeftClick.emit(event);
  }
}
