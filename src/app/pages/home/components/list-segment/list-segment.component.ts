import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'home-list-segment',
  templateUrl: './list-segment.component.html',
  styleUrls: ['./list-segment.component.scss'],
  standalone: false
})
export class ListSegmentComponent  implements OnInit {

  segment: string = 'products';
  products!: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProduct()
    .pipe(
      tap((r) => this.products = r)
    )
    .subscribe()
  }

}
