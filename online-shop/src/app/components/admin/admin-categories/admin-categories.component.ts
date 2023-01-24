import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css'],
})
export class AdminCategoriesComponent implements OnInit {
  categories: Category[] = [];
  showModal: string = 'none';
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  async getCategories() {
    this.categories = await this.categoryService.get();
  }
  add() {
    this.showModal = 'block';
  }
  edit(id: number) {
    this.showModal = 'block';
  }
  delete(id: number) {
    this.showModal = 'block';
  }
}
