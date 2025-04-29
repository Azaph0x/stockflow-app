import { Injectable } from '@angular/core';
import { CategoryProductService } from './category-product.service';
import { Observable, of } from 'rxjs';
import { CategoryProduct } from 'src/app/models/categoryProduct.model';

@Injectable()
export class CategoryProductMockService extends CategoryProductService {

  actualDate = new Date();

  productCategories: CategoryProduct[] = [
    { id: 1, name: "Eletrônicos", description: '', updatedAt: this.actualDate, createdAt: this.actualDate },
    { id: 2, name: "Vestuário", description: '', updatedAt: this.actualDate, createdAt: this.actualDate },
    { id: 3, name: "Alimentos", description: '', updatedAt: this.actualDate, createdAt: this.actualDate },
    { id: 4, name: "Móveis", description: '', updatedAt: this.actualDate, createdAt: this.actualDate },
    { id: 5, name: "Esportes", description: '', updatedAt: this.actualDate, createdAt: this.actualDate },
    { id: 6, name: "Livros", description: '', updatedAt: this.actualDate, createdAt: this.actualDate },
    { id: 7, name: "Beleza", description: '', updatedAt: this.actualDate, createdAt: this.actualDate },
    { id: 8, name: "Brinquedos", description: '', updatedAt: this.actualDate, createdAt: this.actualDate },
    { id: 9, name: "Ferramentas", description: '', updatedAt: this.actualDate, createdAt: this.actualDate },
    { id: 10, name: "Automotivo", description: '', updatedAt: this.actualDate, createdAt: this.actualDate }
  ];


  constructor() { super(); }

  public getCategory(): Observable<CategoryProduct[]> {
    return of(this.productCategories)
  }

}
