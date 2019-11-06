console.log("\tBienvenido, este programa simula una calculadora\n\nElija su oción preferida:");
console.log("Suma: 1.\nResta: 2.\nMultiflicación: 3.\nDivisión: 4.\nPotencia de un número: 5.");
var ElegirOpcionString = prompt("Suma: 1.\nResta: 2.\nMultiflicación: 3.\nDivisión: 4.\nPotencia de un número: 5.\nChoose now: ");
var ElegirOpcion = Number(ElegirOpcionString);
var union = (ElegirOpcion == 1 || ElegirOpcion == 2 || ElegirOpcion == 3 || ElegirOpcion == 4 || ElegirOpcion == 5);
if (union) {
    var ValorUnoString = prompt("Ingresa el primer valor: ");
    var ValorDosString = prompt("Ingresa el segundo valor: ");
    var ValorUno = Number(ValorUnoString);
    var ValorDos = Number(ValorDosString);
    switch (ElegirOpcion) {
        case 1:
            console.log("Has elegido la Suma: ");
            console.log(ValorUno + " + " + ValorDos);
            console.log("El resultado es: ");
            console.log(ValorUno + ValorDos);
            break;
        case 2:
            console.log("Has elegido la Resta: ");
            console.log(ValorUno + " - " + ValorDos);
            console.log("El resultado es: ");
            console.log(ValorUno - ValorDos);
            break;
        case 3:
            console.log("Has elegido la Multiplicación: ");
            console.log(ValorUno + " * " + ValorDos);
            console.log("El resultado es: ");
            console.log(ValorUno * ValorDos);
            break;
        case 4:
            console.log("Has elegido la División: ");
            //Condicionales en caso que se divida para cero.
            if (ValorDos == 0) {
                console.log("No se puede dividir para 0.");
            }
            else {
                console.log(ValorUno);
                console.log(" / ");
                console.log(ValorDos);
                console.log("El resultado es: ");
                console.log(ValorUno / ValorDos);
            }
            break;
        case 5:
            console.log("Has elegido la potenciacion");
            console.log(ValorUno + "^" + ValorDos);
            console.log("El resultado es: ");
            console.log(Math.pow(ValorUno, ValorDos));
            break;
    }
}
else {
    console.log("Has elegido un número que no está en las opciones.");
}
//jadskaskdlajd 
