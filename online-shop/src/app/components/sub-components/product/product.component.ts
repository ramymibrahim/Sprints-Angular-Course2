import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/image.service';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: '.app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {} as Product;

  constructor(private cartService: CartService,public imageService:ImageService) {}

  ngOnInit(): void {}
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(this.cartService.order);
  }

  addToLiked(product: Product) {}
}
