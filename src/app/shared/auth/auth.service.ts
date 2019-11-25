import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _isLoggedIn: string;
  user = false;
  admin = false;
  constructor() {
    this._isLoggedIn = localStorage.getItem('logins');
    if (localStorage.getItem('userid') === '1') {
      this.admin = true;
    } else {
      this.user = true;
    }
  }
  login() {
    console.log(localStorage.getItem('userid'));
    this._isLoggedIn = localStorage.getItem('logins');
    if (localStorage.getItem('userid') === '1') {
      this.admin = true;
    } else {
      this.user = true;
    }
  }
  isUser() {
    this.user = true;
  }
  isAdmin() {
    this.admin = true;
  }
  logout() {
    this.user = false;
    this.admin = false;
    this._isLoggedIn = localStorage.getItem('logins');
  }
}
