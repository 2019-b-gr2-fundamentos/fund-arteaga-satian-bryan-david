export function FILTER(misNotas: any[], funcionDeAyuda){
    const miNuevoArreglo = [];
    for(let i = 0; i<misNotas.length; i++){
        if(funcionDeAyuda(misNotas[i])){
            miNuevoArreglo.push(misNotas[i]);
        }
    }
    return miNuevoArreglo;
}