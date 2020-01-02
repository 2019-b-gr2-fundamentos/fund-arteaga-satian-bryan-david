//Escriba un programa qeu verifique si dos matrices son iguales
//(L Matriz es de dos dimensiones n*m)
//"n" y "m" pueden ser iguales o distintas.
//EJERCICIO 2: SUMAR FILAS Y SUMASR COLUMNAS
//EFJERCICIO 3: INTERCAMBIAR COLUMNAS Y FILAS
function CrearMatrices() {
    var Unomatriz = [
        [3, 2, 1],
        [1, 2, 3]
    ];
    var Dosmatriz = [
        [4, 5, 6],
        [7, 8, 5]
    ];
    var Tresmatriz = [
        [3, 2, 1],
        [1, 2, 3]
    ];
    var filaMUno = Unomatriz.length; //defino filas y columnas para los dos arreglos elegidos
    var columnaMUno = Unomatriz[0].length;
    var filaMDos = Dosmatriz.length;
    var columnaMDos = Dosmatriz[0].length;
    var FyC = Verificarfilasycolumnas(filaMUno, columnaMUno, filaMDos, columnaMDos); //ingresa la nueva funcion
    if (FyC == true) {
        VerificadorDeNumeros(Unomatriz, Dosmatriz);
    }
}
function Verificarfilasycolumnas(filamMUno, columnaMUno, filaMDos, columnaMDos) {
    var FyC;
    if (filamMUno == filaMDos && columnaMUno == columnaMDos) {
        FyC = true;
    }
    else {
        FyC = false;
    }
    if (FyC == true) {
        console.log("\nEl numero de filas y columnas son iguales.\n");
    }
    else {
        console.log("Las filas o las columnas son diferentes en las dos matrices, por lo tanto no pueden ser matrices iguales.\n");
    }
    return FyC;
}
function VerificadorDeNumeros(matrizUno, matrizDos) {
    /*for(let j = 0; j<3; j++){
        console.log(`Matriz 1:${matrizUno[0][j]} , \n`);
        console.log(`Matriz 2: ${matrizDos[0][j]} \n`)
    } */
    var VerificaNumeros = true;
    for (var i = 0; i < 3; i++) {
        if (matrizUno[0][i] != matrizDos[0][i]) {
            VerificaNumeros = false;
        }
        if (matrizUno[1][i] != matrizDos[1][i]) {
            VerificaNumeros = false;
        }
    }
    console.log("Verificador: " + VerificaNumeros + " \n");
    if (VerificaNumeros == true) {
        console.log("Y ademas las matrices que elegiste son iguales");
    }
    else {
        console.log("Sin embargo las matrices que elegiste NO son iguales");
    }
}
//FUNCION PRINCIPAL ----------------
CrearMatrices();
