import { TestBed } from '@angular/core/testing';

import { ProfeAutorizadoGuard } from './profe-autorizado.guard';

describe('ProfeAutorizadoGuard', () => {
  let guard: ProfeAutorizadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfeAutorizadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
