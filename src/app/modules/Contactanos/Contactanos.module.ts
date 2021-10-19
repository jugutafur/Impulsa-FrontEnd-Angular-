import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContactanosRoutingModule } from './Contactanos-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { ContactanosComponent } from './components/Contactanos/Contactanos.component';

import { MaterialModule } from '../../shared/material/material.module'


@NgModule({
    declarations: [
        ContactanosComponent,
    ],
    imports: [
        CommonModule,
        ContactanosRoutingModule,
        SharedModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: []
})

export class ContactanosModule { }