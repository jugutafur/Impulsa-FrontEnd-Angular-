import { Component } from '@angular/core';

@Component({
    selector: 'app-MiCuenta',
    templateUrl: './MiCuenta.component.html',
    styleUrls: ['./MiCuenta.component.scss']
})

export class MiCuentaComponent{

    public variable: string;
    public imgMiCuenta:string;

    constructor(){
        this.variable='MiCuenta';
        this.imgMiCuenta= 'assets/MiCuenta/img/1.jpg';
    }
}