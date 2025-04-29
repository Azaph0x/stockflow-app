import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryProductMockService } from './services/category-product/category-product-mock.service';
import { CategoryProductService } from './services/category-product/category-product.service';
import { ProductService } from './services/product/product.service';
import { ProductMockService } from './services/product/product-mock.service';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios'
    }),
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name: 'inventory-app',
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: CategoryProductService, useClass: CategoryProductMockService },
    { provide: ProductService, useClass: ProductMockService}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
