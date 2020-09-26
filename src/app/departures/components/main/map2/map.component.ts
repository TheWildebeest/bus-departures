// Angular Core imports
import { Component, AfterViewInit, ViewChild, EventEmitter, ElementRef, Output } from '@angular/core';

// Custom imports
import { mapOptions } from './googlemaps.snippets';

// Interfaces

@Component({
  selector: 'app-map-two',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponentTwo implements AfterViewInit {

  // DATA FLOW //
  @Output()
  mapLeftClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter();

  // PROPERTIES //

  mapObject: google.maps.Map;

  // Give the component access to the DOM node:
  @ViewChild('mapContainer', { static: false }) mapNode: ElementRef;

  ngAfterViewInit() {
    this.initMap();
  }

  // METHODS //

  // Create a map initializer function
  initMap() {
    this.mapObject = new google.maps.Map(this.mapNode.nativeElement, mapOptions);
    new google.maps.TransitLayer().setMap(this.mapObject);
    this.mapObject.addListener<"click">('click', (MouseEvent: google.maps.MouseEvent) => {
      this.handleMapLeftClick(MouseEvent);
    });
  }

  handleMapLeftClick(MouseEvent: google.maps.MouseEvent) {
    console.log(MouseEvent);
    this.mapLeftClick.emit(MouseEvent);
  }

  placeMarker(event: google.maps.MouseEvent) {
    new google.maps.Marker({
      position: event.latLng,
      map: this.mapObject
    });
    this.mapObject.panTo(event.latLng);
  }
}
