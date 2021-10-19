import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent {

  @Input() Entrada: string;
  public prueba: string;

  constructor() {
  }

}
