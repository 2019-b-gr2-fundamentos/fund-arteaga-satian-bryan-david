const  arregloNumeros = [1,2,3,4,5,6,7,8,9,10];

//Acceder
//Necesito indice
console.log(arregloNumeros[6]); //Imprime 7
//anadir al final
//Necesito elmemento a anadirse
arregloNumeros.push(11);
//Borrar elemento del arreglo
arregloNumeros.pop();

//Agregar o quitar un numero en la posicion que se requiera //FUNCION SPLICE
arregloNumeros.splice(6,1);

console.log(arregloNumeros);

//Buscar indice de un elemento
arregloNumeros.indexOf(5); //Busca en que posicion esta el numero 5 , me sale que esta en la poscion 4
arregloNumeros.indexOf(7); // Como no existe el elemento '7' en el arreglo, me sale el '-1'

console.log(arregloNumeros.indexOf(5));
console.log(arregloNumeros.indexOf(7));


//Cambiar el valor del primer elemento a 999

arregloNumeros.splice(0,1,999);

console.log(arregloNumeros);

