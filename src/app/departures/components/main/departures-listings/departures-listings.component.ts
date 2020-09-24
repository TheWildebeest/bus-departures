import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-departures-listings',
  templateUrl: './departures-listings.component.html',
  styleUrls: ['./departures-listings.component.scss']
})
export class DeparturesListingsComponent implements OnInit {

  @Input()
  data: google.maps.MouseEvent;

  constructor(private _externalApisService: ExternalApisService) { }

  ngOnChanges(data) {
    console.log("@DeparturesListingsComponent: ngOnChanges called." + data)
  }

  getDepartures(lat: number, lng: number) {
    this._externalApisService.getDepartures(lat, lng).subscribe(
      (departuresBoardInfo) => {
        this.departuresBoardListings = departuresBoardInfo;
        console.log(this.departuresBoardListings);
      },
      error => console.log("(@MainComponent): Error getting departures info from ExternalApisService: ", error),
      () => console.log("(@MainComponent): Departures Board listings updated successfully.")
    )
  }
