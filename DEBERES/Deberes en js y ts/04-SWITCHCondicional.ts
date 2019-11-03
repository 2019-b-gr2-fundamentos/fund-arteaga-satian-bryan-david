/*
Este programa define si la division de dos numeros es exacta o no.
*/
console.log("\tBienvenido, este programa define si la division entre dos numeros es exacta.\n\n");
const primerNumString = prompt("Ingrese el primer numero: ");
const segundoNumString = prompt("Ingrese el segundo numero: ");
const numUno = Number(primerNumString);
const numDos = Number(segundoNumString);

const resultado = (numUno/numDos);
const residuo = numUno%numDos;

if(numDos != 0){
    
    switch(residuo){
    case 0: 
        console.log("El resultado de la division es: " + resultado + "\nPor lo tanto la division es EXACTA. ");
        break;
    default:
        console.log("El resultado de la division es: " + resultado + "\nPor lo tanto la division NO es EXACTA. ");
        break;
    }

}else{
    alert("No se puede dividir para 0.");
}