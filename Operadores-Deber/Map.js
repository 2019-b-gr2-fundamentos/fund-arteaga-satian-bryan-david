"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MAP(misNotas, funcionDeAyuda) {
    var nuevasArreglo = [];
    for (var i = 0; i < misNotas.length; i++) {
        nuevasArreglo.push(funcionDeAyuda(misNotas[i]));
    }
    return nuevasArreglo;
}
exports.MAP = MAP;
