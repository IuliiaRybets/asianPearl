import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from './product.model';

@Component({
    selector: 'app-home',
    templateUrl: './productlist.component.html',
})

export class ProductList implements OnInit {
  products: Product[] | undefined;
  
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log("product page", this.products);
  }

}