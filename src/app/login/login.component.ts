import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth_service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule,
  CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private authService: AuthService) { }

  title= "Login Form";
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z0-9])[a-z0-9!-_@#$%&*.]{8,}$/i)
    ])
    });
    passwordErrorMessage = '';
    userErrorMessage = '';

// loginSuccessful() {
//    this.authService.loggedIn = true;
// }

onSubmit() {
  if (this.loginForm.controls.username.invalid) {
    this.userErrorMessage = 'Username must be a valid email address.';
  } else {
    this.userErrorMessage = '';
  }
  if (this.loginForm.controls.password.invalid) {
    this.passwordErrorMessage = 'Password must be at least 8 characters long and contain at least one number.';
    this.passwordErrorMessage = 'Password must be at least 8 characters long';
  } else {
    this.passwordErrorMessage = '';
  }
}
}
