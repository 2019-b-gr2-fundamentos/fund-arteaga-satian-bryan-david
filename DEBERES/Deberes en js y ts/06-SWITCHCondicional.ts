/*
Calcular la hipotenusa de un triangulo rectangulo mediante dos casos:
Cuando se tiene un cateto y un angulo 
Cuando se tienen dos catetos.
*/

console.log("\tBienvenido, este programa calcula la hipotenusa mediante 2 formas.\n");
const dibujito1 = ("     /|\n    / |\n h /  | c2\n  /   |\n /    |\n/_____|\n   c1\n");
console.log(dibujito1);
console.log("Para ingresar los dos catetos como datos -> 1.\nPara ingresar un cateto y un angulo -> 2.\n");
const opString = prompt("Para ingresar los dos catetos como datos -> 1.\nPara ingresar un cateto y un angulo -> 2.\nQue opcion eliges?");
const op = Number(opString);

//Ingreso de loscondicionales
switch(op){
    case 1:
        const catetoAString = prompt("Para ingresar los dos catetos como datos:\nIngresa el primer cateto:");
        const catetoBString = prompt("Para ingresar los dos catetos como datos:\nIngresa el segundo cateto:");
        const catetoA = Number(catetoAString);
        const catetoB = Number(catetoBString);
        const resultado1 = Math.sqrt(catetoA*catetoA+catetoB*catetoB);
        console.log("El resultado de la hipotenusa es: " + resultado1);
        const dibujito2 = ("       /|\n      / |\n" +  resultado1.toPrecision(3)+ " /  |" + catetoA + "\n    /   |\n   /    |\n  /_____|\n" + "     "+ catetoB + "\n");
        console.log(dibujito2);

    break;

    case 2:
        const opciones2String = prompt("Para ingresar un cateto y un angulo (En Grados):\nTienes las siguientes opciones:\ncateto1 y angulo de arriba ->1.\ncateto2 y angulo de arriba->2.\ncateto1 y angulo de abajo->3.\ncateto2 y angulo de abajo ->4.");
        const opciones2 = Number(opciones2String);

        switch(opciones2){
            case 1:
                const catetoCaso1String = prompt("Ingresa el valor del cateto 1: ");
                const anguloCaso1String = prompt("Ingresa el valor del angulo de arriba: ");
                const catetoCaso1 = Number(catetoCaso1String);
                const anguloCaso1 = Number(anguloCaso1String);
                const resultadoCaso1 = (catetoCaso1/(Math.sin(anguloCaso1*(Math.PI/180))));
                console.log("El resultado de la hipotenusa es: " + resultadoCaso1);
            break;
            
            case 2:
                const catetoCaso2String = prompt("Ingresa el valor del cateto 2: ");
                const anguloCaso2String = prompt("Ingresa el valor del angulo de arriba: ");
                const catetoCaso2 = Number(catetoCaso2String);
                const anguloCaso2 = Number(anguloCaso2String);
                const resultadoCaso2 = (catetoCaso2/(Math.cos(anguloCaso2*(Math.PI/180))));
                console.log("El resultado de la hipotenusa es: " + resultadoCaso2);
            break;

            case 3:
                const catetoCaso3String = prompt("Ingresa el valor del cateto 1: ");
                const anguloCaso3String = prompt("Ingresa el valor del angulo de abajo: ");
                const catetoCaso3 = Number(catetoCaso3String);
                const anguloCaso3 = Number(anguloCaso3String);
                const resultadoCaso3 = (catetoCaso3/(Math.cos(anguloCaso3*(Math.PI/180))));
                console.log("El resultado de la hipotenusa es: " + resultadoCaso3);
            break;

            case 4:
                const catetoCaso4String = prompt("Ingresa el valor del cateto 2: ");
                const anguloCaso4String = prompt("Ingresa el valor del angulo de abajo: ");
                const catetoCaso4 = Number(catetoCaso4String);
                const anguloCaso4 = Number(anguloCaso4String);
                const resultadoCaso4 = (catetoCaso4/(Math.sin(anguloCaso4*(Math.PI/180))));
                console.log("El resultado de la hipotenusa es: " + resultadoCaso4);
            break;

            default:
              console.log("Has elegido una opcion NO válida.");
            break;

        }

    break;

    default:
        console.log("Has elegido una opcion NO válida.");
    break;

        
}
//jasjsjkdsjasjssjs




