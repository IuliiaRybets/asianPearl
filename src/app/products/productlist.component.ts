import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/product.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-home',
    templateUrl: './productlist.component.html',
})

export class ProductList implements OnInit {
  
  products!: Observable<[]>;

  constructor( private readonly productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProductsValue();

    console.log("this.products", this.products.subscribe(async (value) => {
      return value;
    }));

  }

}
  