import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class AuthService {
 private _loggedIn = false;

 constructor() {
  // Initialize _loggedIn from local storage
  this._loggedIn = !!localStorage.getItem('loggedIn');
 }

 set loggedIn(value: boolean) {
  this._loggedIn = value;
  // Store _loggedIn in local storage
  localStorage.setItem('loggedIn', String(value));
 }

 get loggedIn(): boolean {
  return this._loggedIn;
 }

 isLoggedIn(): boolean {
  return this._loggedIn;
 }

logout(): void {
   this._loggedIn = false;
   localStorage.removeItem('loggedIn');
  }
  
   
}
