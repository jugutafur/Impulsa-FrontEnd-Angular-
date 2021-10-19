import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http'
import { kit, product } from '../models/kit.model';

import { Global } from '../../shared/global'

@Injectable({
  providedIn: 'root'
})

export class ApiService  {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url= Global.urlTienda;
  }

  getAllproductos(){
    // return this.http.get<kit[]>('https://portafolio-juantafur-df22c-default-rtdb.firebaseio.com/Kits.json');
    // return this.http.get<kit[]>('https://platzi-store.herokuapp.com/products');
    return this.http.get<kit[]>('https://purebainfinita2.herokuapp.com/api/Kits/todos');
    // return this.http.get<kit[]>(this.url+'/api/Kits/todos');
    // return this.http.get<kit[]>('/api/Kits/todos');
  }
  
  getCategoria(category: string){
    // return this.http.get<product[]>('https://portafolio-juantafur-df22c-default-rtdb.firebaseio.com/'+ id +'.json');
    return this.http.get<product[]>('https://purebainfinita2.herokuapp.com/api/'+ category +'/todos');
  }

  getProduct(categoria: string, id: string){
    return this.http.get<product[]>('https://purebainfinita2.herokuapp.com/api/'+categoria+'/'+ id );
  }
}
