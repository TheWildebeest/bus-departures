import { Component, AfterViewInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-map-two',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponentTwo implements AfterViewInit {
  map: google.maps.Map;

  // Give the component access to the DOM node:
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  constructor() { }

  ngAfterViewInit() { }


}
