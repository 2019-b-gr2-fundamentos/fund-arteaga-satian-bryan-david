import { FOREACH } from "./forEach";
import { SOME } from "./Some";
import { EVERY } from "./Every";
import { REDUCE } from "./Reduce";
import { MAP } from "./Map";
import { FILTER } from "./Filter";

//

function main(){

    const notasEstudiantes = [
        {id: 1, nombre: "David", nota: 9.6},
        {id: 2, nombre: "Carlos", nota: 7},
        {id: 3, nombre: "Sebastian", nota: 5.2},
        {id: 4, nombre: "Mayu", nota: 6.8},
        {id: 5, nombre: "Erick", nota: 8.2},
        {id: 6, nombre: "Daniela", nota: 4}, 
    ];
    console.log('Las notas de cada estudiante son: \n', notasEstudiantes, '\n');

    //OPERADOR FOR EACH
    console.log('\nOPERADOR FOREACH: ', FOREACH(notasEstudiantes));
    
    //OPERADOR SOME
    console.log('\nOPERADOR SOME: Hay al menos un estudiante con nota mayor a 7?: ', SOME(notasEstudiantes));

    //OPERADOR EVERY
    console.log('\nOPERADOR EVERY: Todos los estudiantes tienen su nota mayor a 7? ', EVERY(notasEstudiantes));

    //OPERADOR REDUCE
    console.log('\nOPERADOR REDUCE: ', REDUCE(notasEstudiantes));
    

    //OPERADOR MAP
    const nuevasnotasMapeadas = MAP(notasEstudiantes,
        function(valorActual){
            const nuevoObjeto ={
                id: valorActual.id,
                nombre: valorActual.nombre,
                notaportres: (valorActual.nota * 3).toFixed(2)
            }
            return nuevoObjeto;
        }
    );

    console.log('\nOPERADOR MAP: \n', nuevasnotasMapeadas);

    //OPERADOR FILTER
    const nuevasNotasfiltradas = FILTER(notasEstudiantes,
        function(valorActual){
            const notasMayoresSiete = valorActual.nota >=7;
            return notasMayoresSiete;
        }
    );

    console.log('\nOPERADOR FILTER: \n', nuevasNotasfiltradas);
    console.log('\n\n', notasEstudiantes);

    
    
   
    









    
    
}

main();