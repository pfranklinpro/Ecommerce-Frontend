import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient, HttpHandler ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have as auth null', () => {
    expect(service.auth).toBe(null);
  });

  it('should have as hasAuth false', () => {
    expect(service.hasAuth).toBeFalse();
  });

  it('should have as isAuth true', () => {
    window.sessionStorage.setItem("auth", JSON.stringify({auth: true}));
    expect(service.isAuth()).toBeTrue();
    window.sessionStorage.removeItem("auth");
  });

  it('should have as isAuth false', () => {
    expect(service.isAuth()).toBeFalse();
  });

});
