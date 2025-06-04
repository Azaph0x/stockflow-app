import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Movement } from 'src/app/models/movement.model';
import { Product } from 'src/app/models/product.model';
import { MovementService } from 'src/app/services/movement/movement.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'home-list-segment',
  templateUrl: './list-segment.component.html',
  styleUrls: ['./list-segment.component.scss'],
  standalone: false
})
export class ListSegmentComponent  implements OnInit {

  segment: string = 'products';
  products$!: Observable<Product[]>;
  movements$!: Observable<Movement[]>;


  constructor(
    private productService: ProductService,
    private movementService: MovementService
  ) { }

  ngOnInit() {
    this.products$ = this.productService.getProduct()
    this.movements$ = this.movementService.getMoviments();
  }

}
