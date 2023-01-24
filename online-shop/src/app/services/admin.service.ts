import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService<T> {
  public controller: string = '';
  constructor(protected http: HttpClient, protected authService: AuthService) {}

  async add(item: T):Promise<boolean> {
    return await this.http
      .post(`${environment.APIUrl}${this.controller}`, item, {
        headers: {
          Authorization: `Bearer ${this.authService.getToken()}`,
          'Content-Type': 'application/json',
        },
      })
      .toPromise() as boolean;
  }

  async get(): Promise<T[]> {
    return (await this.http
      .get(`${environment.APIUrl}${this.controller}`, {
        headers: {
          Authorization: `Bearer ${this.authService.getToken()}`,
          'Content-Type': 'application/json',
        },
      })
      .toPromise()) as T[];
  }

  async getById(id: number): Promise<T> {
    return (await this.http
      .get(`${environment.APIUrl}${this.controller}`, {
        headers: {
          Authorization: `Bearer ${this.authService.getToken()}`,
          'Content-Type': 'application/json',
        },
      })
      .toPromise()) as T;
  }

  async update(id: number, item: T): Promise<boolean> {
    return (await this.http
      .get(`${environment.APIUrl}${this.controller}`, {
        headers: {
          Authorization: `Bearer ${this.authService.getToken()}`,
          'Content-Type': 'application/json',
        },
      })
      .toPromise()) as boolean;
  }

  async delete(id: number): Promise<boolean> {
    return (await this.http
      .get(`${environment.APIUrl}${this.controller}`, {
        headers: {
          Authorization: `Bearer ${this.authService.getToken()}`,
          'Content-Type': 'application/json',
        },
      })
      .toPromise()) as boolean;
  }
}
