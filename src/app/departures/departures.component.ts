import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departures',
  template: "<router-outlet></router-outlet>"
})
export class DeparturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getTimetable(event: string) {
    console.log(event);
  }

}
