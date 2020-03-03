import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductListComponent },
  { path: "detail/:id", component: ProductDetailComponent },
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: "**", redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
