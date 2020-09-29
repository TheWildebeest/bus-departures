import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { mapSearchBoundsOptions } from '../main/map/googlemaps.snippets';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit, AfterViewInit {

  // DATA FLOW //

  @Input() searchLocation: FormControl;
  @Output() formSubmit: EventEmitter<google.maps.places.PlaceResult> = new EventEmitter();
  searchPlaceResult: google.maps.places.PlaceResult;

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
  }

  ngAfterViewInit(): void {
    this.autocompleteObject = new google.maps.places.Autocomplete(
      this.searchBoxNode.nativeElement, mapSearchBoundsOptions);
    this.autocompleteObject.addListener
      ('place_changed', () => {
        const result = this.autocompleteObject
          .getPlace();
        this.searchLocationForm.setValue({
          searchLocation: result ? result.formatted_address : ''
        });
        this.searchBoxNode.nativeElement.focus();
        // this.searchLocationForm.markAllAsTouched();
        // this.searchLocationForm.get('searchLocation').markAsTouched();
        // TODO: add validator to make it required 'Please enter a location'
        // TODO: search button, active once a valid place has been entered
        // TODO: pipes
        // TODO: loading state while listener is calling api
      });
  }

  get currentLocation() {
    if ((!this.searchLocationForm.get('searchLocation').value) && (this.autocompleteObject && this.autocompleteObject.getPlace())) {
      this.resetSearchLocation();
    };
    return this.searchLocationForm.get('searchLocation');
  }

  onSubmit() {
    this.searchPlaceResult = this.autocompleteObject.getPlace();
    this.formSubmit.emit(this.searchPlaceResult);
    this.resetSearchLocation();
  }

  resetSearchLocation() {
    this.searchLocationForm.reset({
      searchLocation: '' // TODO: pass down as dynamic value from App component
    });
    this.autocompleteObject.set('place', null);
  }

}
