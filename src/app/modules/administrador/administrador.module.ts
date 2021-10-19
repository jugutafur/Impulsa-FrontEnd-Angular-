import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { AdministradorComponent } from './components/administrador/administrador.component';
import { BannerAdminComponent } from './components/bannerAdmin/bannerAdmin.component'

@NgModule({
    declarations: [
        AdministradorComponent,
        BannerAdminComponent
    ],
    imports: [
        CommonModule,
        AdministradorRoutingModule,
        SharedModule,
    ],
    exports:[
    ],
    providers: [],
    bootstrap: []
})

export class AdministradorModule { }