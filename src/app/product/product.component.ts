import { Component, Input } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input('product') product: Product;

  constructor() {
    this.product = new Product("","","",0);
  }
  
  buy() {
    
  }
}
