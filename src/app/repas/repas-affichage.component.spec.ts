import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasAffichageComponent } from './repas-affichage.component';

describe('RepasAffichageComponent', () => {
  let component: RepasAffichageComponent;
  let fixture: ComponentFixture<RepasAffichageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepasAffichageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepasAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
