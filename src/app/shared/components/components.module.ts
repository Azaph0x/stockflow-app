import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { ItemProductComponent } from './item-product/item-product.component';
import { ItemProductSkeletonComponent } from './item-product-skeleton/item-product-skeleton.component';
import { ItemMovementComponent } from './item-movement/item-movement.component';
import { IonicMaskDirective } from '../directives/ionic-mask.directive';
import { ItemMovementSkeletonComponent } from './item-movement-skeleton/item-movement-skeleton.component';
import { InputMaskComponent } from './input-mask/input-mask.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InputComponent,
    SelectComponent,
    ItemProductComponent,
    ItemProductSkeletonComponent,
    ItemMovementComponent,
    ItemMovementSkeletonComponent,
    InputMaskComponent
  ],
  exports: [
    HeaderComponent,
    InputComponent,
    SelectComponent,
    ItemProductComponent,
    ItemProductSkeletonComponent,
    ItemMovementComponent,
    ItemMovementSkeletonComponent,
    InputMaskComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    IonicMaskDirective,
  ]
})
export class ComponentsSharedModule { }
