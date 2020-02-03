import { filter } from "./02-filter";

function main(){
   const arregloEstudiantes = [
       {id:1, nombre:"Adrian", nota: 7},
       {id:2, nombre:"Vicente", nota: 9},
       {id:3, nombre:"Wendy", nota: 4},
       {id:4, nombre:"Carolina", nota: 10},
       {id:5, nombre:"Carlos", nota: 6.5},
   ];

   // OPERADOR - FOREACH
   // Enviamos -> NADA
   // Recibimos -> NADA
   const respuestaForEach = arregloEstudiantes
        .forEach(
            function(valorActual, indice, arreglo){
                console.log(valorActual.nota);
            }
        );
    console.log(respuestaForEach); // undefined

    // Map -> Transformar el arreglo (Mutar el arr)
    // ENVIAMOS -> valorActual modificado
    // RECIBIR -> Nuevo arreglo con valores modif.

    const respuestaMap = arregloEstudiantes
            .map( // Devuelve el arreglo Modificado!
                function(valorActual, i, arreglo){
                    const nuevoObjeto = {
                        id:valorActual.id,
                        nombre:valorActual.nombre,
                        nota20: valorActual.nota * 2
                    };
                    return nuevoObjeto;
                }
            );
    console.log('Respuesta MAP', respuestaMap);
    console.log('arregloEstudiantes', arregloEstudiantes);

    // Filter -> filtra el arreglo
    // ENVIAMOS -> CONDICION
    // RECIBIR -> Nuevo arreglo con valores filtrados

    const respuestaFilter = arregloEstudiantes
                .filter(
                    function(valorActual, i, arreglo){
                        const condicion7 = valorActual.nota >= 7;
                        const condicion5 = valorActual.nota < 5;
                        // Condicion es un TRUTY o un TRUE
                        return condicion7 || condicion5;
                    }
                );
    console.log('respuestaFilter', respuestaFilter);
    console.log('arregloEstudiantes', arregloEstudiantes);

    // AND -> every (todos cumplan) / OR -> some (uno cumpla)

    // Some -> Devuelve verdadero o falso dep. Condicion
    //         SI ALGUNO CUMPLE DEVUELVE  TRUE
    //         SI NINGUNO CUMPLE DEVUELVE FALSE
    // ENVIAMOS -> CONDICION
    // RECIBIR -> Booleano

    const respuestaSome = arregloEstudiantes
                .some(
                    function(valorActual, i, arr){
                        const condicion = valorActual.nota < 4;
                        // CONDICION TRUTY O TRUE
                        return condicion;
                    }
                );
    console.log('respuestaSome', respuestaSome);
    console.log('arregloEstudiantes', arregloEstudiantes);

    // Every -> Devuelve verdadero o falso dep. Condicion
    //         SI TODOS CUMPLEN LA CONDICION TRUE
    //         SI ALGUNO NO CUMPLE LA CONDICION FALSE
    // ENVIAMOS -> CONDICION
    // RECIBIR -> Booleano
    const respuestaEvery = arregloEstudiantes
                .every(
                    function(valorActual, i, arr){
                        const condicion = valorActual.nota >= 7;
                        return condicion;
                    }
                );
    console.log('respuestaEvery', respuestaEvery);
    console.log('arregloEstudiantes', arregloEstudiantes);


    // Reduce -> Devuelve un valor con el calculo aplicado
    // ENVIAMOS -> CALCULO
    // RECIBIR -> VALOR

    const respuestaReduce = arregloEstudiantes
            .reduce(
                function(acumulador, valorActual, i, arr){ // Funcion
                    const calculo = acumulador - valorActual.nota;
                    return calculo;
                },
                100 // Valor inicial del acumulador
            );
    console.log('respuestaReduce', respuestaReduce);
    console.log('promedio', respuestaReduce / arregloEstudiantes.length);
    console.log('arregloEstudiantes', arregloEstudiantes);

    const respuestaFilterNuestro = filter(
            arregloEstudiantes,
            function(valorActual, i, arr){
                console.log('Valor: ', valorActual);
                console.log('Indice: ', i );
                console.log('Arreglo: ', arr);
                return valorActual.nota >= 7;
            }
        );
    console.log('respuestaFilterNuestro',respuestaFilterNuestro);
    console.log('arregloEstudiantes', arregloEstudiantes);


}
main();