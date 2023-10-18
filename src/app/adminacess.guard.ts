import { CanActivateFn } from '@angular/router';

export const adminacessGuard: CanActivateFn = (route, state) => {
  return false;
};
