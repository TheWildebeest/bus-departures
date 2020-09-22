// // google-maps-demo.module.ts

// import { NgModule } from '@angular/core';
// import { GoogleMapsModule } from '@angular/google-maps';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// import { GoogleMapsDemoComponent } from './google-maps-demo.component';

// @NgModule({
//   declarations: [
//     GoogleMapsDemoComponent,
//   ],
//   imports: [
//     CommonModule,
//     GoogleMapsModule,
//     HttpClientModule,
//     HttpClientJsonpModule,
//   ],
//   exports: [
//     GoogleMapsDemoComponent,
//   ],
// })
// export class GoogleMapsDemoModule { }


// // google-maps-demo.component.ts

// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

// @Component({
//   selector: 'google-maps-demo',
//   templateUrl: './google-maps-demo.component.html',
// })
// export class GoogleMapsDemoComponent {
//   apiLoaded: Observable<boolean>;

//   constructor(httpClient: HttpClient) {
//     this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE', 'callback')
//       .pipe(
//         map(() => true),
//         catchError(() => of(false)),
//       );
//   }
// }