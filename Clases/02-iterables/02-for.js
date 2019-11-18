// FOR
// 1) DEclarar una variable.
// 2) Condicion (Expresion)
// 3) Incrementar, Disminuir
for (var numeroExDeMiCrush = 7; numeroExDeMiCrush > 0; numeroExDeMiCrush--) {
    console.log('Golpee ' + numeroExDeMiCrush);
}
for (var num = 0; num < 3; num++) {
    console.log(num + 1);
}
//ARREGLOS
// 
var arregloNumeros = [1, 2, 3, 4, 5,];
arregloNumeros.push(6); // FUNCIOn para agregar un nuevo elemento al arreglo.
console.log('arregloNumeros', arregloNumeros);
arregloNumeros.pop(); // Funcion que quita un elemento del arreglo.
console.log('arreegloNumeros', arregloNumeros);
var tamano = arregloNumeros.length;
for (var contador = 0; contador < tamano; contador++) {
    console.log(arregloNumeros[contador]);
}
//Acceder al elemento num 5 del arreglo
console.log("El # 5 del arreglo es " + arregloNumeros[4]);
