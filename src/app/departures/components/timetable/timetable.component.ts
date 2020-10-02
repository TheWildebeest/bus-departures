import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
        <div *ngFor="let stop of timetable; let i = index">
          <h2 class="bus-service">{{ i }}</h2>
          <h2 class="bus-service">{{ stop.name }}</h2>
          <h2 class="destination-name">{{ stop.time }}</h2>
        </div>
      </section>
    </main>
      `
})
export class TimetableComponent implements OnInit {
  status: string = "departures"
  timetable = [
    {
      name: 'Bloop',
      time: 'Blahday'
    },
    {
      name: 'Bloopydoo',
      time: 'Blahdyblaah'
    }
  ];
  selectedService: string[];

  constructor(
    private route: ActivatedRoute,
    private _externalApisService: ExternalApisService
  ) { }

  ngOnInit(): void {
    this.parseUrl();
    this._externalApisService.getMockData().subscribe(
      data => {
        return data.stops.map(data => this.timetable.push(data))
      }
    );
  }

  parseUrl() {
    this.route.paramMap.subscribe(params => {
      this.selectedService = params.get('id').split('_');
    });
  }
}