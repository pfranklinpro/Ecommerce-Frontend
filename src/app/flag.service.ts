import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagService {
  http: HttpClient;

  constructor(http: HttpClient) { 
    this.http = http;
  }

  getFlags() {
    // https://flagpedia.net/download/api
    let url = "https://flagcdn.com/en/codes.json";

    return this.http.get(url);
  }

  getFlagsResponse(response: any) {
    let flags = response;
    let flagsKeys = Object.keys(flags);
    window.sessionStorage.setItem("flags", JSON.stringify(flags));
    window.sessionStorage.setItem("flagsKeys", JSON.stringify(flagsKeys));
  }

  flags() {
    let flags = window.sessionStorage.getItem("flags");
    return flags ? JSON.parse(flags) : null;
  }

  flagsKeys() {
    let flagsKeys = window.sessionStorage.getItem("flagsKeys");
    return flagsKeys ? JSON.parse(flagsKeys) : null;
  }
}
