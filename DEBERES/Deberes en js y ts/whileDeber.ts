/*
1 Analisis socioeconomico del ecuador
2 Algebra
3 Compiladores
5 Fundamentos de Programacion  ///// orden de importancia es de abajo hacia arriba, si se cumple la condicion
7 Calculo                           compilador es igual a compilador mas uno 
11 Fisica
13 Ingles
*/


let contador = 0; 
let AnalisisEcuador = 0; //1
let Algebra = 0;  //2
let Compiladores = 0; //3
let FundamentosProgramacion = 0; //5
let Calculo = 0;  //7
let Fisica = 0; //11
let Ingles = 0; //13

console.log('\tCuantos deberes voy a hacer de cada materia?\n');

do{
    contador+=1;
    if(contador%13==0){
        Ingles+=1;
    }
    else{
        if(contador%11==0){
            Fisica+=1;
        }
        else{
            if(contador%7==0){
                Calculo+=1;
            }
            else{
                if(contador%5==0){
                    FundamentosProgramacion+=1;
                }
                else{
                    if(contador%3==0){
                        Compiladores+=1;
                    }
                    else{
                        if(contador%2==0){
                            Algebra+=1;
                        }
                        else{
                            AnalisisEcuador+=1;
                        }
                    }
                }
            }
        }

    }
    


}while(contador < 1000);

console.log(`He hecho ${AnalisisEcuador} deberes de Analisis de Ecuador`);
console.log(`He hecho ${Algebra} deberes de Algebra`);
console.log(`He hecho ${Compiladores} deberes de Compiladores`);
console.log(`He hecho ${FundamentosProgramacion} deberes de Fundamentos de Programacion`);
console.log(`He hecho ${Calculo} deberes de Calculo`);
console.log(`He hecho ${Fisica} deberes de Fisica`);
console.log(`He hecho ${Ingles} deberes de Ingles`);
const sumatoria = (AnalisisEcuador+Algebra+Compiladores+FundamentosProgramacion+Calculo+Fisica+Ingles);
console.log("El la suma de todos los deberes hechos es: "+ sumatoria);

