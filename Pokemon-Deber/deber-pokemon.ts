// Crear, borrar actualizar, buscar
import * as  prompts from 'prompts';
import { leerArchivoPokemon } from './leerarchivo';
import { EstructuraPokemon } from './interfaces/estructurapokemon.interface';


function main(){
    CrearPokemon();


}




async function CrearPokemon() {

    const contenidoArchivo = leerArchivoPokemon('./listadeotrospokemones.txt');

  //  console.log('Tu Pokedex:\n', contenidoArchivo);
    const convertimosArchivo = JSON.parse(contenidoArchivo);
    const pokedex: EstructuraPokemon[] = convertimosArchivo;

    console.log('Tu Pokedex:\n', pokedex);

    //**************Aqui va la parte de crear un nuevo pokemon ************

    console.log('\n\tAhora agrega TU PROPIO POKEMON A LA POKEDEX!!!!\n')

    const preguntas = [
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
    ]
    const respuestas = await prompts(preguntas);

   // *********INGRESAMOS LOS DATOS A UNA ESTRUCTURA*****************

    const MiPokemon: EstructuraPokemon = {
        Nombre: respuestas.Nombre,
        Numero: respuestas.Numero,
        Tipo_Principal: respuestas.Tipo_Principal,
        Etapa_de_Evolucion: respuestas.Etapa_de_Evolucion,
        Debilidad: respuestas.Debilidad

    }

    pokedex.push(MiPokemon);

    console.log('\n\tTu nueva POKEDEX es: \n ', pokedex);

    const preguntarSiSeModifica = await prompts(
        {
            type: 'number',
            name: 'decision',
            message: '\nDeseas modificar algun Pokemon?\nSi -> 1\nNo -> Presiona cualquier tecla\n' 
        }

    )
    
    if(preguntarSiSeModifica.decision == 1){
        console.log('\nIngresa el nombre del pokemon que deseas modificar: \n');


    const arregloDenombres: string[] = [pokedex[0].Nombre, pokedex[1].Nombre, pokedex[2].Nombre];
    console.log(arregloDenombres);

            const buscarnombre = await prompts(
                {
                    type: 'text',
                    name: 'Nombre',
                    message: '\nNombre?:'
                }
            );
        
            const indicenombreEncontrado = pokedex.findIndex(
                function(valorActual){
                    return valorActual.Nombre == buscarnombre.Nombre; 
                }  
            );
        
            //tocaria agregar condicional para saber si hay o no.
        
            const POkemonEditadopreguntas = [
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
            ]
            const POkemonEditadoRespuestas = await prompts(POkemonEditadopreguntas);
            
            const POkemonEditadoEnLaEstructura: EstructuraPokemon = {
                Nombre: POkemonEditadoRespuestas.Nombre,
                Numero: POkemonEditadoRespuestas.Numero,
                Tipo_Principal: POkemonEditadoRespuestas.Tipo_Principal,
                Etapa_de_Evolucion: POkemonEditadoRespuestas.Etapa_de_Evolucion,
                Debilidad: POkemonEditadoRespuestas.Debilidad
        
            }
        
            pokedex[indicenombreEncontrado] = POkemonEditadoEnLaEstructura;
        
            console.log('\n\tTu nueva POKEDEX es: \n ', pokedex);

    }

    /*
    ACABEEEEEEEEEEE, PVTO EL QUE ME COPIE
    *///
    
}

main();