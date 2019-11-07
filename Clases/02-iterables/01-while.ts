//DO WHILE
/*
let vecesQueHeComido = 0;
console.log("Vamos a comer");
do{
    
    vecesQueHeComido+=1; 
    switch(vecesQueHeComido){

        case 1: 
            console.log('Desayuno');
            break;
        case 2:
            console.log('Almuerzo');
            break;
        
        case 3:
            console.log('Merienda');
            break;
    
        case 4:
            console.log('Gordito');
            break;

            
    }

}while(vecesQueHeComido <= 3);

*/
/*
1 Analisis socioeconomico del ecuador
2 Algebra
3 Compiladores
5 Fundamentos de Programacion  ///// orden de importancia es de abajo hacia arriba, si se cumple la condicion
7 Calculo                           compilador es igual a compilador mas uno 
11 Fisica
13 Ingles
*/
/*
Ejercicio en clase
si es numero es impar le aumentamos a analisis socioeconomico
si es par aumentamos a algebra
si es multiplo de 3 aumentamos a compiladores
*/

let contador = Number(0);
let analisisDelEcuador = Number (0);
let Algebra = Number(0);
let Compiladores = Number(0);

do{
    contador+=1
    if(contador%3== 0){
        Compiladores+=1;
    }
        else {
            if(contador%2==0){
                Algebra+=1;
            }
            else {
                analisisDelEcuador+=1;
            }

        }

}while(contador<100);

//console.log('Analisis del Ecuador: '+ analisisDelEcuador + '\nAlgebra: ' + Algebra + '\nCompiladores: ' + Compiladores);
console.log('\nSuma de todos: ')
console.log(analisisDelEcuador+Algebra+Compiladores);

//Otra forma de unir en la consola texto y variables es con tilde invertida y ${}
console.log(`Hice ${analisisDelEcuador} deberes de Analisis de Ecuador`);
console.log(`Hice ${Algebra} deberes de Algebra`);
console.log(`Hice ${Compiladores} deberes de Compiladores`);








