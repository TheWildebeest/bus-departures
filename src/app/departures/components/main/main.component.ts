// Angular imports
import { Component, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


// Services
import { ExternalApisService } from '../../transport-api.service'

// Interfaces
import { DeparturesBoardListing, TransportDataMember } from './models/transportapi.interface';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  status: string = "live";
  // Searchbox state
  searchBoxOpen: boolean;
  defaultSearchLocation: string = ''
  searchLocation: FormControl = new FormControl(this.defaultSearchLocation, {
    validators: Validators.required,
    updateOn: 'change'
  });
  dataFromMaps: google.maps.MouseEvent
  searchResult: google.maps.LatLng;

  // Departures listings properties
  busStopName: string = "Click the map to show live departures for the closest bus stop";
  departuresBoardListings: DeparturesBoardListing[] = [
    { service: "", destination: "", departureTime: "" },
  ];


  // @angular/google-maps readme:
  // https://github.com/angular/components/blob/master/src/google-maps/README.md

  constructor(private _externalApisService: ExternalApisService) { }

  ngOnInit(): void {
    this.searchBoxOpen = false
  }

  toggleSearching() {
    console.log()
    this.searchBoxOpen = !this.searchBoxOpen
  }

  searchIcon = () => this.searchBoxOpen ? "✕" : "☰";

  // maps interaction
  getMapLeftClickData(event: google.maps.MouseEvent): google.maps.MouseEvent {
    console.log(event.latLng)
    this.dataFromMaps = event;
    this.getDepartures(event.latLng);
    this.getBusStopName(event.latLng);
    return event;
  }

  // departures board interaction
  getDepartures(latLng: google.maps.LatLng) {
    this.departuresBoardListings = [
      { service: "", destination: "", departureTime: "" },
    ];
    this._externalApisService.getDepartures(latLng.lat(), latLng.lng()).subscribe(
      (departuresBoardInfo) => {
        this.departuresBoardListings = departuresBoardInfo;
        console.log(this.departuresBoardListings);
      },
      error => console.log("(@MainComponent): Error getting departures info from ExternalApisService: ", error),
      () => console.log("(@MainComponent): Departures Board listings updated successfully.")
    )
  }

  getBusStopName(latLng: google.maps.LatLng): void {
    this._externalApisService.getAtcoCode(latLng.lat(), latLng.lng()).subscribe(
      (dataMember: TransportDataMember) => {
        this.busStopName = `Live departures for ${dataMember.name}`;
        console.log(this.busStopName)
      }
    )
  }

  findSearchLocationOnMap(event: google.maps.places.PlaceResult) {
    this.searchResult = event.geometry.location;
    this.toggleSearching();
    console.log(event.geometry.location);
  }

  handleClick(event: google.maps.MouseEvent) {
    this.getBusStopName(event.latLng);
    this.getDepartures(event.latLng);
    // this.getBusStop(this.latitude, this.longitude);
  }

  getTimetable(event: string) {
    console.log(event);
  }

}
