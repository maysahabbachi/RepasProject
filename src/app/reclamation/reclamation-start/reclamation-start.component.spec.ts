import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationStartComponent } from './reclamation-start.component';

describe('ReclamationStartComponent', () => {
  let component: ReclamationStartComponent;
  let fixture: ComponentFixture<ReclamationStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
