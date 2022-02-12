import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable()
export class ProductService {

    constructor(private httpClient: HttpClient, ) {}
    
    products!: Product[];

    getProducts() {
        
        console.log("getProducts");
        this.httpClient.get<any>('http://localhost:4000/products').subscribe(
            response => {
                this.products = response;
                console.log("response=", response, this.products);
            }

        );
        console.log("products=", this.products);
    }

    productSelected = new EventEmitter<Product>();

    
}