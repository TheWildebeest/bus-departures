import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeparturesBoardListing } from '../models/transportapi.interface';

@Component({
  selector: 'app-departures-listings',
  templateUrl: './departures-listings.component.html',
})
export class DeparturesListingsComponent {


  @Input()
  departuresBoardListings: DeparturesBoardListing;
  @Input()
  busStopName: string

  @Output()
  clickDeparture: EventEmitter<string> = new EventEmitter();

  constructor() { }

  handleLeftClick(departure) {
    this.clickDeparture.emit(departure);
  }
}
