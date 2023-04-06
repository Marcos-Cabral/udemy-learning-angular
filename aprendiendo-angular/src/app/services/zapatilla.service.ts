import {Injectable} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';


@Injectable()
export class ZapatillaService{
   public zapatillas:Array<Zapatilla>;

    constructor(){
        this.zapatillas=[
            new Zapatilla("air",100,"nike","negro",true),
            new Zapatilla("runner",60,"puma","gris",true),
            new Zapatilla("botin",70,"diadora","rojo",true),
            new Zapatilla("montaña",200,"tramb","marron",false)
        ];
    }

    getTexto(){
        return "Hola mundo desde servicio";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}