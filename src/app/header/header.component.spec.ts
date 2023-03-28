import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as showLogin true', () => {
    expect(component.showLogin()).toBeTrue();
  });

  it('should have as showLogin false', () => {
    window.sessionStorage.setItem("auth", JSON.stringify({username: "testUser", password: "testPassword"}));
    expect(component.showLogin()).toBeFalse();
    window.sessionStorage.removeItem("auth");
  });

  it('should have as showUsername false', () => {
    expect(component.showUsername()).toBeFalse();
  });

  it('should have as showUsername true', () => {
    window.sessionStorage.setItem("auth", JSON.stringify({username: "testUser", password: "testPassword"}));
    expect(component.showUsername()).toBeTrue();
    window.sessionStorage.removeItem("auth");
  });
});
