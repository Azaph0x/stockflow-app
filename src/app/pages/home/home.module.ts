import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CardComponent } from './components/card/card.component';
import { ListSegmentComponent } from './components/list-segment/list-segment.component';
import { ComponentsSharedModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsSharedModule
  ],
  declarations: [
    HomePage,
    CardComponent,
    ListSegmentComponent
  ]
})
export class HomePageModule {}
