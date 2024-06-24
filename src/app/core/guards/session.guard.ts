import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class SessionGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    return this.checkCookieSession();
  };

  checkCookieSession(): boolean {
    try {
      const token: boolean = this.cookieService.check('token');
      if (!token) this.router.navigate(['/', 'auth'])

      return token;
    } catch (error) {
      console.log('Algo pasó');
      return false;
    }
  }
}
