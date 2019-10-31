console.log("\tBienvenido, este programa simula una calculadora\n\nElija su oción preferida:");
console.log("Suma: 1.\nResta: 2.\nMultiflicación: 3.\nDivisión: 4.\n");
var ElegirOpcionString = prompt("Choose now: ");
var ElegirOpcion = Number(ElegirOpcionString);
var ValorUnoString = prompt("Ingresa el primer valor: ");
var ValorDosString = prompt("Ingresa el segundo valor: ");
var NumUno = Number(ValorUnoString);
var NumDos = Number(ValorDosString);
switch (ElegirOpcion) {
    case 1:
        console.log("Has elegido la Suma: ");
        console.log(NumUno);
        console.log(" + ");
        console.log(NumDos);
        console.log("El resultado es: ");
        console.log(NumUno + NumDos);
        break;
    case 2:
        console.log("Has elegido la Resta: ");
        console.log(NumUno);
        console.log(" - ");
        console.log(NumDos);
        console.log("El resultado es: ");
        console.log(NumUno - NumDos);
        break;
    case 3:
        console.log("Has elegido la Multiplicación: ");
        console.log(NumUno);
        console.log(" * ");
        console.log(NumDos);
        console.log("El resultado es: ");
        console.log(NumUno * NumDos);
        break;
    case 4:
        console.log("Has elegido la División: ");
        if (NumDos == 0) {
            console.log("No se puede dividir para 0.");
        }
        else {
            console.log(NumUno);
            console.log(" / ");
            console.log(NumDos);
            console.log("El resultado es: ");
            console.log(NumUno / NumDos);
        }
        break;
    default:
        console.log("Has elegido un número que no está en las opciones.");
        break;
}
