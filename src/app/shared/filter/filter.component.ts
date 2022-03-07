import { Component, OnInit } from '@angular/core';
import { sortOrders } from '../shared.model';
import { ProductService } from '../../service/product.service';
import { async } from '@angular/core/testing';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: []
  })
  export class FilterComponent implements OnInit {
  
    sortOrders: sortOrders | undefined;
    selectedSortOrder: string = "Sort by...";
    namesSort: string[] | undefined;

    constructor(private productService: ProductService) { }
  
    ngOnInit(): void {
      this.productService.sortProducts().subscribe( async ( nameSort ) =>
      {
       await nameSort;
       this.namesSort = nameSort.nameSort;
      
      });

      console.log("nameSort", this.sortOrders);

    }
  
    changeSortOrder(newSortOrder: string) { 
        this.selectedSortOrder = newSortOrder;
    }
   
   
  }
  