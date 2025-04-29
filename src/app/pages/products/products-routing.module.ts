import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductsComponent } from './home/home.component';
import { CreateProductComponent } from './create/create.component';
import { EditProductComponent } from './edit/edit.component';
import { ViewProductComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeProductsComponent
  },
  {
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'edit/:id',
    component: EditProductComponent
  },
  {
    path: 'view/:id',
    component: ViewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
