import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: HttpClient;
  router: Router;
  auth: any;
  hasAuth: boolean;

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;
    this.auth = null;
    this.hasAuth = false;
  }

  register(username: string, password: string, country: string) {
    let url = "http://localhost:8080/users";

    this.http.post(url, {
      username: username, 
      password: password,
      country: country
    }).subscribe(
      (response: any) => {
        this.auth = response;
        this.hasAuth = true;
        window.sessionStorage.setItem("auth",JSON.stringify(this.auth));
        // https://www.digitalocean.com/community/tutorials/angular-navigation-routerlink-navigate-navigatebyurl
        this.router.navigateByUrl("/");
      },
      (error) => {console.log(error)}
      );
  }

  login(username: string, password: string) {
    let url = "http://localhost:8080/auth";

    this.http.post(url, {
      username: username, 
      password: password
    }).subscribe(
      (response: any) => {
        this.auth = response;
        this.hasAuth = true;
        window.sessionStorage.setItem("auth",JSON.stringify(this.auth));
        // https://www.digitalocean.com/community/tutorials/angular-navigation-routerlink-navigate-navigatebyurl
        this.router.navigateByUrl("/");
      },
      (error) => {console.log(error)}
      );
  }

  isAuth(): boolean {
    const auth = window.sessionStorage.getItem("auth");
    if (auth !== null) {
      this.auth = JSON.parse(auth);
      this.hasAuth = true;
    }
    else {
      this.auth = null;
      this.hasAuth = false;
    }
    return this.hasAuth;
  }
}
