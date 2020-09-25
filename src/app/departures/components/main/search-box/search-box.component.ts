import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {
  @Input() defaultSearchLocation: FormControl;
  @Output() currentSearchLocation: EventEmitter<string> = new EventEmitter;

  searchLocationForm = new FormGroup({
    searchLocation: new FormControl('')
  });

  searchBoxOpen = false
  searchIcon = () => this.searchBoxOpen ? "✕" : "☰"

  constructor() { }

  ngOnInit(): void {
    this.resetSearchLocation();
  }

  getCurrentLocation() {
    return this.searchLocationForm.get('searchLocation').value;
  }

  onSubmit() {
    this.currentSearchLocation.emit()
    console.log(this.getCurrentLocation())
  }
  resetSearchLocation() {
    this.searchLocationForm.setValue({
      searchLocation: this.defaultSearchLocation
    });
  }

  toggleSearching() {
    this.searchBoxOpen = !this.searchBoxOpen;
  }

}
