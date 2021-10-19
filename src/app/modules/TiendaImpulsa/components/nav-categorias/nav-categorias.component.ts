import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-categorias',
  templateUrl: './nav-categorias.component.html',
  styleUrls: ['./nav-categorias.component.scss']
})
export class NavCategoriasComponent implements OnInit {

  @Output() salida:EventEmitter<string>= new EventEmitter();

  Productos= ['Kits', 'Servicios', 'Productos', 'Aliados', 'Aseo', 'Hogar', 'Tecnologia', 'Muebles', 'Zapatos'];
  constructor() { }

  ngOnInit(): void {
  }

  seleccion(valor :string){
    this.salida.emit(valor);
  }
}
