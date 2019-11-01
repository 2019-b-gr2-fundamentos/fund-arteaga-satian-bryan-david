/*
Este programa simula el funcionamiento de un cajero de banco.
*/
console.log("\tBienvenido, este programa simula el funcionamiento de un banco\n");
console.log("\nSe empieza teniendo un saldo inicial de 1000 USD.\n");
var saldoInicial = Number(1000);
console.log("Por favor elija: \nIngresar dinero en cuenta -> 1.\nRetirar dinero de la cuenta. -> 2.\nSalir -> 3.");
var opString = prompt("Ingrese el numero de la actividad que desea realizar: ");
var op = Number(opString);
//Ingreso del condicional switch
switch (op) {
    case 1:
        console.log("Digite la cantidad de USD que desea ingresar:\n");
        var usdExtraString = prompt("Digite la cantidad de USD que desea ingresar:");
        var usdExtra = Number(usdExtraString);
        var saldoFinal = usdExtra + saldoInicial;
        console.log("\nDinero en cuenta: " + saldoFinal);
        break;
    case 2:
        console.log("Digite la cantidad de dinero que va a retirar:\n ");
        var usdRetiroString = prompt("Digite la cantidad de dinero que va a retirar: ");
        var usdRetiro = Number(usdRetiroString);
        if (usdRetiro > saldoInicial) {
            console.log("\nNO posee la cantidad suficiente de dinero.");
        }
        else {
            console.log("Su saldo restante es: " + (saldoInicial - usdRetiro));
        }
        break;
    case 3:
        break;
    default:
        console.log("Has elegido una opcion no valida.");
}
