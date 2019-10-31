/*
Este Programa analiza si una función cuadratica tiene soluciones reales o imaginarias.
*/
console.log("\tBienvenido,este programa determina si la ec. cuadratica tiene soluciones reales.");
console.log("A continuacion introduzca a, b y c.\n de la forma ax^2+bx+c=0");
const variableAString = prompt("Introduce 'a': ");
const variableBString = prompt("Introduce 'b': ");
const variableCString = prompt("Introduce 'c': ");
const varA = Number(variableAString);
const varB = Number(variableBString); // Ingresan variables y las cambio a numeros
const varC = Number(variableCString);

const discriminante = Number(varB*varB-4*varA*varC); // dicriminante para sabes si es positivo o negativo
const raiz = Math.sqrt(discriminante); // funcion para sacar la raiz
const solucion1 = Number((-varB+raiz)/2*varA);  
const solucion2 = Number((-varB-raiz)/2*varA);   // soluciones de la ecuacion cuadratica
const solReales = discriminante >=0;

// Ingresan condicionales
if(solReales){
    if(discriminante>0){
    console.log("Esta ecuacion tiene dos soluciones reales, las cuales son: ");
    console.log("x= " + solucion1.toPrecision(4) + "\n" + "x= " + solucion2.toPrecision(4)); 
    }

    if(discriminante == 0){
    console.log("Esta ecuacion solo tiene una solucion real y es: ");
    console.log("x= " + solucion1 );
    }

}else{
    console.log("Esta ecuacion NO tiene soluciones Reales.");
    }
