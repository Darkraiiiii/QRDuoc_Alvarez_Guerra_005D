import { TestBed } from '@angular/core/testing';

import { Weather2Service } from './weather2.service';

describe('Weather2Service', () => {
  let service: Weather2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Weather2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
