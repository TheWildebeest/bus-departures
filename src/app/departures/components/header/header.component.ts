import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input()
  defaultSearchLocation: FormControl;
  @Input()
  searchIcon: string;
  @Output()
  searchBoxToggled: EventEmitter<any> = new EventEmitter();


  constructor() { }

  handleClick() {
    this.searchBoxToggled.emit()
  }

}
