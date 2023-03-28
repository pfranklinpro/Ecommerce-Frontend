import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FlagService } from '../flag.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  authService: AuthService;
  flagService: FlagService;
  flags: any;
  flagsKeys: any[];

  constructor(authService: AuthService, flagService: FlagService) {
    this.authService = authService;
    this.flagService = flagService;
    this.flags = {};
    this.flagsKeys = [];

    this.flagService.getFlags().subscribe(
      (response: any) => {
        this.flagService.getFlagsResponse(response);
        this.flags = this.flagService.flags();
        this.flagsKeys = this.flagService.flagsKeys();
      },
      (error) => {console.log(error)}
      );
  }

  onSubmit(form: NgForm) {
    let username = form.value.username;
    let password = form.value.password;
    let country = form.value.countries;

    this.authService.register(username, password, country);
  }
}
