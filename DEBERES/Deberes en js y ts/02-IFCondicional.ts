/*
En este programa se ingresan dos vectores de R^2... ej: (u1,u2).
y luego se dermina si forman un angulo recto,agudo u obtuso.
siguiendo la formula cos(x)=<vectorA,vectorB>/||vectorA||||vectorB||
*/

console.log("\tBienvenido, a continuacion introduzca 2 vectores de R^2.");
//Ingresa el primer vector VectorA = (vectorAcomp1, vectorAcomp2)
const vectorAComp1 = prompt("Vector A\nIntroduzca el primer componente.\nVectorA=(a1,a2)");
const vectorAcomp2 = prompt("Vector A\nIntroduzca el segundo componente.\nVectorA=(" + vectorAComp1 + ",a2)");
console.log("VectorA=(" + vectorAComp1 + "," + vectorAcomp2 + ")");

//Ingresa el segundo vector VectorB
const vectorBComp1 = prompt("Vector B\nIntroduzca el primer componente.\nVectorB=(b1,b2)");
const vectorBcomp2 = prompt("Vector B\nIntroduzca el segundo componente.\nVectorB=(" + vectorAComp1 + ",b2)");
console.log("VectorB=(" + vectorBComp1 + "," + vectorBcomp2 + ")");
const a1 = Number(vectorAComp1);
const a2 = Number(vectorAcomp2);
const b1 = Number(vectorBComp1);
const b2 = Number(vectorBcomp2);

//Ingresan las formulas
const moduloVectorA = Math.sqrt(a1*a1+a2*a2);
const moduloVectorB = Math.sqrt(b1*b1+b2*b2);
const cosx = Number((a1*b1+a2*b2)/(moduloVectorA*moduloVectorB));
const x = Math.acos(cosx);

//Ingresan condicionales
if(x > ((Math.PI)/2)){
    console.log("El angulo es obtuso.")
}
else{
    if(x < ((Math.PI)/2)){
        console.log("El angulo es agudo.");
    }
    if(x == Math.PI){
    console.log("El angulo es recto (perpendicular).");
    }
    console.log();
}
