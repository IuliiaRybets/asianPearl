import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductList } from './products/productlist.component';
import { ProductdetailComponent } from './products/productdetail/productdetail.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductList,
    ProductdetailComponent,
    ProductItemComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
