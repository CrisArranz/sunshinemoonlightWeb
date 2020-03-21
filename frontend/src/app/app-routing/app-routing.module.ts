import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from '../components/products/products/products.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail/product-detail.component';

const appRoutes: Routes = [
    {path: 'products', component: ProductsComponent, pathMatch: 'prefix'},
    {path: 'product-detail/:name', component: ProductDetailComponent, pathMatch: 'prefix'},
    {path: '', redirectTo: 'products', pathMatch: 'full'}
];

@NgModule({
    providers: [],
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }
