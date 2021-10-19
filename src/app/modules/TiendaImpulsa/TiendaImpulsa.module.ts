import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaImpulsaRoutingModule } from './TiendaImpulsa-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { TiendaImpulsaComponent } from './components/TiendaImpulsa/TiendaImpulsa.component';
import { NavCategoriasComponent } from './components/nav-categorias/nav-categorias.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
    declarations: [
        TiendaImpulsaComponent,
        NavCategoriasComponent,
        SeccionComponent,
        DetailComponent,
    ],
    imports: [
        CommonModule,
        TiendaImpulsaRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: []
})

export class TiendaImpulsaModule { }