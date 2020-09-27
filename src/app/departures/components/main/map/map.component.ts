// Angular Core imports

import {
  Component, AfterViewInit, ViewChild,
  EventEmitter, ElementRef, Output
}
  from '@angular/core';

// Custom imports
import { busMapOptions, busMarkerOptions } from './googlemaps.snippets';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements AfterViewInit {

  // DATA FLOW //
  @Output()
  mapLeftClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter();

  // @Output()
  // markerPosition: google.maps.LatLng;

  // PROPERTIES //
  mapObject: google.maps.Map;
  markerObject: google.maps.Marker;

  // Give the component access to the DOM node:
  @ViewChild('mapContainer', { static: false }) mapNode: ElementRef;

  ngAfterViewInit() {
    this.initMap();
  }

  // METHODS //

  // Map initializer function
  initMap() {
    this.mapObject = new google.maps.Map(this.mapNode.nativeElement, busMapOptions);
    new google.maps.TransitLayer().setMap(this.mapObject);
    this.mapObject.addListener<"click">('click', (MouseEvent: google.maps.MouseEvent) => {
      this.handleMapLeftClick(MouseEvent);
    });
  }

  handleMapLeftClick(MouseEvent: google.maps.MouseEvent) {
    this.mapLeftClick.emit(MouseEvent);
    console.log(MouseEvent);
    this.placeMarker(MouseEvent);
    // this.markerPosition = event.latLng;
    // this.markerOptions = markerStylesSnippet;
  }

  placeMarker(event: google.maps.MouseEvent) {
    this.markerObject ? this.markerObject.setMap(null) : null;
    this.markerObject = new google.maps.Marker(busMarkerOptions(event, this.mapObject));
    this.mapObject.panTo(event.latLng);
  }

}
