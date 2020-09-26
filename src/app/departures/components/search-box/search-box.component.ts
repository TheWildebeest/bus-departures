import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {
  @Input() defaultSearchLocation: FormControl;
  @Output() currentSearchLocation: EventEmitter<any> = new EventEmitter;

  searchLocationForm = this.formBuilder.group({
    searchLocation: ''
  });

  searchBoxOpen = false
  searchIcon = () => this.searchBoxOpen ? "✕" : "☰"

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.resetSearchLocation();
  }

  getCurrentLocation() {
    return this.searchLocationForm.get('searchLocation').value;
  }

  onSubmit(event: EventEmitter<any>) {
    this.currentSearchLocation.emit(`${event}`)
    console.log(this.getCurrentLocation())
  }
  resetSearchLocation() {
    this.searchLocationForm.setValue({
      searchLocation: this.defaultSearchLocation.value
    });
  }

  toggleSearching() {
    this.searchBoxOpen = !this.searchBoxOpen;
  }

}
