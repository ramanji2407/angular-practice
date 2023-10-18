import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminacessGuard } from './adminacess.guard';

describe('adminacessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminacessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
