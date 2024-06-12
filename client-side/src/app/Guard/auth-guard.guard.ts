import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  //   if(localStorage.getItem("session"))
  const router = inject(Router);
  console.log(localStorage.getItem("session") != null);

  if (localStorage.getItem("session") == "undefined" || localStorage.getItem("session") == null) {
    router.navigate(['\login']);
    return false;
  }
  return true;
};
