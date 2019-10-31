/*
Este Programa analiza si una función cuadratica tiene soluciones reales o imaginarias.
*/
console.log("\tBienvenido,este programa determina si la ec. cuadratica tiene soluciones reales.");
console.log("A continuacion introduzca a, b y c.\n de la forma ax^2+bx+c=0");
var variableAString = prompt("Introduce 'a': ");
var variableBString = prompt("Introduce 'b': ");
var variableCString = prompt("Introduce 'c': ");
var varA = Number(variableAString);
var varB = Number(variableBString); // Ingresan variables y las cambio a numeros
var varC = Number(variableCString);
var discriminante = Number(varB * varB - 4 * varA * varC); // dicriminante para sabes si es positivo o negativo
var raiz = Math.sqrt(discriminante); // funcion para sacar la raiz
var solucion1 = Number((-varB + raiz) / 2 * varA);
var solucion2 = Number((-varB - raiz) / 2 * varA); // soluciones de la ecuacion cuadratica
// Ingresan condicionales
if (discriminante > 0) {
    console.log("Esta ecuacion tiene dos soluciones reales, las cuales son: ");
    console.log("x= " + solucion1.toPrecision(4) + "\n" + "x= " + solucion2.toPrecision(4));
}
if (discriminante < 0) {
    console.log("Esta ecuacion NO tiene soluciones Reales.");
}
if (discriminante == 0) {
    console.log("Esta ecuacion solo tiene una solucion real y es: ");
    console.log("x= " + solucion1);
}
