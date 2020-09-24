import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparturesListingsComponent } from './departures-listings.component';

describe('DeparturesListingsComponent', () => {
  let component: DeparturesListingsComponent;
  let fixture: ComponentFixture<DeparturesListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparturesListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparturesListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
