import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { translate, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input()
  status: string;
  @Input()
  defaultSearchLocation: FormControl;
  @Input()
  searchIcon: string;
  @Output()
  searchBoxToggled: EventEmitter<any> = new EventEmitter();


  constructor(private translationService: TranslocoService) { }

  ngOnInit() {
    translate('app-name'); 
  }

  handleClick() {
    this.searchBoxToggled.emit()
  }

}
