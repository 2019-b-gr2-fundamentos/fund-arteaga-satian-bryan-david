export function EVERY(misNotas: any[]){
    let verdaderoOFalso = false;
    for(let i =0; i<misNotas.length; i++){

        if(misNotas[i].nota < 7){
            verdaderoOFalso = false
        }
    }
    return verdaderoOFalso;
}