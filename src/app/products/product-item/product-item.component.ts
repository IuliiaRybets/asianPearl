import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../product.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined;
  url: any | undefined

  constructor(private readonly productService: ProductService) {    
  }

  ngOnInit(): void {
    if(this.product){
      this.product
      // console.log(this.product?.attributes?.media?.pop)
      Object.keys(this.product?.attributes?.media).map(
        (img: any)=> 
        {console.log("img", img)});
    } else {
      console.log("ERROR: no product is passed to product-item.component.ts")
    }  
  }

  onSelect() {
    console.log("click", this.product)
    this.productService.productSelected.emit(this.product);
  }
}
