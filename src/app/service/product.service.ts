import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../products/product.model';

@Injectable()
export class ProductService {

    constructor(private httpClient: HttpClient, ) {}
    
    products!: Product[];
    subject = new Subject<Product>();

    getProducts() {
        
        console.log("getProducts");
        this.httpClient.get<any>('http://localhost:4000/products').subscribe(
            response => {
                this.products = response;

                console.log("response=", response, this.products);
                this.subject.next(response);
            }

        );
        console.log("products=", this.subject.asObservable(), this.subject);
        return this.products;
    }

    productSelected = new EventEmitter<Product>();

    
}