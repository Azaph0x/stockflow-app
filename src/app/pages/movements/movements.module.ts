import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsRoutingModule } from './movements-routing.module';
import { IonicModule } from '@ionic/angular';
import { HomeMovementsComponent } from './home/home.component';
import { ComponentsSharedModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [
    HomeMovementsComponent,
  ],
  imports: [
    CommonModule,
    MovementsRoutingModule,
    IonicModule,
    ComponentsSharedModule
  ]
})
export class MovementsModule { }
