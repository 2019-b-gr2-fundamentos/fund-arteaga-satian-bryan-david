//Escriba un programa qeu verifique si dos matrices son iguales
//(L Matriz es de dos dimensiones n*m)
//"n" y "m" pueden ser iguales o distintas.


//EJERCICIO 2: SUMAR FILAS Y SUMASR COLUMNAS
//EFJERCICIO 3: INTERCAMBIAR COLUMNAS Y FILAS





function CrearMatrices(): void{
    const Unomatriz: number[][] = [
        [3,2,1],
        [1,2,3]
    ];

    const Dosmatriz: number[][] = [
        [4,5,6],
        [7,8,5]
    ];

    const Tresmatriz: number[][] = [
        [3,2,1],
        [1,2,3]
    ];
    
   
    
    const filaMUno: number = Unomatriz.length;  //defino filas y columnas para los dos arreglos elegidos
    const columnaMUno: number = Unomatriz[0].length;
    const filaMDos: number = Dosmatriz.length;
    const columnaMDos: number = Dosmatriz[0].length;
    const FyC: boolean = Verificarfilasycolumnas( filaMUno, columnaMUno, filaMDos, columnaMDos); //ingresa la nueva funcion
    if(FyC == true){
        VerificadorDeNumeros(Unomatriz, Dosmatriz);
    }

}

function Verificarfilasycolumnas(filamMUno: number, columnaMUno: number, filaMDos: number, columnaMDos: number): boolean {
    let FyC: boolean;
    if(filamMUno == filaMDos && columnaMUno == columnaMDos){
        FyC = true;
    }else{
        FyC = false;
    }

    if(FyC == true){
        console.log("\nEl numero de filas y columnas son iguales.\n");
    }else{
        console.log("Las filas o las columnas son diferentes en las dos matrices, por lo tanto no pueden ser matrices iguales.\n")
    }

    return FyC;

}

function VerificadorDeNumeros(matrizUno: number[][], matrizDos: number[][]): void{

    /*for(let j = 0; j<3; j++){
        console.log(`Matriz 1:${matrizUno[0][j]} , \n`);
        console.log(`Matriz 2: ${matrizDos[0][j]} \n`)
    } */
   

    let VerificaNumeros: boolean= true;
    for(let i = 0; i<3; i++){
        if(matrizUno[0][i] != matrizDos[0][i]){
            VerificaNumeros = false;
        } 
        if(matrizUno[1][i] != matrizDos[1][i]){
            VerificaNumeros = false;
        }
    }

    console.log(`Verificador: ${VerificaNumeros} \n`);
    if(VerificaNumeros == true){
        console.log("Y ademas las matrices que elegiste son iguales");
    }else{
        console.log("Sin embargo las matrices que elegiste NO son iguales");
    }
    
    

}



//FUNCION PRINCIPAL ----------------

CrearMatrices();

   