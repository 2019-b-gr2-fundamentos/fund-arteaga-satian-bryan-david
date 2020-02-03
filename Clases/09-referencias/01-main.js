var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//Referencias
function main() {
    var uno = 1;
    var dos = uno; //Se guarda elValor
    var tres = dos; //Se guarda el Valor
    console.log('uno', uno); //1
    console.log('dos', dos); //1
    console.log('tres', tres); //1
    uno = 5;
    console.log('\nuno', uno); //5
    console.log('dos', dos); //1
    console.log('tres', tres); //1
    var arreglito = [1, 2, 3];
    var miOtroArreglito = [];
    var a = arreglito[0];
    var b = arreglito[1];
    console.log('\narreglito', arreglito); // [1,2,3]
    console.log('a', a); //1
    console.log('b', b); //2
    miOtroArreglito = arreglito; //Referencia a la direccion de memoria
    miOtroArreglito.push(2); //Al hacer esto, tambien estamos modificando al 'arreglito'
    arreglito[0] = 9; //Al hacer esto modificamos 'arreglito' pero tambien le modificamos a 'miOtroArreglito'
    arreglito[1] = 10;
    console.log('\narreglito', arreglito); //[9,10,3,2]
    console.log('miOtroArreglito', miOtroArreglito); ////[9,10,3,2]
    console.log('a', a); //1
    console.log('b', b); //2
    //Ahora con estructuras de datos
    var adrian = {
        nombre: 'Adrian',
        sueldo: 1.12
    };
    var soloELNombre = adrian;
    console.log('adrian', adrian);
    console.log('soloElNombre', soloELNombre);
    delete adrian.nombre; //Es como si tambien se haria un delete soloElNOmbre.nombre,, si elimino a uno, elimino tambien al otros
    soloELNombre['edad'] = 22; //Si agrego algo a uno, tambien le agrego al otro
    //soloElNombre.edad = 22;
    console.log('adrian', adrian);
    console.log('soloElNombre', soloELNombre);
    //NECESITAMOS ASIGNAR A MIOTROARREGLITO UNA NUEVA DIRECCION DE MEMORIA
    //1 --> FOR Llenamos un nuevo arreglo
    //2 --> Filter -> siemmpre true -> NUevo arreglo
    //3 -> Map -> NUevo arreglo
    // INMUTABILIDAD
    //JS -> Arreglos o Objetos -> Clon!
    //TODAS ESTAS OPCIONES QUIEREN HACER UN CLON DEL ARREGLO, PARA TRABAJAR CON ESE, TODO PARA NO AFECTAR
    //EL ARREGLO ORIGINAL
    var miArreglitoClonado = __spreadArrays(arreglito);
    miArreglitoClonado.push(100); // Ahora solo agrega a miArreglitoClonado y ya no a 'arreglito'
    console.log('\narreglito', arreglito);
    console.log('miArreglitoClonado', miArreglitoClonado);
    //Ahora con estructura de datos
    var ClonadoNombre = __assign({}, adrian);
    ClonadoNombre['pais'] = 'Ecuador'; //Solo se agrega al clonado y ya no a adrian
    console.log('\nadrian', adrian);
    console.log('ClonadoNombre', ClonadoNombre);
}
main();
