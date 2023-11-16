import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authorizationRequiredGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  if (localStorage.getItem('token')) {
    return true;
  } else {
    router.navigate(['/users/login']);
    return false;
  }
};
