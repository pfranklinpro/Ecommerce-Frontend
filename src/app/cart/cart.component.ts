import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../model/product';
import { ProductService } from '../product.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  router: Router;
  authService: AuthService;
  cartService: CartService;
  products: Product[];
  totalPrice: Number;
  token: string;

  constructor(activatedRoute: ActivatedRoute, productService: ProductService, cartService: CartService, authService: AuthService, router: Router) {
    this.router = router;
    this.authService = authService;
    this.cartService = cartService;
    this.products = [];
    this.products = cartService.products;

    let productId = activatedRoute.snapshot.params["productId"];
    let product = productService.getProductById(productId);

    cartService.addToCart(product);
    this.products = cartService.products;

    this.totalPrice = cartService.totalPrice();

    this.token = this.authService.auth.token;
  }

  onSubmit(form: NgForm) {
    this.cartService.order(this.totalPrice, this.token).subscribe(
      (response: any) => {
        this.products = [];
        this.cartService.clearCart();
        this.totalPrice = this.cartService.totalPrice();
        this.router.navigateByUrl("/");
      },
      (error) => {console.log(error)}
      );
  }
}
