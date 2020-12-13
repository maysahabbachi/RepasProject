import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasStartComponent } from './repas-start.component';

describe('RepasStartComponent', () => {
  let component: RepasStartComponent;
  let fixture: ComponentFixture<RepasStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepasStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepasStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
