import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Product } from './model/product';

describe('CartService', () => {
  let service: CartService;
  let products: Product[] = [];
  products.push(new Product("First Id", "First Product", "First Product Description", 1.00))
  products.push(new Product("Second Id", "Second Product", "Second Product Description", 1.01))

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient, HttpHandler ]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have as products.length 0', () => {
    expect(service.products.length).toBe(0);
  });

  it('should have as addToCart products.length 2', () => {
    service.addToCart(products[0]);
    service.addToCart(products[1]);
    expect(service.products.length).toBe(2);
    window.sessionStorage.removeItem("products")
  });

  it('should have as totalPrice 2.01', () => {
    service.addToCart(products[0]);
    service.addToCart(products[1]);
    expect(service.totalPrice()).toBe(2.01);
    window.sessionStorage.removeItem("products")
  });

  it('should have as clearCart products.length 0', () => {
    service.addToCart(products[0]);
    service.addToCart(products[1]);
    expect(service.products.length).toBe(2);
    service.clearCart();
    expect(service.products.length).toBe(0);
  });
});
