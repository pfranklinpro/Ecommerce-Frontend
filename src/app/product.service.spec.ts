import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let response: Object[] = [];
  response.push({
    productId: "First Id",
    productName: "First Product",
    productDescription: "First Product Description",
    productPrice: 1.00
  });
  response.push({
    productId: "Second Id",
    productName: "Second Product",
    productDescription: "Second Product Description",
    productPrice: 1.01
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient, HttpHandler ]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have as getProductsResponse products.length 2', () => {
    service.getProductsResponse(response);
    expect(service.products.length).toBe(2);
  });

  it('should have as getProductsResponse products.length 0', () => {
    expect(service.products.length).toBe(0);
  });

  it('should have as getProductById productId "First Id"', () => {
    service.getProductsResponse(response);
    expect(service.getProductById("First Id").productId).toBe("First Id");
  });

  it('should have as getProductById productName "First Product"', () => {
    service.getProductsResponse(response);
    expect(service.getProductById("First Id").productName).toBe("First Product");
  });

  it('should have as getProductById productDescription "First Product Description"', () => {
    service.getProductsResponse(response);
    expect(service.getProductById("First Id").productDescription).toBe("First Product Description");
  });

  it('should have as getProductById productPrice 1.00', () => {
    service.getProductsResponse(response);
    expect(service.getProductById("First Id").productPrice).toBe(1.00);
  });
});
