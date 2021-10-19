import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiCuentaRoutingModule } from './MiCuenta-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { MiCuentaComponent } from './components/MiCuenta/MiCuenta.component';

@NgModule({
    declarations: [
        MiCuentaComponent,
    ],
    imports: [
        CommonModule,
        MiCuentaRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: []
})

export class MiCuentaModule { }