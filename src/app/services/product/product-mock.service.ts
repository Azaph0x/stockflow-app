import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { delay, Observable, of, tap } from 'rxjs';
import { ProductDTO, Product } from 'src/app/models/product.model';
import { STORAGE_KEYS, StorageService } from '../storage.service';

@Injectable()
export class ProductMockService extends ProductService {

  constructor(
    private storageService: StorageService
  ) { super(); }

  products: Product[] = [];

  loadProducts(): Observable<Product[]> {
    return this.storageService.getProducts();
  }

  public createProduct(product: ProductDTO): Observable<Product> {
    const newObg = {
      id: this.products.length + 1,
      categoryId: product.categoryId,
      barCode: product.barCode,
      description: product.description,
      name: product.name,
      unitPrice: product.unitPrice,
      isActivated: true,
      createdAt: new Date().toISOString(),
      stockQuantity: 0
    } as Product;

    this.products.push(newObg);
    this.storageService.saveProduct(newObg);

    return of(newObg);
  }

  public getProduct(): Observable<Product[]> {
    return this.storageService.getProducts().pipe(
      tap((r) => this.products = r)
    );
  }

  public getProductById(id: number): Observable<any> {
    const product = this.products.find(p => p.id == id);
    if(product) return of(product);
    return of({
      error: 'Product not found'
    })
  }

  public updateProduct(product: Product): Observable<any> {
    const findIndex = this.products.findIndex(p => p.id == product.id);
    if(findIndex == -1) return of({ error: 'Product not found' })
    const newProduct = {
      ...this.products[findIndex]!,
      ...product,
    }
    this.products[findIndex] = newProduct;
    return this.storageService.updateProduct(product)
  }

  public removeProduct(id: number): Observable<any> {
    this.products = this.products.filter((p) => p.id != id)
    return this.storageService.removeProduct(id)
  }
}
