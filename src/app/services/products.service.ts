import { Injectable } from '@angular/core';
import { products } from '../products';
import { Product } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  myproducts = products;
  cart: any[] = [];


  addToCart(toAddProduct: Product | undefined) {
    if (!toAddProduct) return;

    if (this.cart.filter(product => product.product.id === toAddProduct.id).length === 0) {
      this.cart.push({ product: toAddProduct, quantity: 1 });
    } else {
      this.cart = this.cart.map(product => {
        if (product.product.id === toAddProduct.id) {
          return { product: toAddProduct, quantity: product.quantity + 1 }
        } else {
          return product
        }
      })
    }
  }

  clearCart() {
    this.cart = [];
  }

  constructor() { }


}

