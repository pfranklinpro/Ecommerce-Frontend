import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http: HttpClient;
  products: Product[]

  constructor(http: HttpClient) {
    this.http = http;
    this.products = [];
  }

  getProducts() {
    let url = "http://localhost:8080/products";

    return this.http.get(url);
  }

  getProductsResponse(response: any) {
    this.products = [];
    for (let i = 0; i < response.length; i++) {
      let element = response[i];
      let product = new Product(element.productId, element.productName, element.productDescription, element.productPrice);
      this.products.push(product);
    }
  }

  getProductsError(error: any) {
    console.log(error)
  }

  getProductById(productId: string): Product {
    for (let i = 0; i < this.products.length; i++) {
      let product = this.products[i];
      if (product.productId === productId) {
        return product;
      }
    }
    throw "Not Found";
  }
}
