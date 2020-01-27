import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";
import { Estudiante } from "./interfaces/estudiante.inteface";
import * as prompts from 'prompts';
async function main(){

    let contador = 1;
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    console.log('contenidoArchivo', contenidoArchivo);
    //parsear -> texto -> estructura en memoria
    /*
    {
        "nombre": 'Adrian"
    }
    */
   let arregloCargadoDeArchivo;

    












   try{ //INTENTA EJECUTAR TODO ESTE CODIGO

   // throw new Error("He parado el programa porque he detectado algo");

    arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
   } catch(error){ // PERO SI HAY UN ERROR SE VA AL CATCH
    //arregloCargadoDeArchivo = [];

    
    console.error('Error parseando archivo');
    //Con esto hacemos que nos marque si se parsea o no el JSON , ademas, en caso que no valga
    //este va a seguir funcionando y nos ahorramos todas las lineas de error que suelen aparecer en el compilador

    //Ahora vamos a hacer que el programa necesariamente pare aproposito 
    throw new Error("EL ARCHIVO ESTA MAL PARSEADO");

   }

        //OPERADORES
        let minimoId = -1;
        arregloCargadoDeArchivo
            .forEach( //NO ENVIAN NADA Y NO SE LES DEVUELVE NADA, SIRVE PARA ITERAR
                function(valorActual){
                    const idActual = valorActual.id;
                    if(idActual > minimoId){
                        minimoId = idActual;
                    }

                }
            );
        minimoId = minimoId + 1;
        contador = minimoId;

    const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo;
    const arregloPreguntas = [
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }
    ];
    const respuestaEstudianteUno = await prompts(arregloPreguntas);
   

    const nuevoRegistroUno = {
        id: contador,
        nombre: respuestaEstudianteUno.nombre
    };
    contador = contador +1;
    arregloEstudiantes.push(nuevoRegistroUno);

    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    const nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador = contador +1;
    arregloEstudiantes.push(nuevoRegistroDos);

    console.log(arregloEstudiantes);

    console.log('\nCual usuario quieres editar?');
    console.log(arregloEstudiantes);

    //OPERADORES!!! -> REEMPLAZAR AL 'FOR'

    const idABuscar = await prompts({
        type: 'text',
        name: 'id',
        message: 'Ingresa el ID del registro a Editar'
    })

    const indiceEncontrado = arregloEstudiantes.findIndex( //return  CONDICION -> 
        function(valorActual, indice, arreglo){
            console.log(valorActual);
            //console.log(indice);
            //console.log(arreglo);
            return valorActual.id == idABuscar.id; // Nos devuelve el INDICE
        } //Si encuentra nos devuelve el indice
        //No encoentra
    )
        console.log('Indice encontrado:', indiceEncontrado);
        const nombreAEditar = await prompts({
            type: 'text',
            name: 'nombre',
            message: 'Ingresa el nuevo nombre'
        })

        arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
        console.log(arregloEstudiantes);


        const buscar = await prompts({
            type: 'text',
            name: 'nombre',
            message: 'Buscar por ID o por Nombre'
        });

        const estudianteEncontrado = arregloEstudiantes
            .find( //Return CONDICION
                function(valorActual){
                    return valorActual.nombre == buscar.nombre;
                }
            );
        console.log(estudianteEncontrado);

        const arregloTexto = JSON.stringify(arregloEstudiantes);
         //  JSON.stringify -> Convierte el objeto o arreglo que esta en memoria a texto
        console.log(arregloTexto);
        escribirArchivo(
            './ejemplo.txt',
            arregloTexto
        );
        






    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBRE :(\n';
    escribirArchivo('./ejemplo.txt', '');
    
   

   console.log(textoLeido+ nuevoContenido);

   */

}

main().then().catch();



