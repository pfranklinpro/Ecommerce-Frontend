import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  onSubmit(form: NgForm) {
    let username = form.value.username;
    let password = form.value.password;

    this.authService.login(username, password);
  }
}
