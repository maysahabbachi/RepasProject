import { TestBed } from '@angular/core/testing';

import { RepasDetailsService } from './repas-details.service';

describe('RepasDetailsService', () => {
  let service: RepasDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepasDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
