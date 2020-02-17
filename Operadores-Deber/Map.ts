export function MAP(misNotas: any[], funcionDeAyuda){
    const nuevasArreglo = [];
    for(let i = 0; i<misNotas.length; i++){
         nuevasArreglo.push(funcionDeAyuda(misNotas[i]));
    }

    return nuevasArreglo; 
}