import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {
  searchLocation = new FormControl('London');

  @Input()
  defaultSearchLocation;

  searchBoxOpen = false
  searchIcon = () => this.searchBoxOpen ? "✕" : "☰"

  constructor() { }

  ngOnInit(): void {
  }

  toggleSearching() {
    this.searchBoxOpen = !this.searchBoxOpen;
  }

  resetSearchLocation() {
    this.searchLocation = this.defaultSearchLocation;
  }

}
