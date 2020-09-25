import { Component, Input, OnChanges } from '@angular/core';
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

  constructor() { }

  ngOnChanges() {
    console.log("@DeparturesListingsComponent: ngOnChanges called.")
  }
}
