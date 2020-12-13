import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteDetailsComponent } from './specialite-details.component';

describe('SpecialiteDetailsComponent', () => {
  let component: SpecialiteDetailsComponent;
  let fixture: ComponentFixture<SpecialiteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialiteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
