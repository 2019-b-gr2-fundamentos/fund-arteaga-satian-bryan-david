
let Jugadores = [];
const indice = Number(5);


// Se define el arreglo de solo ceros
for(let contadorUno = 0; contadorUno<indice; contadorUno++ ){
    Jugadores.push(0);
}

// Se manda un numero uno a una posicion random del vector
Jugadores[Math.floor(Math.random() * indice)] = 1;

//Saber si existe un floron o no
let existeFloron = false;

for( let j = 0; j<indice; j++){
    if(Jugadores[j]==1){
        existeFloron = true;
    }

}

if(existeFloron==true){
    console.log('Existe al menos un numero 1');
}
else{
    console.log('No hay ningun numero 1 en el floron');
}



console.log(`\nEl vector que se origino es: `);
console.log(Jugadores);


