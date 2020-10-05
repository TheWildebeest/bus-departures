import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'bus-departures';
  activeLang: any;
  availableLangs: any;

  constructor(private translationService: TranslocoService) {}

  ngOnInit() {
    this.activeLang = this.translationService.getActiveLang();
    this.availableLangs = this.translationService.getAvailableLangs();
    console.log('activeLang:', this.activeLang, '\n', 'availableLangs: ', this.availableLangs)
  }
}
