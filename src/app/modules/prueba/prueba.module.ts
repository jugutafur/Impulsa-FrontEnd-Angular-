import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';

import { PruebaComponent } from './components/prueba/prueba.component'
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    PruebaComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule,
    SharedModule
  ]
})
export class PruebaModule { }
