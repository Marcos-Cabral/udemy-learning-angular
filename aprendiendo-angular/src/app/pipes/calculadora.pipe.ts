import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'calculadora'
})
export class CalculadoraPipe implements PipeTransform{

    transform(value:any, othervalue:any){
        let operaciones=`
            Numeros: ${value +' y '+othervalue}
            Suma: ${value+othervalue}
            Resta: ${value-othervalue}
            Multiplicacion: ${value*othervalue}
            Division: ${value/othervalue}
        `;
        return operaciones;
    }
}