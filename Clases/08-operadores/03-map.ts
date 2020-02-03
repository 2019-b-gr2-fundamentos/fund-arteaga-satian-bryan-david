export function map(
    arregloOriginal: any[], //1
    funcion: (
        valorActual: any, 
        indice?: number,
        arreglo?: any[]) => any
): any[] {
    const nuevoArreglo = [];
    const arreglo = [...arregloOriginal]  //2
    for(let i = 0; i < arreglo.length; i++ ){
        const clon = [...arreglo] //Crear Clo por iteracion
        const respuestaFuncion = funcion(
            clon[i],
            i,
            clon, // Clon del Clon para que juegye el prog
        );
        nuevoArreglo.push(respuestaFuncion);
    }
    return nuevoArreglo;
}