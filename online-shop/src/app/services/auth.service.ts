import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(data: any) {
    return this.httpClient.post(`${environment.APIUrl}login`, {
      email: data.username,
      password: data.password,
    });
  }

  register(data: any) {
    return this.httpClient.post(`${environment.APIUrl}register`, data);
  }

  saveLoginData(data: any) {
    localStorage.setItem('loginData', JSON.stringify(data));
  }

  loadLoginData(): any {
    return JSON.parse(localStorage.getItem('loginData') ?? '');
  }

  hasLoginData(): boolean {
    return localStorage.getItem('loginData') != null;
  }

  getToken(): string {
    return this.loadLoginData()?.api_token;
  }

  getName(): string {
    return this.loadLoginData()?.name;
  }

  logOut() {
    localStorage.removeItem('loginData');
    this.router.navigate(['']);
  }
}
