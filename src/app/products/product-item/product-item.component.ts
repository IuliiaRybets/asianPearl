import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
  }

  onSelect() {
    this.productService.productSelected.emit(this.product);
  }
}
