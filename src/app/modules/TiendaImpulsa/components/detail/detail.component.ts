import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service'
import { product } from '../../../../core/models/kit.model'
import { ActivatedRoute, Params } from '@angular/router'

// ActivatedRoute y Params se requieren debido a que el detalle del producto que se va a renderizar en DetailComponent lo dice TiendaImpulsaComponent y nos lo indica por medio de la URL 
// ActivatedRoute= injeccion de dependencias 
// Params= typado 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  lista_Categorias2: product[]= [];
  public contador: number;

  constructor(
    private apiService2: ApiService,  //injeccion del servicio
    private route: ActivatedRoute     //injeccion de dependencia sacar id de la URL
  ) {
    this.contador=0;
  }

  ngOnInit(): void {
    // que quiero los parametros que viene en la ruta se emplea subscribe para escuchar todos los cambios del elemento 
    this.route.params.subscribe(( params: Params)=> {
      console.log(params);
      const interar = params.id;
      const categoria=params.categoria;
      this.apiService2.getProduct(categoria, interar)
      .subscribe(itemX=>{
        this.lista_Categorias2= itemX;
      });
    });
  }

  comprar(){
    alert("van a comprar");
  }

}
