import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { ProductsModel } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  response$ = new BehaviorSubject(null);

  constructor(private firestore: AngularFirestore) { }

  getProducts(): Observable<any> {
    return this.firestore.collection('products').snapshotChanges();
  }

  addProduct(product: ProductsModel): Observable<any> {
    return from(this.firestore.collection('products').add(product));
  }

  editProduct(product: ProductsModel): Observable<any> {
    return from(this.firestore.collection('products').doc(product.id).update(product));
  }

  deleteProduct(id: string): Promise<any> {
    return this.firestore.collection('products').doc(id).delete();
  }
}
