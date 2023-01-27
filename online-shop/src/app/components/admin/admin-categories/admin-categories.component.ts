import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { ErrorService } from 'src/app/services/error.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css'],
})
export class AdminCategoriesComponent implements OnInit {
  categories: Category[] = [];
  showModal: string = 'none';
  showDeleteModal: string = 'none';
  title = '';
  mode: 'Add' | 'Edit' = 'Add';
  disabled: boolean = false;
  currentItem: Category = {} as Category;
  currentFile: any;

  form = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
  });
  constructor(
    private categoryService: CategoryService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  async getCategories() {
    this.categories = await this.categoryService.get();
  }

  add() {
    this.currentItem = {} as Category;
    this.title = 'Add Category';
    this.showModal = 'block';
    this.form.reset();
    this.mode = 'Add';
  }
  edit(item: Category) {
    this.currentItem = item;
    this.title = `Edit ${item.name}`;
    this.showModal = 'block';
    this.mode = 'Edit';
    this.form.patchValue(item);
  }
  delete(item: Category) {
    this.showDeleteModal = 'block';
    this.title = `Deleting ${item.name}`;
    this.currentItem = item;
  }

  hideDeleteModal() {
    this.showDeleteModal = 'none';
  }

  hideModal() {
    this.showModal = 'none';
  }

  async destory() {
    this.disabled = true;
    try {
      await this.categoryService.delete(this.currentItem.id);
      await this.getCategories();
      this.showDeleteModal = 'none';
    } catch (e) {
      alert(this.errorService.getErrorMessage(e));
    } finally {
      this.disabled = false;
    }
  }

  async submit() {
    if (this.form.valid) {
      this.disabled = true;
      try {
        console.log(this.form.value);
        let item = new FormData();
        item.append('id', this.form.value.id?.toString() || '');
        item.append('name', this.form.value.name || '');
        item.append('image', this.currentFile);
        console.log(item);
        await this.categoryService.add(item);
        await this.getCategories();
        this.showModal = 'none';
      } catch (e) {
        alert(this.errorService.getErrorMessage(e));
      } finally {
        this.disabled = false;
      }
    }
  }

  handleFile(event: any) {
    this.currentFile = event.target.files[0];
  }
}
