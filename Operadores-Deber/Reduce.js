"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function REDUCE(misNotas) {
    var acumulador = 100;
    for (var i = 0; i < misNotas.length; i++) {
        acumulador -= misNotas[i].nota;
    }
    return acumulador;
}
exports.REDUCE = REDUCE;
