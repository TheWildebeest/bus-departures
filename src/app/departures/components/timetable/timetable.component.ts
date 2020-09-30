import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { ExternalApisService } from '../../transport-api.service'

@Component({
  selector: 'app-timetable',
  // templateUrl: './timetable.component.html',
  template: `
    <app-header [status]="status"></app-header>
    <a class="home-link" routerLink="../"></a>
    <main class="main-content timetable">
      <section class="title-board">
        <div class="title-element">
          <p>Service number:</p>
          <h2>{{ selectedService[0] }}</h2>
        </div>          
        <div class="title-element">
          <p>Destination:</p>
          <h2>{{ selectedService[1] }}</h2>
        </div>          
        <div class="title-element">
          <p>Departing at:</p>
          <h2>{{ selectedService[2] }}</h2>
        </div>
      </section>
      <!-- <div *ngFor="let departure of departuresBoardListings; let i = index" class="bus-stop departure-listing"> -->
        <!-- <h2 class="bus-service">{{ departure.service }}</h2>
        <h2 class="destination-name">{{ departure.destination }}</h2>
        <h2 class="bus-depart-time">{{ departure.departureTime }}</h2> -->
      <!-- </div> -->
    </main>
  `
})
export class TimetableComponent implements OnInit {
  status: string = "departures"
  timetable: Observable<Object>;
  selectedService: string[];

  constructor(
    private route: ActivatedRoute,
    private _externalApisService: ExternalApisService
  ) { }

  ngOnInit(): void {
    this.parseUrl();
    this._externalApisService.getDepartures(latLng.lat(), latLng.lng()).subscribe(
      (departuresBoardInfo) => {
        this.departuresBoardListings = departuresBoardInfo;
      };

    parseUrl() {
      this.route.paramMap.subscribe(params => {
        this.selectedService = params.get('id').split('_');
      });
    }
  }