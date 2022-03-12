import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../products/product.model';
import { sortOrders } from '../shared/shared.model';

@Injectable()
export class ProductService {
    private readonly subject = new BehaviorSubject<Product[]>([]);
    productSelected = new EventEmitter<Product>();
    private readonly sort = new BehaviorSubject<sortOrders>({} as any);

    constructor(private readonly httpClient: HttpClient) { }


    // public async getProducts(): Promise<Product[]> {
    public getProducts(): BehaviorSubject<Product[]> {
        this.httpClient.get<any>('http://localhost:1337/api/products?populate=media').subscribe(
            response => {
                console.log("response=", response.data);
                this.subject.next(response.data);
            }
        );

        // const resp = await this.httpClient.get<any>('http://localhost:4000/products').toPromise();
        return this.subject;
    }

    // public getProductById(id)

    public sortProducts(): BehaviorSubject<sortOrders> {
        console.log("sortProducts");

        this.httpClient.get<sortOrders>('http://localhost:1337/api/sortCategorie').subscribe(
            (response: sortOrders) => {
                console.log("response=", response);

                this.sort.next(response);
            }
        );
        return this.sort;
    }
}