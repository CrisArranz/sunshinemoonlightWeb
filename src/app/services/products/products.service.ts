import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFirestore) { }

  getAllProducts() {
    return this.db.collection('SML_Products').valueChanges();
  }

  getProduct(id: string) {
    return this.db.collection('SML_Products', ref => ref.where('name', '==', id)).valueChanges();
  }
}
