import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  productSelected: Product | undefined;

  constructor(private productService: ProductService) { }

  product_id: number | undefined;

  ngOnInit(): void {
    this.productService.productSelected.subscribe(
      (product: Product) => this.productSelected = product
    )
  }

}
