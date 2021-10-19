import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service'
import { product } from '../../../../core/models/kit.model';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {

  lista_Provedores: product[];

  constructor(private apiService: ApiService ) { }

  ngOnInit(): void {
    this.fetchAlianza();
  }

  fetchAlianza(){
    this.apiService.getCategoria("Aliados")
    .subscribe(product=>{
      this.lista_Provedores=product;
      console.log(product);
      console.log(this.lista_Provedores);
    })
  }

}
