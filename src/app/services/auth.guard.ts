// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/shared/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    // ✅ Si hay token, permite el acceso
    return true;
  } else {
    // ❌ Si no hay token, redirige al login
    router.navigate(['/login']);
    return false;
  }
};
