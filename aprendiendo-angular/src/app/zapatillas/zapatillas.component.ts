import {Component,OnInit} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';
import {ZapatillaService} from '../services/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    styleUrls: ['zapatillas.component.css'],
    providers:[ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
    public titulo : string ="Componente de Zapatilla";
    public zapatillas: Array<Zapatilla>;
    public marcas:String[];
    public color:string;
    public miMarca:string;
    
    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.miMarca="fila";
        this.color='orange';
        this.marcas=new Array();
    }
    mostrarMiMarca(){
        alert(this.miMarca);
    }
    ngOnInit(){
        this.zapatillas=this._zapatillaService.getZapatillas();
        this.mostrarMarcas();
    }
    mostrarMarcas(){
        this.zapatillas.forEach((zapatilla,indice)=>{
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
           
        });
        console.log(this.marcas);
    }
    addMarca(){
        this.marcas.push(this.miMarca);
    }
    borrarMarca(indice){
       // delete this.marcas[indice]; te lo deja en undefined :(
       this.marcas.splice(indice,1); //indice que borra y cuanto borra como 2do arg.
    }
    onBlur(){
        console.log("salio del input");
    }
    mostrarPalabra(){
        alert(this.miMarca);
    }
}