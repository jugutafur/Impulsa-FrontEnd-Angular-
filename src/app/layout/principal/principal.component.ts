import { Component } from '@angular/core'

@Component({
    selector:'app-Principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.scss']
})

export class PrincipalComponent{

    public variable: string;

    constructor(){
        this.variable='layout Principal';
    }
}