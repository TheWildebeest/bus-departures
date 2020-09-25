import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchLocation = new FormControl('London');
  searchBoxOpen = false
  searchIcon = () => this.searchBoxOpen ? "❌" : "☰"

  constructor() { }

  ngOnInit(): void {
  }

  toggleSearching() {
    this.searchBoxOpen = !this.searchBoxOpen;
  }

}
