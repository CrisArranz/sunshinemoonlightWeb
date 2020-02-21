import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(private db: AngularFirestore) { }

  getAllOptions() {
    return this.db.collection('SML_Options').valueChanges();
  }
}
