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
  productOptions = [];
  artistOptions = [];

  constructor(public productService: ProductsService, public optionService: OptionsService) { }

  ngOnInit() {
    this.getAllProducts()
      .then((products) => {
        this.listProducts = products;
        this.allProducts = products;
        this.countProducts = this.listProducts.length;
        this.orderProducts('name-asc');
        this.getAllOptions().then((options: Array<any>) => {
          this.productOptions = options.filter(e => e.option === 'type');
          this.artistOptions = options.filter(e => e.option === 'artist');
          this.orderOptions('options');
        });
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
    return new Promise((resolve, reject) => {
    this.optionService
      .getAllOptions()
      .subscribe((res: Array<any>) => {
        if (res === null) {
          reject('Ha ocurrido un error en optionService');
        }
        resolve(res);
      });
    });
  }

  orderProducts(value: string) {
    this.listProducts = this.order(this.listProducts, value);
  }
  orderOptions(value: string) {
    this.productOptions = this.order(this.productOptions, value);
    this.artistOptions = this.order(this.artistOptions, value);
  }

  delFilters() {
    for (let x = 0; x < this.productOptions.length; x++){
      this.productOptions[x].checked = false;
    }
    for (let x = 0; x < this.artistOptions.length; x++) {
      this.artistOptions[x].checked = false;
    }

    this.checked();
  }

  order(array: Array<any>, value: string) {
    let product: Array<any>;
    for (let x = 0; x < array.length - 1; x++) {
      for (let z = 0; z < array.length - x - 1; z++) {
        switch (value) {
          case 'name-asc':
            if (array[z].name > array[z + 1].name) {
              product = array[z];
              array[z] = array[z + 1];
              array[z + 1] = product;
            }
            break;
          case 'name-desc':
            if (array[z].name < array[z + 1].name) {
              product = array[z];
              array[z] = array[z + 1];
              array[z + 1] = product;
            }
            break;
          case 'price-low':
            if (array[z].price > array[z + 1].price) {
              product = array[z];
              array[z] = array[z + 1];
              array[z + 1] = product;
            }
            break;
          case 'price-high':
            if (array[z].price < array[z + 1].price) {
              product = array[z];
              array[z] = array[z + 1];
              array[z + 1] = product;
            }
            break;
          case 'options':
            if (array[z].value > array[z + 1].value) {
              product = array[z];
              array[z] = array[z + 1];
              array[z + 1] = product;
            }
            break;
          default:
            break;
        }
      }
    }

    return array;
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
