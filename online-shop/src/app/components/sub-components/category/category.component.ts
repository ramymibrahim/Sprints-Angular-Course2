import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from 'src/app/image.service';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: '.app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() category: Category = {} as Category;
  
  constructor(public imageService:ImageService) {}

  ngOnInit(): void {}
  
}
