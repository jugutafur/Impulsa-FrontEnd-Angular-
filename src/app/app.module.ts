import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy} from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrincipalComponent } from './layout/principal/principal.component';
import { AdministradorComponent } from './layout/administrador/administrador.component';
import { UsuarioComponent } from './layout/usuario/usuario.component';
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './modules/PageNotFound/page-not-found/page-not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AdministradorComponent,
    UsuarioComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
    // AgmCoreModule.forRoot({
    //   apiKey:'AIzaSyA12OPXdgQ-vHBtaVtzR1R4ABPFURqOcbY'
    // // apiKey:''
    // })
  ],
  providers: [
    {
      provide: LocationStrategy,      
      useClass: PathLocationStrategy //quitar el signo de gato a las rutas
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
