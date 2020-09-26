import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CustomMapOptions, CustomMarkerOptions } from '../models/googlemapscustom.interface';
import { customStylesSnippet, markerStylesSnippet } from './googlemaps.snippets';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input()
  mapOptions: CustomMapOptions;
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
    } // this should be an output from here, fired in parent

  }

  handleClick(event: google.maps.MouseEvent) {
    // console.log(event.latLng);
    this.markerPosition = event.latLng;
    this.markerOptions = markerStylesSnippet;
    this.mapLeftClick.emit(event);
  }
}
