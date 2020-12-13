import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteAffichageComponent } from './specialite-affichage.component';

describe('SpecialiteAffichageComponent', () => {
  let component: SpecialiteAffichageComponent;
  let fixture: ComponentFixture<SpecialiteAffichageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialiteAffichageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialiteAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
