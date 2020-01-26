"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerArchivoPokemon(path) {
    var resultado = fs.readFileSync(path, 'utf-8');
    return resultado;
}
exports.leerArchivoPokemon = leerArchivoPokemon;
