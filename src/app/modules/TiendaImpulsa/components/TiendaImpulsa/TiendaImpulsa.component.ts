import { Component} from '@angular/core';
import { product } from '../../../../core/models/kit.model';
import { ApiService } from '../../../../core/services/api.service';

@Component({
    selector: 'app-TiendaImpulsa',
    templateUrl: './TiendaImpulsa.component.html',
    styleUrls: ['./TiendaImpulsa.component.scss']
})

export class TiendaImpulsaComponent{
    
    public var_seccion: string;
    lista_Categorias: product[]= [];

    constructor(private apiService: ApiService){
        this.var_seccion="Aliados";
    }

    leerDesdeNa(variable){
        this.var_seccion= variable;
        this.lista_Categorias= variable;
        this.fetchProd(this.var_seccion);
    }

    fetchProd(var_seccion: string){
        this.apiService.getCategoria(var_seccion)
        .subscribe(product=>{
            this.lista_Categorias=product;
        });
    }

    detelle(){
        console.log("vas a comprar verdad");
    }
}