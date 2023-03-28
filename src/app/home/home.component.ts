import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productService : ProductService;
  products: Product[]

  constructor(productService: ProductService) {
    this.productService = productService;
    this.products = [];

    let productsObservable = this.productService.getProducts();
    productsObservable.subscribe(
      (response) => {
        this.productService.getProductsResponse(response);
        this.products = this.productService.products;
      },
      (error) => {
        this.productService.getProductsError(error);
      }
    );
  }
}
