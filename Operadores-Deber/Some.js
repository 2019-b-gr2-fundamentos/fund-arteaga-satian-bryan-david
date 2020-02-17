"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SOME(misNotas) {
    var verdaderoOFalso = false;
    for (var i = 0; i < misNotas.length; i++) {
        if (misNotas[i].nota >= 7) {
            verdaderoOFalso = true;
        }
    }
    return verdaderoOFalso;
}
exports.SOME = SOME;
