import { Component } from '@angular/core';

@Component({
    selector: 'appContactanos',
    templateUrl: './Contactanos.component.html',
    styleUrls: ['./Contactanos.component.scss']
})

export class ContactanosComponent{

    public variable: string;
    public imgContactanos: string;

    constructor(){
        this.variable='Contactanos';
        this.imgContactanos= 'assets/Contactanos/img/8.jpg';
    }
}