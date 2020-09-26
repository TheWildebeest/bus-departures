import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  defaultSearchLocation: FormControl = new FormControl('London');

  constructor() { }

  ngOnInit(): void {
  }

}
