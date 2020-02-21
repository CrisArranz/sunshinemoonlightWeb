import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { OptionsService } from '../../../services/options/options.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  listProducts: any;
  allProducts: any;
  countProducts: number;
  product: Array<any>;
  productOptions = [];
  artistOptions = [];

  constructor(public productService: ProductsService, public optionService: OptionsService) { }

  ngOnInit() {
    this.getAllProducts()
      .then((products) => {
        this.listProducts = products;
        this.allProducts = products;
        this.orderProducts('name-asc');
        this.getAllOptions();
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  getAllProducts = () => {
    return new Promise((resolve, reject) => {
      this.productService
        .getAllProducts()
        .subscribe(res => {
          if (res === null) {
            reject('Ha ocurrido un error en productService');
          }
          resolve(res);
        });
    });
  }

  getAllOptions = () => {
    this.optionService
      .getAllOptions()
      .subscribe((res: Array<any>) => {
        this.productOptions = res.filter(e => e.option === 'type');
        this.artistOptions = res.filter(e => e.option === 'artist');
      });
  }

  orderProducts(value: string) {
    for (let x = 0; x < this.listProducts.length - 1; x++) {
      for (let z = 0; z < this.listProducts.length - x - 1; z++) {
        switch (value) {
          case 'name-asc':
            if (this.listProducts[z].name > this.listProducts[z + 1].name) {
              this.product = this.listProducts[z];
              this.listProducts[z] = this.listProducts[z + 1];
              this.listProducts[z + 1] = this.product;
            }
            break;
          case 'name-desc':
            if (this.listProducts[z].name < this.listProducts[z + 1].name) {
              this.product = this.listProducts[z];
              this.listProducts[z] = this.listProducts[z + 1];
              this.listProducts[z + 1] = this.product;
            }
            break;
          case 'price-low':
            if (this.listProducts[z].price > this.listProducts[z + 1].price) {
              this.product = this.listProducts[z];
              this.listProducts[z] = this.listProducts[z + 1];
              this.listProducts[z + 1] = this.product;
            }
            break;
          case 'price-high':
            if (this.listProducts[z].price < this.listProducts[z + 1].price) {
              this.product = this.listProducts[z];
              this.listProducts[z] = this.listProducts[z + 1];
              this.listProducts[z + 1] = this.product;
            }
            break;
          default:
            break;
        }
      }
    }
  }

  checked() {
    const optionsChecked = [];
    for (let i = 0; i < this.productOptions.length; i++) {
      if (this.productOptions[i].checked) {
        optionsChecked.push((this.productOptions[i].name));
      }
    }
    for (let i = 0; i < this.artistOptions.length; i++) {
      if (this.artistOptions[i].checked) {
        optionsChecked.push((this.artistOptions[i].name));
      }
    }
    this.listProducts = this.allProducts.filter(product => (optionsChecked.includes(product.type) || optionsChecked.includes(product.artist)));
    this.countProducts = this.listProducts.length;
  }
}
