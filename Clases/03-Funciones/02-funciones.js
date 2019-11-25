function sumar(numUno, numDos) {
    return (numUno + numDos);
}
function restar(numUno, numDos) {
    return (numUno - numDos);
}
function multiplicar(numUno, numDos) {
    return (numUno * numDos);
}
function dividir(numUno, numDos) {
    return (numUno / numDos);
}
function main() {
    calculadora();
}
function calculadora() {
    var operacion = prompt("Selecciona una operacion:\n 1. Suma\n 2. Resta \n 3. Multiplicacion\n 4. Division \n 5. Salir");
    var esSuma = operacion == 'suma' || operacion == '1';
    var esResta = operacion == 'resta' || operacion == '2';
    var esMultiplicacion = operacion == 'multiplicacion' || operacion == '3';
    var esDivision = operacion == 'division' || operacion == '4';
    var esSalir = operacion == 'salir' || operacion == '5';
    var estaValida = esSuma || esResta || esMultiplicacion || esDivision;
    if (estaValida) {
        var numUno = +prompt("Numero 1"); //PONIENDO UN '+' ANTES DEL PROMPT SE CAMBIA A TIPO NUMBER
        var numDos = +prompt("Numero 2");
        var resultado = 0;
        if (esSuma) {
            resultado = sumar(numUno, numDos);
        }
        if (esResta) {
            resultado = restar(numUno, numDos);
        }
        if (esMultiplicacion) {
            resultado = multiplicar(numUno, numDos);
        }
        if (esDivision) {
            resultado = dividir(numUno, numDos);
        }
        console.log(resultado);
    }
    else if (esSalir) {
        console.log('Adios');
    }
    else {
        console.log('Has elegido una opcion no valida');
        calculadora();
    }
}
/*
1) Seleccionar operacion
2) La seleccion no es valida
2.1.1) Vuelve a seleccionar la operacion
2.2) La seleccion es valida
2.2.1) Ingresar primer numero
2.2.2) Ingresar segundo numero
2.2.3)Ejecutar la operacion
*/
