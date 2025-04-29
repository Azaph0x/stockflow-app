import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomeProductsComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { CreateProductComponent } from './create/create.component';
import { ComponentsSharedModule } from 'src/app/shared/components/components.module';
import { EditProductComponent } from './edit/edit.component';
import { ViewProductComponent } from './view/view.component';

@NgModule({
  declarations: [
    HomeProductsComponent,
    CreateProductComponent,
    EditProductComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ProductsRoutingModule,
    ComponentsSharedModule
  ],
})
export class ProductsModule { }
