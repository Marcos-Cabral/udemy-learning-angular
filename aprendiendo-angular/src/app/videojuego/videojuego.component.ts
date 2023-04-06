import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl:'videojuego.component.html'
})
export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy{
    titulo : string = 'Titulo de videojuego';
    constructor(){
       // console.log("Se cargo el componente");
    }
    ngOnInit(){
        //console.log("OnInit Cargado"); //evento que se carga luego del constructor
    }
    ngDoCheck(){
      //  console.log("DoCheck ejectuado"); //se ejecuta cuando hay un cambio en el componente
    }
    cambiarTitulo(){
        this.titulo="Otro titulo jaja";
    }
    ngOnDestroy(){//cuando elimine el componente
       // console.log("eliminado");
    }
    
}
