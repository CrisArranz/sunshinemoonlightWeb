import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  urlImage: string;
  selectedImage: number;

  constructor() { }

  ngOnInit() {
    this.urlImage = '../../../assets/EMxBM-3U8AAJ1c8.jpg';
    this.selectedImage = 1;
  }

  loadImage(urlImg: string, selectedImage: number){
    this.urlImage = urlImg;
    this.selectedImage = selectedImage;
  }

}
