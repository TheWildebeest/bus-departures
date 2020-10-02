import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeparturesBoardListing } from '../models/transportapi.interface';

@Component({
  selector: 'app-departures-listings',
  templateUrl: './departures-listings.component.html',
})
export class DeparturesListingsComponent {

  @Input() busStopName: string;

  @Input() departuresBoardListings: DeparturesBoardListing;

  @Output() clickDeparture: EventEmitter<string> = new EventEmitter();

  public handleLeftClick(departure) {
    this.clickDeparture.emit(departure);
  }
}
