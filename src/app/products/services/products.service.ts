import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
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

  addProduct(product: ProductsModel): Promise<any> {
    return this.firestore.collection('products').add(product);
  }

  editProduct(product: ProductsModel): Promise<any> {
    return this.firestore.collection('products').doc(product.id).update(product);
  }

  deleteProduct(id: string): Promise<any> {
    return this.firestore.collection('products').doc(id).delete();
  }
}
