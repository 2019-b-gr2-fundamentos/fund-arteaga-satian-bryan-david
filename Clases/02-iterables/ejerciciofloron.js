/*JUEGO!!!
1) Crear arreglo de 5 elementos
2) Cada elemento 1 o un 0
 EJ: [0, 0, 1, 1, 0]
3) Exista al menos un elemento '1'
Ej: [0,0,0,0,0] NO VALE
EJ: [0,0,0,1,0] SI VALE
*/
//console.log(Math.floor(Math.random()*2)); //Nyumeros random en un intervalo del [0 al 1]
//Math.floor(Math.random() * 11) // Numeros random en un intervalo del [0 al 10]
var miArreglo = [];
var indice = Number(5);
var arrCeros = [];
//SE DEFINE EL ARREGLO DE SOLO CEROS
for (var contadorUno = 0; contadorUno < indice; contadorUno++) {
    arrCeros.push(0);
}
//se crea el arreglo de numeros random
do {
    for (var contador = 0; contador < indice; contador++) {
        miArreglo.push(Math.floor(Math.random() * 2));
    }
} while (miArreglo == arrCeros);
console.log(miArreglo);
