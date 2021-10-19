import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';

import { UsuariosComponent } from './components/usuarios/usuarios.component'
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ]
})
export class UsuariosModule { }
