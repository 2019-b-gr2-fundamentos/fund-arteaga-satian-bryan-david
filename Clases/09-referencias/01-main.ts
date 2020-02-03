//Referencias
function main(){
    let uno = 1;
    let dos = uno;  //Se guarda elValor
    let tres = dos; //Se guarda el Valor
    console.log('uno', uno); //1
    console.log('dos', dos); //1
    console.log('tres', tres);  //1
    
    
    uno = 5;
    console.log('\nuno', uno);  //5
    console.log('dos', dos);  //1
    console.log('tres', tres); //1

    let arreglito = [1,2,3];
    let miOtroArreglito = [];
    let a = arreglito[0];
    let b = arreglito[1];
    console.log('\narreglito', arreglito); // [1,2,3]
    console.log('a', a);  //1
    console.log('b', b); //2

    miOtroArreglito = arreglito //Referencia a la direccion de memoria
    miOtroArreglito.push(2); //Al hacer esto, tambien estamos modificando al 'arreglito'
    arreglito[0] = 9; //Al hacer esto modificamos 'arreglito' pero tambien le modificamos a 'miOtroArreglito'
    arreglito[1] = 10;
    console.log('\narreglito', arreglito); //[9,10,3,2]
    console.log('miOtroArreglito', miOtroArreglito); ////[9,10,3,2]
    console.log('a', a); //1
    console.log('b', b); //2


    //Ahora con estructuras de datos
    let adrian ={
        nombre: 'Adrian',
        sueldo: 1.12
    };
    let soloELNombre = adrian;
    console.log('adrian', adrian);
    console.log('soloElNombre', soloELNombre);

    delete adrian.nombre //Es como si tambien se haria un delete soloElNOmbre.nombre,, si elimino a uno, elimino tambien al otros
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

    let miArreglitoClonado = [...arreglito,
    // ...arreglito,(Se pueden copiar varios arreglos)
    // ...arreglito, 
    ];
    miArreglitoClonado.push(100); // Ahora solo agrega a miArreglitoClonado y ya no a 'arreglito'
    console.log('\narreglito', arreglito);
    console.log('miArreglitoClonado',miArreglitoClonado);

    //Ahora con estructura de datos
    const ClonadoNombre = { ...adrian};
    ClonadoNombre['pais'] = 'Ecuador'; //Solo se agrega al clonado y ya no a adrian
    console.log('\nadrian' ,adrian);
    console.log('ClonadoNombre', ClonadoNombre);


    

}

main();