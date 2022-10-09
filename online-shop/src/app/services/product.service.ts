import { Injectable } from '@angular/core';
import { PriceRange } from '../interfaces/price-range';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Array<Product> = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      discount: 0.1,
      imageUrl: 'assets/img/product-1.jpg',
      rating: 5,
      ratingCount: 10,
      color: 'black',
      size: 's',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 150,
      discount: 0.2,
      imageUrl: 'assets/img/product-2.jpg',
      rating: 4,
      ratingCount: 150,
      color: 'white',
      size: 'm',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 100,
      discount: 0.1,
      imageUrl: 'assets/img/product-1.jpg',
      rating: 5,
      ratingCount: 10,
      color: 'black',
      size: 's',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 150,
      discount: 0.2,
      imageUrl: 'assets/img/product-2.jpg',
      rating: 4,
      ratingCount: 150,
      color: 'white',
      size: 'm',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 100,
      discount: 0.1,
      imageUrl: 'assets/img/product-1.jpg',
      rating: 5,
      ratingCount: 10,
      color: 'black',
      size: 's',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 150,
      discount: 0.2,
      imageUrl: 'assets/img/product-2.jpg',
      rating: 4,
      ratingCount: 150,
      color: 'white',
      size: 'm',
    },
    {
      id: 7,
      name: 'Product 7',
      price: 100,
      discount: 0.1,
      imageUrl: 'assets/img/product-1.jpg',
      rating: 5,
      ratingCount: 10,
      color: 'black',
      size: 's',
    },
    {
      id: 8,
      name: 'Product 8',
      price: 150,
      discount: 0.2,
      imageUrl: 'assets/img/product-2.jpg',
      rating: 4,
      ratingCount: 150,
      color: 'white',
      size: 'm',
    },
    {
      id: 9,
      name: 'Product 9',
      price: 100,
      discount: 0.1,
      imageUrl: 'assets/img/product-1.jpg',
      rating: 5,
      ratingCount: 10,
      color: 'black',
      size: 's',
    },
    {
      id: 10,
      name: 'Product 10',
      price: 150,
      discount: 0.2,
      imageUrl: 'assets/img/product-2.jpg',
      rating: 4,
      ratingCount: 150,
      color: 'white',
      size: 'm',
    },
    {
      id: 11,
      name: 'Product 11',
      price: 100,
      discount: 0.1,
      imageUrl: 'assets/img/product-1.jpg',
      rating: 5,
      ratingCount: 10,
      color: 'black',
      size: 's',
    },
    {
      id: 12,
      name: 'Product 12',
      price: 150,
      discount: 0.2,
      imageUrl: 'assets/img/product-2.jpg',
      rating: 4,
      ratingCount: 150,
      color: 'white',
      size: 'm',
    },
  ];

  constructor() {}
  getFeaturedProducts(): Array<Product> {
    return this.products;
  }

  getProductsWithFilter(
    sizes: Array<string>,
    colors: Array<string>,
    priceRanges: Array<PriceRange>,
    page: number = 0,
    pageSize: number = 9
  ) {
    let products = this.products.filter((x) => {
      return (
        this.filterSize(sizes, x) &&
        this.filterColor(colors, x) &&
        this.filterPrices(priceRanges, x)
      );
    });
    return products.slice(page * pageSize, page * pageSize + pageSize);
  }

  getProductsCountWithFilter(
    sizes: Array<string>,
    colors: Array<string>,
    priceRanges: Array<PriceRange>
  ): number {
    let products = this.products.filter((x) => {
      return (
        this.filterSize(sizes, x) &&
        this.filterColor(colors, x) &&
        this.filterPrices(priceRanges, x)
      );
    });
    return products.length;
  }

  filterSize(sizes: Array<string>, product: Product): boolean {
    if (sizes.length == 0) return true;
    return sizes.includes(product.size) || sizes.includes('');
  }
  filterColor(colors: Array<string>, product: Product): boolean {
    if (colors.length == 0) return true;
    return colors.includes(product.color) || colors.includes('');
  }
  filterPrices(priceRanges: Array<PriceRange>, product: Product): boolean {
    if (priceRanges.length == 0) return true;
    for (let i = 0; i < priceRanges.length; i++)
      if (
        (priceRanges[i].min <= product.price &&
          priceRanges[i].max >= product.price) ||
        (priceRanges[i].min == 0 && priceRanges[i].max == 0)
      )
        return true;
    return false;
  }
}
