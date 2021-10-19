import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { bannerComponent } from './components/banner/banner.component';
import { footerComponent } from './components/footer/footer.component';

import { MaterialModule } from "./material/material.module";

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    bannerComponent,
    footerComponent,
  ],
  exports: [
    bannerComponent,
    footerComponent,
    CommonModule,
  ],

  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyA12OPXdgQ-vHBtaVtzR1R4ABPFURqOcbY'
    })
  ]
})
export class SharedModule { }
