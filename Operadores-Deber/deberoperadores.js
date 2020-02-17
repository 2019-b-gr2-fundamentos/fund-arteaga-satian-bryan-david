"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forEach_1 = require("./forEach");
var Some_1 = require("./Some");
var Every_1 = require("./Every");
var Reduce_1 = require("./Reduce");
var Map_1 = require("./Map");
var Filter_1 = require("./Filter");
//
function main() {
    var notasEstudiantes = [
        { id: 1, nombre: "David", nota: 9.6 },
        { id: 2, nombre: "Carlos", nota: 7 },
        { id: 3, nombre: "Sebastian", nota: 5.2 },
        { id: 4, nombre: "Mayu", nota: 6.8 },
        { id: 5, nombre: "Erick", nota: 8.2 },
        { id: 6, nombre: "Daniela", nota: 4 },
    ];
    console.log('Las notas de cada estudiante son: \n', notasEstudiantes, '\n');
    //OPERADOR FOR EACH
    console.log('\nOPERADOR FOREACH: ', forEach_1.FOREACH(notasEstudiantes));
    //OPERADOR SOME
    console.log('\nOPERADOR SOME: Hay al menos un estudiante con nota mayor a 7?: ', Some_1.SOME(notasEstudiantes));
    //OPERADOR EVERY
    console.log('\nOPERADOR EVERY: Todos los estudiantes tienen su nota mayor a 7? ', Every_1.EVERY(notasEstudiantes));
    //OPERADOR REDUCE
    console.log('\nOPERADOR REDUCE: ', Reduce_1.REDUCE(notasEstudiantes));
    //OPERADOR MAP
    var nuevasnotasMapeadas = Map_1.MAP(notasEstudiantes, function (valorActual) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            notaportres: (valorActual.nota * 3).toFixed(2)
        };
        return nuevoObjeto;
    });
    console.log('\nOPERADOR MAP: \n', nuevasnotasMapeadas);
    //OPERADOR FILTER
    var nuevasNotasfiltradas = Filter_1.FILTER(notasEstudiantes, function (valorActual) {
        var notasMayoresSiete = valorActual.nota >= 7;
        return notasMayoresSiete;
    });
    console.log('\noOPERADOR FILTER: \n', nuevasNotasfiltradas);
    console.log('\n\n', notasEstudiantes);
}
main();
