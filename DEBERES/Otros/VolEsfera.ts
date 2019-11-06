console.log("Bienvenido, este programa calcula el volumen de una esfera\n");
const radioString = prompt("Ingresa el radio de la esfera (metros):");
const radio = Number(radioString);
const resultado = ((4/3)*Math.PI*(radio)*radio*radio);
console.log("el volumen de la esfera es: \n" + resultado.toPrecision(9) + " metros \n :)");
