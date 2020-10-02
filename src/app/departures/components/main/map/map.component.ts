// Angular Core imports

import {
  Component, AfterViewInit, ViewChild,
  EventEmitter, ElementRef, Output, Input, OnChanges, SimpleChanges
}
  from '@angular/core';

// Custom imports
import { busMapOptions, busMarkerOptions } from './googlemaps.snippets';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements AfterViewInit, OnChanges {
  // Give the component access to the DOM node:
  @ViewChild('mapContainer', { static: false }) mapNode: ElementRef;

  // DATA FLOW //
  @Input() mapCenter: google.maps.LatLng;

  @Output() mapLeftClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter();

  // @Output()
  // markerPosition: google.maps.LatLng;

  // PROPERTIES //
  mapObject: google.maps.Map;
  markerObject: google.maps.Marker;

  ngAfterViewInit() {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.mapCenter.currentValue) {
      this.centerMap(changes.mapCenter.currentValue);
    }
  }

  // METHODS //

  // Map initializer function
  private initMap(): void {
    this.mapObject = new google.maps.Map(this.mapNode.nativeElement, busMapOptions);
    new google.maps.TransitLayer().setMap(this.mapObject);
    this.mapObject.addListener<"click">('click', (MouseEvent: google.maps.MouseEvent) => {
      this.handleMapLeftClick(MouseEvent);
    });
  }

  /**
   * Handles left click events on the google map instance
   * @param {google.maps.MouseEvent} MouseEvent 
   * @return {void}
   */
  private handleMapLeftClick(MouseEvent?: google.maps.MouseEvent): void {
    this.mapLeftClick.emit(MouseEvent);
    this.placeMarker(MouseEvent);
    // this.markerPosition = event.latLng;
    // this.markerOptions = markerStylesSnippet;
  }

  private placeMarker(event: google.maps.MouseEvent): void {
    this.markerObject ? this.markerObject.setMap(null) : null;
    this.markerObject = new google.maps.Marker(busMarkerOptions(event, this.mapObject));
    // this.mapObject.panTo(event.latLng);
    this.centerMap(event.latLng);
  }

  private centerMap(latLng: google.maps.LatLng): void {
    this.mapObject.panTo(latLng)
  }
}
