import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdmin implements CanActivate {
  constructor(private auth: AuthService , private route: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.check();
  }
  check() {
    const data = +localStorage.getItem('userid');
    if (data !== 0 && data === 1 ) { return true; }
    this.route.navigate(['/disp']);
    return false;
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthGuardUser implements CanActivate {
  constructor(private auth: AuthService , private route: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkuser();
  }
  checkuser() {
    const data = +localStorage.getItem('userid');
    if (data !== 0 && data !== 1) { return true; }
    this.route.navigate(['/disp']);
    return false;
  }
}


