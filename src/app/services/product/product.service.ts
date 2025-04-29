import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDTO } from 'src/app/models/product.model';

export abstract class ProductService {

  public abstract loadProducts(): Observable<Product[]>;

  public abstract getProduct(): Observable<Product[]>;
  public abstract createProduct(product: ProductDTO): Observable<Product>;
  public abstract getProductById(id: number): Observable<any>;
  public abstract updateProduct(product: Product): Observable<any>;
  public abstract removeProduct(id: number): Observable<any>;

}
