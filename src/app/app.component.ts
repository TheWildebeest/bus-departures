import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // title = 'bus-departures';

  // Searchbox state
  searchBoxOpen: boolean;
  searchLocation: FormControl = new FormControl('London');

  ngOnInit(): void {
    this.searchBoxOpen = false
  }

  searchIcon = () => this.searchBoxOpen ? "✕" : "☰";

  toggleSearching() {
    console.log()
    this.searchBoxOpen = !this.searchBoxOpen
  }
}
