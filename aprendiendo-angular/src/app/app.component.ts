import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root', //el selector dice donde se carga el componente, se va acargar en la etiqueta <app-root></app-root>, ver en index
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public title = 'mi aplicacion en angular';
  public mostrar_videojuegos: boolean = true;
  public config;
  constructor(){
    this.title=Configuracion.titulo;
    this.config=Configuracion;
  }
  
    ocultarVideojuegos(value){
      this.mostrar_videojuegos=value;
    }
}