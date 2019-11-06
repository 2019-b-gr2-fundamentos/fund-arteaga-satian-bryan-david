console.log("\tBienvenido, este programa simula una calculadora\n\nElija su oción preferida:");
console.log("Suma: 1.\nResta: 2.\nMultiflicación: 3.\nDivisión: 4.\nPotencia de un número: 5.");
const ElegirOpcionString = prompt("Choose now: ");
const ElegirOpcion = Number(ElegirOpcionString);
const union = (ElegirOpcion == 1 || ElegirOpcion==2 || ElegirOpcion==3 || ElegirOpcion==4 || ElegirOpcion==5);


if(union){

      

        switch(ElegirOpcion){
        

                case 1:
            console.log("Has elegido la Suma: ");
            const ValorUnoSumaString = prompt("Ingresa el primer valor: ");
                const ValorDosSumaString = prompt("Ingresa el segundo valor: ");
                const NumUnoSuma = Number(ValorUnoSumaString);
                const NumDosSuma = Number(ValorDosSumaString);
            console.log(NumUnoSuma); console.log(" + "); console.log(NumDosSuma);
            console.log("El resultado es: "); console.log(NumUnoSuma+NumDosSuma);
            break;

                case 2:
            console.log("Has elegido la Resta: ");
            const ValorUnoRestaString = prompt("Ingresa el primer valor: ");
        const ValorDosRestaString = prompt("Ingresa el segundo valor: ");
        const NumUnoResta = Number(ValorUnoRestaString);
        const NumDosResta = Number(ValorDosRestaString);
            console.log(NumUnoResta); console.log(" - "); console.log(NumDosResta);
            console.log("El resultado es: "); console.log(NumUnoResta-NumDosResta);
            break;

                case 3:
            console.log("Has elegido la Multiplicación: ");
            const ValorUnoMultiplicacionString = prompt("Ingresa el primer valor: ");
        const ValorDosMultiplicacionString = prompt("Ingresa el segundo valor: ");
        const NumUnoMultiplicacion = Number(ValorUnoMultiplicacionString);
        const NumDosMultiplicacion = Number(ValorDosMultiplicacionString);
            console.log(NumUnoMultiplicacion); console.log(" * "); console.log(NumDosMultiplicacion);
            console.log("El resultado es: "); console.log(NumUnoMultiplicacion*NumDosMultiplicacion);
            break;

                case 4:
            console.log("Has elegido la División: ");
            const ValorUnoDivisionString = prompt("Ingresa el primer valor: ");
            const ValorDosDivisionString = prompt("Ingresa el segundo valor: ");
            const NumUnoDivision = Number(ValorUnoDivisionString);
            const NumDosDivision = Number(ValorDosDivisionString);

            if(NumDosDivision == 0){ console.log("No se puede dividir para 0.")}
            else{
            console.log(NumUnoDivision); console.log(" / "); console.log(NumDosDivision);
            console.log("El resultado es: "); console.log(NumUnoDivision/NumDosDivision); }
            break;

            case 5:
                console.log("Has elegido la potenciacion" );
                const ValorUnoPotenciaString = prompt("Ingresa un numero: ");
                const elevadoaString = prompt("Para cuanto quieres elevar el numero? ");
                const ValorUnoPotencia = Number(ValorUnoPotenciaString);
                const elevadoa = Number(elevadoaString);
                console.log(ValorUnoPotencia + "^" + elevadoa);
                console.log("El resultado es: "); console.log(Math.pow(ValorUnoPotencia,elevadoa));

        }

}else{
        console.log("Has elegido un número que no está en las opciones.");
}
//jasksajadjadszajajs