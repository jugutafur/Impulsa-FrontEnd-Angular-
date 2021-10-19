import { Component } from '@angular/core'

@Component({
    selector:'app-administrador',
    templateUrl: './administrador.component.html',
    styleUrls: ['./administrador.component.scss']
})

export class AdministradorComponent {

    public variable: string;

    constructor(){
        this.variable='Layout administrador';
    }
}