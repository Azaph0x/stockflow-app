import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { combineLatest, take, tap } from 'rxjs';
import { CategoryProduct } from 'src/app/models/categoryProduct.model';
import { Product } from 'src/app/models/product.model';
import { CategoryProductService } from 'src/app/services/category-product/category-product.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  standalone: false
})
export class EditProductComponent  implements OnInit {

  constructor(
    private productService: ProductService,
    private CategoriesProducts: CategoryProductService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private toastService: ToastService
  ) { }

  form!: FormGroup;
  options: CategoryProduct[] = [];
  product!: Product;

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(!params['id']) {
      this.navCtrl.navigateRoot(['tabs', 'products']);
      return;
    }
    this.form = new FormGroup({
      name: new FormControl('', [Validators.minLength(2), Validators.required]),
      description: new FormControl(''),
      barCode: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
      unitPrice: new FormControl('', [Validators.required])
    })

    this.load(params);
  }

  load(params: Params) {
    const id = Number(params['id']);
    if(!id) return;
    combineLatest([
      this.CategoriesProducts.getCategory(),
      this.productService.getProductById(id)
    ]).pipe(
      take(1),
      tap(([categories, product]) => {
        this.options = categories;
        this.product = product;
        this.form.patchValue({ ...product })
        console.log(product, this.form.value)
      })
    ).subscribe()
  }

  getControl(controlName: string) {
    return this.form.controls[controlName] as any;
  }

  submit() {
    if(this.form.invalid) return;
    this.productService.updateProduct({
      ...this.product,
      ...this.form.value
    }).pipe(
      tap(() => {
        this.toastService.create('Produto editado com sucesso!')
        this.navCtrl.navigateRoot(['tabs', 'products'])
      })
    ).subscribe()
  }

}
