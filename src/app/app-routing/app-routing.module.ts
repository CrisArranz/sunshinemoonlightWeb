import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from '../products/products/products.component';
import { ProductDetailComponent } from '../product-detail/product-detail/product-detail.component';

const appRoutes: Routes = [
    {path: 'products', component: ProductsComponent, pathMatch: 'prefix'},
    {path: 'product-detail/:id', component: ProductDetailComponent, pathMatch: 'prefix'},
    {path: '**', component: ProductsComponent, pathMatch: 'full'}
];

@NgModule({
    providers: [],
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }
