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



