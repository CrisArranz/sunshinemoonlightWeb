import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  listProducts: any;
  countProducts: number;

  constructor(public productService: ProductsService) { }

  ngOnInit() {
    this.getAllProducts('name', 'asc');
    this.productService.getCountProducts().subscribe(res => (this.countProducts = res.length));
  }

  orderProducts(value: string) {
    switch(value) {
      case 'name-asc':
        this.getAllProducts('name', 'asc');
        break;
      case 'name-desc':
        this.getAllProducts('name', 'desc');
        break;
      case 'price-low':
        this.getAllProducts('price', 'asc');
        break;
      case 'price-high':
        this.getAllProducts('price', 'desc');
        break;
      default:
        break;
    }
  }

  getAllProducts = (orderBy: string, direction: string) =>
    this.productService
      .getAllProducts(orderBy, direction)
      .subscribe(res => (this.listProducts = res))

}
