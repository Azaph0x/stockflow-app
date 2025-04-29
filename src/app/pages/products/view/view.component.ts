import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { tap } from 'rxjs';
import { Movement, MOVEMENT_TYPE } from 'src/app/models/movement.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  standalone: false
})
export class ViewProductComponent  implements OnInit {

  product!: Product;

  movementMock: Movement = {
    createdAt: new Date().toISOString(),
    dateValidate: '10/02/2025',
    movementDate: '10/02/2025',
    type: MOVEMENT_TYPE.ENTRY,
    id: 1,
    productId: 1,
    quantity: 10,
    unitValue: 1000,
    totalValue: (1000 * 10),
  }

  movementMockLeave: Movement = { ...this.movementMock, type: MOVEMENT_TYPE.LEAVE }

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(!params['id']) {
      this.navCtrl.navigateRoot(['tabs', 'products']);
      return;
    }
    this.productService.getProductById(Number(params['id'])).pipe(tap((r) => {
      this.product = r;
    })).subscribe()

  }

}
