export function REDUCE(misNotas: any[]){
    let acumulador = 100;
    for(let i = 0; i<misNotas.length; i++){
        acumulador -= misNotas[i].nota;

    }
    return acumulador;  
}