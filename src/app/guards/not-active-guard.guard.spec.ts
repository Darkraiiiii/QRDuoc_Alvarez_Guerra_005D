import { TestBed } from '@angular/core/testing';

import { NotActiveGuardGuard } from './not-active-guard.guard';

describe('NotActiveGuardGuard', () => {
  let guard: NotActiveGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotActiveGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
