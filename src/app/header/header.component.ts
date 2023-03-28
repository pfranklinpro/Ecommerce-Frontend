import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FlagService } from '../flag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  authService: AuthService;
  flagService: FlagService;
  username: string;
  countryCode: string;
  country: string;
  flagSrc: string;
  flagSrcset: string;

  constructor(authService: AuthService, flagService: FlagService) {
    this.authService = authService;
    this.flagService = flagService;
    this.username = "";
    this.countryCode = "";
    this.country = "";
    this.flagSrc = "";
    this.flagSrcset = "";
  }

  showLogin(): boolean {
    return !this.authService.isAuth();
  }

  showUsername(): boolean {
    let showLogin = this.showLogin();

    if (!showLogin) {
      this.username = this.authService.auth.username;
      this.countryCode = this.authService.auth.country;
      
      let flags = this.flagService.flags();

      if (flags !== null) {
        this.country = this.flagService.flags()[this.countryCode];
        this.flagSrc = "https://flagcdn.com/16x12/"+this.countryCode+".png";
        this.flagSrcset = "https://flagcdn.com/32x24/"+this.countryCode+".png 2x,https://flagcdn.com/48x36/"+this.countryCode+".png 3x"
      }
    }

    return !showLogin;
  }
}
