import { Component , OnInit } from '@angular/core';
import { kit } from '../../../../core/models/kit.model';
import { ApiService } from '../../../../core/services/api.service';

@Component({
    selector: 'appInicio',
    templateUrl: './Inicio.component.html',
    styleUrls: ['./Inicio.component.scss']
})

export class InicioComponent implements OnInit{

    public variable: string;
    public promo1: string;
    public menus;

    constructor(
        private apiService: ApiService
    ){
        this.variable='Inicio';
        this.promo1= 'assets/Inicio/img/promo1.jpg';
    }

    ngOnInit(){
        this.fetchProductos();
        console.log("menssaje de prueba");
    }

    fetchProductos(){
        this.apiService.getAllproductos()
        .subscribe( productos=>{
            console.log(productos);
            this.menus = productos;
            console.log(this.menus);
        });
    }
}