import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/types';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() product: Product | undefined;

  constructor(private productService: ProductsService) { }

  addToCart(product: Product | undefined) {
    this.productService.addToCart(product);
  }

  trimTitle(title: string | undefined) {
    if(!title) return "";
    return title.length > 10 ? title.substring(0, 10) + '...' : title;
  }

  ngOnInit(): void {
  }

}
