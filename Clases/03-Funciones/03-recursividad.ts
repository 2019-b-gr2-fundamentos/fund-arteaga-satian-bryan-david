/*
function imprimirMensajeNveces( mensaje: string, numeroVeces: number): void{
   
    if(numeroVeces == 0){
        console.log('se termino');
    }else{
        console.log(mensaje);
        const nuevoNumeroVeces = numeroVeces - 1;
        imprimirMensajeNveces(mensaje, nuevoNumeroVeces);
    }


}

function main(){
    imprimirMensajeNveces('hola', 4);
}
main();

*/

/*
TIPADO DE ARREGLOS
CONST ARRGLONumeros: number[] = [1,2,3];
const klsafjsdlfjstring: string[] = ['a','b','c'];
const arregloBoolean: boolean[] = [true, false, true];

PSEUCODIGO
ingresa un arreglo a la funcion, luegoesta funcion me  imprime los elementos del arreglo.
*/



function contadorArreglo(elementosArreglo: number[], posicionArreglo: number): void{

    if(posicionArreglo == 3){
        console.log('Has terminado tu arreglo :)');
    }else{
        console.log(miArreglo[posicionArreglo]);
        const nuevaPosicion = posicionArreglo - 1;
        contadorArreglo(elementosArreglo, posicionArreglo);

    }
}
const miArreglo: number[] = [1,2,3,4,5,6,7,8,9,10];
function main(){
    
    contadorArreglo(miArreglo, 3);
}
main();
