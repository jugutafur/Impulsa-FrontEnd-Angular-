import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorComponent } from './components/administrador/administrador.component'
import { BannerAdminComponent } from './components/bannerAdmin/bannerAdmin.component';

const routes: Routes=[
    {
        path:'',
        component: AdministradorComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule]
})

export class AdministradorRoutingModule { }