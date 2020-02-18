import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsList: any;

  constructor(public productService: ProductsService) { }

  ngOnInit() {
    this.getAllProducts('name', 'asc');
  }

  getAllProducts = (orderBy: string, direction: string) =>
    this.productService
      .getAllProducts(orderBy, direction)
      .subscribe(res => (this.productsList = res))

}
