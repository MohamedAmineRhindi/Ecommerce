import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  getCart() {
    return this.productService.cart;
  }

  getNumberOfitems() {
    return this.productService.cart.reduce((prev, curr) => prev + curr.quantity,0);
  }

  getTotal() {
    return this.getCart().reduce((acc, curr) => acc + curr.product.price*curr.quantity, 0);
  }

  clearCart() {
    this.productService.clearCart();
  }

  ngOnInit(): void {
  }

}
