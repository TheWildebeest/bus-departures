import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mapSearchBoundsOptions } from '../main/map/googlemaps.snippets';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit, AfterViewInit {

  // DATA FLOW //

  @Input() searchLocation: FormControl;
  @Output() currentSearchLocation: EventEmitter<any> = new EventEmitter;

  // PROPERTIES //

  // Reactive Forms
  searchLocationForm: FormGroup;

  // Google Maps Places library
  autocompleteObject: google.maps.places.Autocomplete;
  @ViewChild('pacInput', { static: false }) searchBoxNode: ElementRef;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchLocationForm = this.formBuilder.group({
      searchLocation: this.searchLocation,
    });
    console.log('@SearchBoxComponent: ngOnChanges called.')
    console.log(this.searchLocation)
  }

  ngAfterViewInit(): void {
    console.log('@SearchBoxComponent: ngOnInit called.')
    this.autocompleteObject = new google.maps.places.Autocomplete(this.searchBoxNode.nativeElement, mapSearchBoundsOptions);
    this.autocompleteObject.addListener('place_changed', () => {
      this.searchLocationForm.setValue({ searchLocation: this.autocompleteObject.getPlace().formatted_address });
      // this.searchLocationForm.markAllAsTouched();
      this.searchLocationForm.get('searchLocation').markAsTouched();
      // TODO: add validator to make it required 'Please enter a location'
      // TODO: search button, active once a valid place has been entered
      // TODO: pipes
      // TODO: loading state while listener is calling api
    });
  }

  get currentLocation() {
    return this.searchLocationForm.get('searchLocation');
  }

  onSubmit(event: EventEmitter<any>) {
    this.currentSearchLocation.emit(`${event}`)
    console.log(this.currentLocation)
  }
  resetSearchLocation() {
    this.searchLocationForm.reset({
      searchLocation: 'London' // TODO: pass down as dynamic value from App component
    });
    console.log(this.searchLocation.value)
  }

}
