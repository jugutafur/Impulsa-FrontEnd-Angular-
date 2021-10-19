import { Component } from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})

export class bannerComponent{
    
    public variable: string;
    public logo: string;

    vista= ['Inicio','TiendaImpulsa','Contactanos','MiCuenta'];
    constructor(){
        this.variable='banner';
        this.logo='assets/banner/img/logoTienda.png';
    }
}