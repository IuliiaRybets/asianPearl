import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// the format of the expected response
export class Product {
  constructor(
    public name: string,
    public ingredients: string,
    public aroma: string,
    public functionality: string
  ){}
}

@Component({
    selector: 'app-home',
    templateUrl: './productlist.component.html',
})

export class ProductList implements OnInit {
  products: Product[] = [];
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    console.log("product page", this.getProducts());
  }

  getProducts() {
    console.log("getProducts");
    this.httpClient.get<any>('api/products').subscribe(
      response => {
        console.log(response);
        this.products = response;
      }
    );
  }
}