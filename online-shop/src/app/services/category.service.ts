import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/category';
import { AdminService } from './admin.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends AdminService<Category> {
  constructor(
    protected override http: HttpClient,
    protected override authService: AuthService
  ) {
    super(http, authService);
    this.controller='categories';
  }

  getCategories() {
    return this.http.get(`${environment.APIUrl}get_categories/`);
  }
}
