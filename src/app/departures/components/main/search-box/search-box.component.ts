import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {
  @Input() defaultSearchLocation: FormControl;

  searchLocationForm = new FormGroup({
    searchLocation: new FormControl('')
  });


  searchBoxOpen = false
  searchIcon = () => this.searchBoxOpen ? "✕" : "☰"

  constructor() { }

  ngOnInit(): void {
    this.resetSearchLocation();
  }

  toggleSearching() {
    this.searchBoxOpen = !this.searchBoxOpen;
  }

  resetSearchLocation() {
    this.searchLocationForm.setValue({
      searchLocation: this.defaultSearchLocation
    });
  }

}
