import { Component, Input, OnInit } from '@angular/core';
import { PriceRange } from 'src/app/interfaces/price-range';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: '.app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css'],
})
export class ShopProductsComponent implements OnInit {
  @Input() sizes: Array<string> = [];
  @Input() colors: Array<string> = [];
  @Input() priceRange: Array<PriceRange> = [];
  @Input() page: number = 0;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  getProducts(): Array<Product> {
    return this.productService.getProductsWithFilter(
      this.sizes,
      this.colors,
      this.priceRange,
      this.page
    );
  }
}
