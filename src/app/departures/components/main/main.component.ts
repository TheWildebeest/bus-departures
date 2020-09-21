import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  options: google.maps.MapOptions = {
    center: {
      lat: 51.4952,
      lng: -0.1439
    },
    zoom: 16,
  }

  constructor() { }

  ngOnInit(): void {

  }
  handleClick(event: any) {
    event.preventDefault;
  }

}
