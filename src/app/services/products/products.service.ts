import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: AngularFirestore) { }

  getAllProducts(orderBy: string, direction: string) {
    if (direction === 'desc'){
      return this.firestore.collection('SML_Products', ref => ref.orderBy(orderBy, 'desc')).snapshotChanges();
    } else {
      return this.firestore.collection('SML_Products', ref => ref.orderBy(orderBy, 'asc')).snapshotChanges();
    }
  }
}
