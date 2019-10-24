//let numeroUno = 1; -> notacion camelCase
//otras notaciones:
//NUMEROUNO -> TODO MAYUSCULAS
//NUMERO_UNO -> mayusculas
//NumeroUno ->
//numerouno ->
//numero_uno ->
var numeroUno = 1;
var numeroDos = 2;
var resultado = 0;
//SUMAR
resultado = 1 + 2;
//RESTAR
resultado = 1 - 2;
//MULTIPLICAR
resultado = 1 * 2;
//DIVIDIR
resultado = 1 / 2;
//EXPONENCIAL
resultado = 1 ^ 2;
//MOD
resultado = 4 % 2; // 0 -> residuo
resultado = 4 % 3; // 1 -> residuo
resultado = 7 % 3; // 1 -> residuo
console.log("pera" + 2);
//STRINGS
var mensaje = " \"Hola Mundo\""; //Fijarse en las comillas, para hacer que en la compilación aparezcan estas.
var saludo = "Adiós Mundo";
console.log(mensaje + "\n" + saludo); //Agrego el  " " para asignar espacios entre las strings
// Usamos el \n para hacer saltos de linea
console.log(mensaje + "1\t\t\t ");
//TEMPLATE STRINGS
var edad = 30;
var saludoEdad = "Mi edad es: \n" + edad;
var saludoCompleto = "";
console.log(saludoEdad);
console.log(saludoCompleto);
//Contamos los elementos
var nombreLongitud = " David Arteaga ";
//Eliminar espacios al principio y al final
console.log(nombreLongitud.trim());
console.log(nombreLongitud.length); //.length sirva para contar el número de caracteres.
//.trim sirve para eleiminar espacios al inicio y al final
//Cambiar a mayúsculas o a minúsculas
console.log(nombreLongitud.toUpperCase()); //Cmbia todas a mayúsclas
console.log(nombreLongitud.toLocaleLowerCase()); //Cmabia todas a minúsculas
console.log(nombreLongitud.replace("a", "o")); //Cmbia la primera letra que le digamos por la otra
console.log(nombreLongitud.replace("\n", "")); // no sé que hace
console.log(nombreLongitud.search("d")); //Busca la letra o (lo que sea) "d", su posición
console.log(nombreLongitud.search("D")); // Busca la letra "D", su posición
console.log(nombreLongitud.search("x")); // Si no existe lo que busco, me devuelve un "-1".
console.log(nombreLongitud.search("David"));
console.log(nombreLongitud.search("Arteaga"));
//Busca la primera letra o lo que sea de algo, si no lo encuentra, me manda un -1.
console.log(nombreLongitud.slice(0, 3)); //Me devuelve un pedazo de las letras de mi string, desde la pos 0
//hasta la pos 3 (en este caso)
console.log(nombreLongitud.indexOf("v")); //Me demuestra la posición del caracter, sin contar el espacio
console.log(nombreLongitud.includes(" ")); // el includes me devuelve un V o F, si se encuentra lo que busco 
console.log(nombreLongitud.includes("z"));
console.log(nombreLongitud.startsWith(" Da")); // Medice si empieza con lo que le digo (V o F), se cuenta los espacios
console.log(nombreLongitud.substring(0, 3)); // Hace lo mismo que el slice
