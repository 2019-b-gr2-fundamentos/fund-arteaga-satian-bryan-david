import { DatosPokemon } from "./interfaces/pokemon.interface";
import * as prompts from 'prompts';



//Crear una estructura de datos con pokemones y ahora poder crear, actulizar, borrar


function main(): void{
    Crear();

   /*const readline = require('readline-sync');
   const elnombre = readline.question('Cual es tu nombre');
   console.log(elnombre);
*/
    


}

 async function Crear(){
    console.log('\t*******POKEDEX*******\nA continuacion crea tu propio pokemon:\n');
    const Preguntas = await prompts( [
        {
            type: 'text',
            name: 'Nombre',
            message: 'Ingresa el nombre de tu pokemon:',
        },
        {
            type: 'number',
            name: 'Numero',
            message: 'Ingresa el numero de tu pokemon: ',

        },
        {
            type: 'text',
            name: 'Tipo_Principal',
            message: 'Ingresa el tipo principal de tu pokemon:',
        },
        {
            type: 'number',
            name: 'Etapa_de_Evolucion',
            message: 'Ingresa en que etapa de evolucion esta tu pokemon:',
        },
        {
            type: 'text',
            name: 'Debilidad',
            message: 'Ingresa el tipo de debilidad de tu pokemon:',
        }
    ]);
    
    DarEstructuraALosDatos(Preguntas.Nombre, Preguntas.Numero, Preguntas.Tipo_Principal, Preguntas.Etapa_de_Evolucion, Preguntas.Debilidad);
    




}


async function DarEstructuraALosDatos(elname: string, elnumber: number, eltipo: string, laevol: number, ladebil: string){

    const MIPokemonCreado: DatosPokemon = {
        nombre: elname,
        numero: elnumber,
        tipoPrincipal: eltipo,
        numeroEvolucion: laevol,
        tipoDebilidad: ladebil,

    }
    console.log('\nEl pokemon que acabas de crear cumple con las siguientes caracteristicas:\n')
    console.log(MIPokemonCreado);

    console.log('\nPara modificar un dato de tu pokemon creado presiona --> 1.\nPara Eliminar tu pokemon presiona --> 2.\n');

    const OpcionAElegir: number = await prompts( {
        type: 'number',
        name: 'opcion',
        message: 'Elige: ',
    });

    console.log(OpcionAElegir+5);

    console.log(OpcionAElegir);
    if(OpcionAElegir == 1 || OpcionAElegir == 2){
        console.log('valido');
    }else{
        console.log('Opcion no valida');
    }
    switch(OpcionAElegir){
        case 1: 
        //INgresa la funcion de modificar
        break;

        case 2:
        //INgresa la funcion de eliminar
        break;

        default:
        console.log('Has elegido una opcion no valida');
        break;
    }
}



/*
const Pikachu: DatosPokemon ={
    nombre: 'Pikachu',
    numero: 25,
    tipoPrincipal: 'electrico',
    numeroEvolucion: 2,
    tipoDebilidad: 'tierra',
    
}

const Gastly: DatosPokemon = {
    nombre: 'Gastly',
    numero: 92,
    tipoPrincipal: 'fantasma',
    numeroEvolucion: 1,
    tipoDebilidad: 'psiquico',
}

const Squirtle: DatosPokemon = {
    nombre: 'Squirtle',
    numero: 7,
    tipoPrincipal: 'agua',
    numeroEvolucion: 1,
    tipoDebilidad: 'electrico',
}

const Cubone: DatosPokemon = {
    nombre: 'Cubone',
    numero: 104,
    tipoPrincipal: 'tierra',
    numeroEvolucion: 1,
    tipoDebilidad: 'planta',
}

*/



main();