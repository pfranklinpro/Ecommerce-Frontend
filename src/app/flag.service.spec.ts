import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { FlagService } from './flag.service';

describe('FlagService', () => {
  let service: FlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient, HttpHandler ]
    });
    service = TestBed.inject(FlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have as flags null', () => {
    expect(service.flags()).toBeNull();
  });

  it('should have as flagsKeys null', () => {
    expect(service.flagsKeys()).toBeNull();
  });
});
