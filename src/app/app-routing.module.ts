import { NgModule } from '@angular/core'; 
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PrincipalComponent } from './layout/principal/principal.component';
import { AdministradorComponent } from './layout/administrador/administrador.component'
import { UsuarioComponent } from './layout/usuario/usuario.component'

import { PageNotFoundComponent } from './modules/PageNotFound/page-not-found/page-not-found.component'


const routes: Routes = [
  {
    path:'',
    component: PrincipalComponent,
    children:[
      {
        path: '',
        redirectTo: 'Inicio',
        // redirectTo: '/Inicio',
        pathMatch: 'full',
      },
      {
        path: 'Inicio',
        loadChildren: () => import('./modules/Inicio/Inicio.module').then(m => m.InicioModule)
      },
      {
        path: 'TiendaImpulsa',
        loadChildren: () => import('./modules/TiendaImpulsa/TiendaImpulsa.module').then(m => m.TiendaImpulsaModule)
      },
      {
        path: 'Contactanos',
        loadChildren: () => import('./modules/Contactanos/Contactanos.module').then(m => m.ContactanosModule)
      },
      {
        path: 'MiCuenta',
        loadChildren: () => import('./modules/MiCuenta/MiCuenta.module').then(m => m.MiCuentaModule)
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  },
  // {
  //   path: 'prueba',
  //   component: PruebaComponent
  // },

  // 'Usuario', 'Administrador'
  // {
  //   path: 'prueba',
  //   component: AdministradorComponent,
  //   loadChildren: () => import('./modules/prueba/prueba.module').then(m => m.PruebaModule)
  // },
  {
    path: 'Usuario',
    component: UsuarioComponent,
    loadChildren: () => import('./modules/usuarios/usuarios-routing.module').then(m => m.UsuariosRoutingModule)
  },
  {
    path: 'Administrador',
    component: AdministradorComponent,
    loadChildren: () => import('./modules/administrador/administrador.module').then(m => m.AdministradorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
