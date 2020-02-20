import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  listProducts: any;
  countProducts: number;
  product: Array<any>;
  x: number;
  z: number;

  constructor(public productService: ProductsService) { }

  ngOnInit() {
    this.getAllProducts();
    this.productService.getAllProducts().subscribe(res => (this.countProducts = res.length));
  }

  getAllProducts = () =>
    this.productService
      .getAllProducts()
      .subscribe(res => (this.listProducts = res))


  filterProducts(value: string, idChecked: boolean) {
    console.log(value + idChecked);
  }

  orderProducts(value: string) {
    for (this.x = 0; this.x < this.listProducts.length - 1; this.x++) {
      for (this.z = 0; this.z < this.listProducts.length - this.x - 1; this.z++) {
        switch (value) {
          case 'name-asc':
            if (this.listProducts[this.z].name > this.listProducts[this.z + 1].name) {
              this.product = this.listProducts[this.z];
              this.listProducts[this.z] = this.listProducts[this.z + 1];
              this.listProducts[this.z + 1] = this.product;
            }
            break;
          case 'name-desc':
            if (this.listProducts[this.z].name < this.listProducts[this.z + 1].name) {
              this.product = this.listProducts[this.z];
              this.listProducts[this.z] = this.listProducts[this.z + 1];
              this.listProducts[this.z + 1] = this.product;
            }
            break;
          case 'price-low':
            if (this.listProducts[this.z].price > this.listProducts[this.z + 1].price) {
              this.product = this.listProducts[this.z];
              this.listProducts[this.z] = this.listProducts[this.z + 1];
              this.listProducts[this.z + 1] = this.product;
            }
            break;
          case 'price-high':
            if (this.listProducts[this.z].price < this.listProducts[this.z + 1].price) {
              this.product = this.listProducts[this.z];
              this.listProducts[this.z] = this.listProducts[this.z + 1];
              this.listProducts[this.z + 1] = this.product;
            }
            break;
          default:
            break;
        }
      }
    }
  }
}
