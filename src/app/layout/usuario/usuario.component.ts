import { Component } from '@angular/core'

@Component({
    selector:'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent {

    public variable: string;

    constructor(){
        this.variable='Layout Usuario';
    }
}