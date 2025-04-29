import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { CategoryProduct } from 'src/app/models/categoryProduct.model';
import { Product } from 'src/app/models/product.model';
import { CategoryProductService } from 'src/app/services/category-product/category-product.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'products-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeProductsComponent implements OnInit, OnDestroy {

  private categoryProductService: CategoryProductService = inject(CategoryProductService);
  private navCtrl: NavController = inject(NavController);
  private productService: ProductService = inject(ProductService);

  loading: boolean = false;

  categoriesProduct: CategoryProduct[] = [];

  subjectDestroy: Subject<any> = new Subject();

  products$!: Observable<Product[]>;

  ngOnInit() {
    this.categoryProductService.getCategory().pipe(
      takeUntil(this.subjectDestroy),
      tap((r) => {
        this.categoriesProduct = r;
      })
    ).subscribe()
    this.products$ = this.productService.getProduct().pipe(
      tap((r) => console.log(r))
    )
    // .pipe(
    //   tap((rr) => {
    //     this.loading = true;
    //   })
    // );
    // this.productService.getProduct()
    // .pipe(
    //   takeUntil(this.subjectDestroy),
    //   tap((r) => {
    //     this.products = r;
    //   })
    // ).subscribe()
  }

  ngOnDestroy(): void {
    this.subjectDestroy.next(0);
    this.subjectDestroy.complete();
  }

  createProduct() {
    this.navCtrl.navigateForward(['products', 'create']);
  }
}
