import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Product } from '../models/product.model';
import { BehaviorSubject, from, Observable, tap, catchError, of, switchMap, map } from 'rxjs';

export enum STORAGE_KEYS {
  PRODUCTS = 'products',
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage!: Storage;
  private _products = new BehaviorSubject<Product[]>([]);
  readonly products$ = this._products.asObservable();

  constructor(private storage: Storage) {}

  init(): Observable<void> {
    return from(this.storage.create()).pipe(
      tap(storage => this._storage = storage),
      switchMap(() => this.loadProducts()),
      catchError(error => {
        console.error('Failed to initialize storage:', error);
        return of(void 0);
      })
    );
  }

  private loadProducts(): Observable<void> {
    return this.get<Product[]>(STORAGE_KEYS.PRODUCTS).pipe(
      tap(products => {
        this._products.next(products ?? [])
        console.log(products ?? []);
      }),
      map(() => void 0),
      catchError(error => {
        console.error('Failed to load products:', error);
        this._products.next([]);
        return of(void 0);
      })
    );
  }

  private get<T>(key: string): Observable<T> {
    return from(this._storage.get(key));
  }

  private set<T>(key: string, value: T): Observable<void> {
    return from(this._storage.set(key, value));
  }

  saveProduct(product: Product): Observable<void> {
    const currentProducts = this._products.value;
    const updatedProducts = [...currentProducts, product];

    return this.set(STORAGE_KEYS.PRODUCTS, updatedProducts).pipe(
      tap(() => this._products.next(updatedProducts)),
      catchError(error => {
        console.error('Failed to save product:', error);
        throw error;
      })
    );
  }

  updateProduct(product: Product): Observable<void> {
    const currentProducts = this._products.value;
    const index = currentProducts.findIndex(p => p.id === product.id);

    if (index === -1) {
      return of(void 0);
    }

    const updatedProducts = [...currentProducts];
    updatedProducts[index] = { ...updatedProducts[index], ...product };

    return this.set(STORAGE_KEYS.PRODUCTS, updatedProducts).pipe(
      tap(() => this._products.next(updatedProducts)),
      catchError(error => {
        console.error('Failed to update product:', error);
        throw error;
      })
    );
  }

  removeProduct(id: number): Observable<void> {
    const currentProducts = this._products.value;
    const updatedProducts = currentProducts.filter(p => p.id !== id);

    return this.set(STORAGE_KEYS.PRODUCTS, updatedProducts).pipe(
      tap(() => this._products.next(updatedProducts)),
      catchError(error => {
        console.error('Failed to remove product:', error);
        throw error;
      })
    );
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }
}
