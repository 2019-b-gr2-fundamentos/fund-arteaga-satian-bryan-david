//04-condicionales
const casado = false;
if(casado == true){  // Expresión  => hoolean
    console.log("Sí estoy casado");
} else{
    console.log("No estoy casado");
}
//Para igual ==  // para diferente de !=
const tengoMosa =true;     
const casadoymosero = casado ==true && tengoMosa ==true; //Puedo unir varias constaantes 

if( casadoymosero ){  //LAS UNO PARA NOESCRIBIR TANTO EN LOS CONDICIONALES
    console.log("Casado y Mosero");
}
else{
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
const nombreVacio = "";
if(""){  //Cadena vacía sale FALSY  
    console.log("TRUTY");
}else{
    console.log("FALSY");
}
//FALSY
if("abc"){ //CADENA LLENA SALE TRUTY
    console.log("TRUTY");
}else{
    console.log("FALSY");
}

//Numeros
if(-1){ //NUMEROS SALE TRUTY
    console.log("TRUTY");
}else{
    console.log("FALSY");
}

//Decimales
if(1.342523){ //DECIMALES SALE TRUTY
    console.log("TRUTY");
}else{
    console.log("FALSY");
}

//Numeros
if(0){   //eL NUMERO CERO SALE FALSY
    console.log("TRUTY");
}else{
    console.log("FALSY");
}

//Cadena vacía sale FALSY  
//CADENA LLENA SALE TRUTY
//NUMEROS SALE TRUTY
//DECIMALES SALE TRUTY
 //eL NUMERO CERO SALE FALSY

 if(null){   // Null sale FALSY
    console.log("TRUTY");
}else{
    console.log("FALSY");
}

if(undefined){   //UNDEFINED SALE FALSY
    console.log("TRUTY");
}else{
    console.log("FALSY");
}

//El switch else
const calculo= "multiplicar"; // sumar restar multiplicar y dividir
switch(calculo){
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

const edadPersonaString = prompt("Ingresar edad: ");
const edadPersona = Number(edadPersonaString);

if(edadPersona>= 0 && edadPersona<=6){
    console.log("Guagua");
}
if(edadPersona>6 && edadPersona<=18){
    console.log("Guambra");
}
if(edadPersona>18 && edadPersona<=65){
    console.log("Longo");
}
if(edadPersona>65){
    console.log("RUKU");
}
if(edadPersona<0){
    console.log("Ha ingrasado un valor no establecido.");
}






