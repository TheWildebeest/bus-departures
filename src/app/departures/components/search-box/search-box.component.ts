import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { mapSearchBoundsOptions } from '../main/map/googlemaps.snippets';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnChanges, AfterViewInit {

  // DATA FLOW //

  @Input() defaultSearchLocation: FormControl;
  @Output() currentSearchLocation: EventEmitter<any> = new EventEmitter;

  // PROPERTIES //

  // Reactive Forms
  searchLocationForm = this.formBuilder.group({
    searchLocation: ''
  });

  // Google Maps Places library
  autocompleteObject: google.maps.places.Autocomplete;
  @ViewChild('pacInput', { static: false }) searchBoxNode: ElementRef;


  constructor(private formBuilder: FormBuilder) { }
  ngAfterViewInit(): void {
    console.log('@SearchBoxComponent: ngOnInit called.')
    this.autocompleteObject = new google.maps.places.Autocomplete(this.searchBoxNode.nativeElement, mapSearchBoundsOptions);
    console.log(this.autocompleteObject);
  }

  ngOnChanges(): void {
    console.log('@SearchBoxComponent: ngOnChanges called.')
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

}
