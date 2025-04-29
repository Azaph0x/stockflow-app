import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryProduct } from 'src/app/models/categoryProduct.model';

export abstract class CategoryProductService {

  public abstract getCategory(): Observable<CategoryProduct[]>;

}
