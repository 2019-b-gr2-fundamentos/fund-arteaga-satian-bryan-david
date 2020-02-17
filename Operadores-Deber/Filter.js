"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FILTER(misNotas, funcionDeAyuda) {
    var miNuevoArreglo = [];
    for (var i = 0; i < misNotas.length; i++) {
        if (funcionDeAyuda(misNotas[i])) {
            miNuevoArreglo.push(misNotas[i]);
        }
    }
    return miNuevoArreglo;
}
exports.FILTER = FILTER;
