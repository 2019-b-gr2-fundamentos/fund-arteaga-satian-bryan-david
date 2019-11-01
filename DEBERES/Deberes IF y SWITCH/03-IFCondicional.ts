/*
En este programa se introduce  la nota del primer y segundo Bimestre,
 luego define si se aprobó no el semestre*/

 console.log("\tBienvenido, este prgrama define si pasas o no el semestre\nEl sistema de calificacion es sobre 10.\n");
 const notaPrimString = prompt("Ingresa la nota del primer bimestre");
 const notaSegString = prompt("Ingresa la nota del segundo bimestre");
 const notaPrim = Number(notaPrimString);
 const notaseg  = Number(notaSegString);

 const promedio = Number((notaPrim+notaseg)/2);
 const notasValidas = promedio >=0 && promedio <=10;

 //Ingresan los condicionales
 if(notasValidas){
    if(promedio >=0 && promedio < 7){
     console.log("Tu promedio es: " + promedio);
     console.log("Has reprobado, segunda es todo.");
    }

    if(promedio >=7 && promedio <=10){
    console.log("Tu promedio es: " + promedio);
     console.log("Has aprobado, FELICITACIONES.");
    }
} else{
    console.log("Tu promedio no esta en el rango establecido de 0 a 10, ingresaste mal tus notas.");
}

