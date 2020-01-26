"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Crear, borrar actualizar, buscar
var prompts = require("prompts");
var leerarchivo_1 = require("./leerarchivo");
function main() {
    CrearPokemon();
}
function CrearPokemon() {
    return __awaiter(this, void 0, void 0, function () {
        var contenidoArchivo, convertimosArchivo, pokedex, preguntas, respuestas, MiPokemon, preguntarSiSeModifica, arregloDenombres, buscarnombre_1, indicenombreEncontrado, POkemonEditadopreguntas, POkemonEditadoRespuestas, POkemonEditadoEnLaEstructura;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contenidoArchivo = leerarchivo_1.leerArchivoPokemon('./listadeotrospokemones.txt');
                    convertimosArchivo = JSON.parse(contenidoArchivo);
                    pokedex = convertimosArchivo;
                    console.log('Tu Pokedex:\n', pokedex);
                    //**************Aqui va la parte de crear un nuevo pokemon ************
                    console.log('\n\tAhora agrega TU PROPIO POKEMON A LA POKEDEX!!!!\n');
                    preguntas = [
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
                    ];
                    return [4 /*yield*/, prompts(preguntas)];
                case 1:
                    respuestas = _a.sent();
                    MiPokemon = {
                        Nombre: respuestas.Nombre,
                        Numero: respuestas.Numero,
                        Tipo_Principal: respuestas.Tipo_Principal,
                        Etapa_de_Evolucion: respuestas.Etapa_de_Evolucion,
                        Debilidad: respuestas.Debilidad
                    };
                    pokedex.push(MiPokemon);
                    console.log('\n\tTu nueva POKEDEX es: \n ', pokedex);
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'decision',
                            message: '\nDeseas modificar algun Pokemon?\nSi -> 1\nNo -> Presiona cualquier tecla\n'
                        })];
                case 2:
                    preguntarSiSeModifica = _a.sent();
                    if (!(preguntarSiSeModifica.decision == 1)) return [3 /*break*/, 5];
                    console.log('\nIngresa el nombre del pokemon que deseas modificar: \n');
                    arregloDenombres = [pokedex[0].Nombre, pokedex[1].Nombre, pokedex[2].Nombre];
                    console.log(arregloDenombres);
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'Nombre',
                            message: '\nNombre?:'
                        })];
                case 3:
                    buscarnombre_1 = _a.sent();
                    indicenombreEncontrado = pokedex.findIndex(function (valorActual) {
                        return valorActual.Nombre == buscarnombre_1.Nombre;
                    });
                    POkemonEditadopreguntas = [
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
                    ];
                    return [4 /*yield*/, prompts(POkemonEditadopreguntas)];
                case 4:
                    POkemonEditadoRespuestas = _a.sent();
                    POkemonEditadoEnLaEstructura = {
                        Nombre: POkemonEditadoRespuestas.Nombre,
                        Numero: POkemonEditadoRespuestas.Numero,
                        Tipo_Principal: POkemonEditadoRespuestas.Tipo_Principal,
                        Etapa_de_Evolucion: POkemonEditadoRespuestas.Etapa_de_Evolucion,
                        Debilidad: POkemonEditadoRespuestas.Debilidad
                    };
                    pokedex[indicenombreEncontrado] = POkemonEditadoEnLaEstructura;
                    console.log('\n\tTu nueva POKEDEX es: \n ', pokedex);
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
main();
