import { Component } from '@angular/core';

@Component({
    selector: 'app-bannerAdmin',
    templateUrl: './bannerAdmin.component.html',
    styleUrls: ['./bannerAdmin.component.scss']
})

export class BannerAdminComponent{
    
    public variable: string;
    public logo: string;

    vista= ['Usuarios','Gestor','Proveedores','productos','servicios'];
    constructor(){
        this.variable='bannerAdmin';
        this.logo='assets/banner/img/logoTienda.png';
    }
}