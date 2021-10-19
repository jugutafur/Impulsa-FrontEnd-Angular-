import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './Inicio-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { InicioComponent } from './components/Inicio/Inicio.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';

@NgModule({
    declarations: [
        InicioComponent,
        ProveedoresComponent,
    ],
    imports: [
        CommonModule,
        InicioRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: []
})

export class InicioModule { }