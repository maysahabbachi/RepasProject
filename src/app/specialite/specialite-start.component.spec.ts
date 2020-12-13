import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteStartComponent } from './specialite-start.component';

describe('SpecialiteStartComponent', () => {
  let component: SpecialiteStartComponent;
  let fixture: ComponentFixture<SpecialiteStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialiteStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialiteStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
