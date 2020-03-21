import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../../services/products/products.service';
import { Product } from '../../../models/products/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productDetail: Product = new Product();
  selectedImage = 0;

  constructor(private productService: ProductsService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct().then(
      (product: any) => {
        this.productDetail.artist = product[0].artist;
        this.productDetail.description = product[0].description;
        this.productDetail.name = product[0].name;
        this.productDetail.picture = product[0].picture;
        this.productDetail.pictures = product[0].pictures;
        this.productDetail.price = product[0].price;
        this.productDetail.type = product[0].type;
        console.log(this.productDetail.pictures[0]);
      }).catch((err) => {
        console.log('Error', err);
      });
  }

  getProduct = () => {
    return new Promise((resolve, reject) => {
      this.productService
        .getProduct(this.activeRoute.snapshot.params.name)
        .subscribe(res => {
          if (res === null) {
            reject('Ha ocurrido un error en productService');
          }
          resolve(res);
        });
    });
  }

  changeSelectedImage(selectedImage: number) {
    this.selectedImage = selectedImage;
  }

}
