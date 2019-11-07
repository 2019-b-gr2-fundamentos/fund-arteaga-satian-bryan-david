//04-condicionales
var casado = false;
if (casado == true) {
    console.log("Sí estoy casado");
}
else {
    console.log("No estoy casado");
}
//Para igual ==  // para diferente de !=
var tengoMosa = true;
var casadoymosero = casado == true && tengoMosa == true; //Puedo unir varias constaantes 
if (casadoymosero) {
    console.log("Casado y Mosero");
}
else {
    console.log("0 casado o mosero o nada");
}
//El operador and en javascript &&  y el operador or es ||
//EJERCICIOS
//apago la promera alarma  me hago bplota y lloro hasta la segunda alrma y me levanto
// celularDescargado == true
//celularDañado == true
//amanecerMuerto == true
//estaActivadalaalarma != true
//estaEnModoSilencioso == true
/*const meAtrasoAClase = celularDescargado ==true || celularDañado ==true ||  amaneceMuerto ==true
 || estaActivadaLaAlarma !=true || estaEnModoSilencio ==true */
//Uno la const MeAtrasoAClase es la uníon de varios condicionales:
//si el celular está descargado o dañado o me morí o está 
//en modo silencioso o la alarma no es´ta activada, "MeAtrasoAClases" sería verdadero.
//30 de cotubre del 2019
//TRUTY
var nombreVacio = "";
if ("") {
    console.log("TRUTY");
}
else {
    console.log("FALSY");
}
//FALSY
if ("abc") {
    console.log("TRUTY");
}
else {
    console.log("FALSY");
}
//Numeros
if (-1) {
    console.log("TRUTY");
}
else {
    console.log("FALSY");
}
//Decimales
if (1.342523) {
    console.log("TRUTY");
}
else {
    console.log("FALSY");
}
//Numeros
if (0) {
    console.log("TRUTY");
}
else {
    console.log("FALSY");
}
//Cadena vacía sale FALSY  
//CADENA LLENA SALE TRUTY
//NUMEROS SALE TRUTY
//DECIMALES SALE TRUTY
//eL NUMERO CERO SALE FALSY
if (null) {
    console.log("TRUTY");
}
else {
    console.log("FALSY");
}
if (undefined) {
    console.log("TRUTY");
}
else {
    console.log("FALSY");
}
//El switch else
var calculo = "multiplicar"; // sumar restar multiplicar y dividir
switch (calculo) {
    case "sumar":
        //code block
        break;
    case "restar":
        //code block
        break;
    case "multiplicar":
        //code block;
        break;
    case "dividir":
        //code block
        break;
    default:
}
//Ejercicio en clase
//  6 GUAGUA
// 18 Guambra
// 65 LONGO
// 66 RUKU
var edadPersonaString = prompt("Ingresar edad: ");
var edadPersona = Number(edadPersonaString);
if (edadPersona >= 0 && edadPersona <= 6) {
    console.log("Guagua");
}
if (edadPersona > 6 && edadPersona <= 18) {
    console.log("Guambra");
}
if (edadPersona > 18 && edadPersona <= 65) {
    console.log("Longo");
}
if (edadPersona > 65) {
    console.log("RUKU");
}
if (edadPersona < 0) {
    console.log("Ha ingrasado un valor no establecido.");
}
