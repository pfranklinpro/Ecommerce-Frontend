import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[]
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;

    const products = window.sessionStorage.getItem("products");
    if (products !== null) {
      this.products = JSON.parse(products);
    }
    else {
      this.products = [];
    }
  }

  addToCart(product: Product) {
    this.products.push(product);
    window.sessionStorage.setItem("products", JSON.stringify(this.products));
  }

  totalPrice(): Number {
    let total = 0;

    for (let i = 0; i < this.products.length; i++) {
      let product = this.products[i];
      total = total + product.productPrice;
    }

    return total;
  }

  order(totalPrice: Number, token: string) {
    let url = "http://localhost:8080/orders";

    return this.http.post(url, {
      totalPrice: totalPrice
    },
    {
      // https://angular.io/guide/http
      headers: new HttpHeaders({
        'authorization': token
      })
    });
  }

  clearCart() {
    this.products = [];
    window.sessionStorage.removeItem("products");
  }
}
