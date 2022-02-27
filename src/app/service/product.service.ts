import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../products/product.model';

@Injectable()
export class ProductService {
    private readonly subject = new BehaviorSubject<Product[]>([]);
    productSelected = new EventEmitter<Product>();

    constructor(private readonly httpClient: HttpClient) {}
    

    // public async getProducts(): Promise<Product[]> {
    public getProducts(): BehaviorSubject<Product[]> {
        console.log("getProducts");

        this.httpClient.get<any>('/api/products').subscribe(
            response => {
                console.log("response=", response);

                this.subject.next(response);
            }
        );
        
        // const resp = await this.httpClient.get<any>('http://localhost:4000/products').toPromise();
        // return resp.
        console.log("product.service.ts: getProducts=", this.subject)
        return this.subject;
    }

    // public getProductById(id)
}