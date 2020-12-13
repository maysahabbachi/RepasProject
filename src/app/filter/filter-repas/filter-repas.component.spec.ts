import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRepasComponent } from './filter-repas.component';

describe('FilterRepasComponent', () => {
  let component: FilterRepasComponent;
  let fixture: ComponentFixture<FilterRepasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterRepasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
