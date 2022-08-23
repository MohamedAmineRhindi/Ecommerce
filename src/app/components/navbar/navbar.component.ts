import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  getNumberOfItems() {
    return this.productService.cart.reduce((prev, curr) => prev + curr.quantity,0);
  }

  ngOnInit(): void {
  }

}
