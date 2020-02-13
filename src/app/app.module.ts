import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeddiesComponent } from './products/teddies/teddies.component';
import { SheetsComponent } from './products/sheets/sheets.component';
import { BadgesComponent } from './products/badges/badges.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TeddiesComponent,
    SheetsComponent,
    BadgesComponent,
    ProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
