import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductList} from './products/productlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductList }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
