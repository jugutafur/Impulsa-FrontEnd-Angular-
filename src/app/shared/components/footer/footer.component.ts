import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class footerComponent{
    
    public variable: string;
    lat: number=4.5981259;
    lng: number=-74.0782322;

    constructor(){
        this.variable='footer';
    }
}