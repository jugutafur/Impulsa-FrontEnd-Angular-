import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiendaImpulsaComponent } from './components/TiendaImpulsa/TiendaImpulsa.component'
import { DetailComponent } from './components/detail/detail.component'

const routes: Routes=[
    {
        path:'',
        component: TiendaImpulsaComponent
    },
    {
        path: 'Kits',
        component: TiendaImpulsaComponent
    },
    {
        path: 'Servicios',
        component: TiendaImpulsaComponent
    },
    {
        path: 'Productos',
        component: TiendaImpulsaComponent
    },
    {
        path: 'Aliados',
        component: TiendaImpulsaComponent
    },
    {
        path: 'Aseo',
        component: TiendaImpulsaComponent
    },
    {
        path: 'Hogar',
        component: TiendaImpulsaComponent
    },
    {
        path: 'Tecnologia',
        component: TiendaImpulsaComponent
    },
    {
        path: 'Muebles',
        component: TiendaImpulsaComponent
    },
    {
        path: 'zapatos',
        component: TiendaImpulsaComponent
    },
    {
        path: ':categoria/:id',
        component: DetailComponent
    },
];


@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule]
})

export class TiendaImpulsaRoutingModule { }