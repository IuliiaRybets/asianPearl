import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })


  export class ProductsService {
    constructor ( private readonly _httpClient: HttpClient ) {}


    public getProductsValue(): Observable<[]> {
        console.log("service is called ", environment.api_base);
        return this._httpClient.get<[]>(`${environment.api_base}/products`);
    } 
  }