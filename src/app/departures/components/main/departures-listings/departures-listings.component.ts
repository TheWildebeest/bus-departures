import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { DeparturesBoardListing } from '../models/transportapi.interface';

@Component({
  selector: 'app-departures-listings',
  templateUrl: './departures-listings.component.html',
  styleUrls: ['./departures-listings.component.scss']
})
export class DeparturesListingsComponent implements OnChanges {


  @Input()
  departuresBoardListings: DeparturesBoardListing;
  @Input()
  busStopName: string

  @Output()
  clickDeparture: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    console.log("@DeparturesListingsComponent: ngOnChanges called.")
  }

  handleLeftClick(id: string) {
    this.clickDeparture.emit(id);
  }
}
