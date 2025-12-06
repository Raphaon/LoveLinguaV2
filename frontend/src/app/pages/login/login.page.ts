import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // <--- Tous les composants Ionic viennent de là
  ],
})
export class LoginPage {
  credentials = {
    email: '',
    password: '',
  };

  constructor() {}

  onLogin(): void {
    // TODO: Hook to auth service
    console.log('Login clicked', this.credentials);
  }

  onForgotPassword(): void {
    // TODO: Navigate to forgot password page
    console.log('Forgot password');
  }

  onCreateAccount(): void {
    // TODO: Navigate to register page
    console.log('Create account');
  }
}
