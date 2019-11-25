function sumar(numUno:number, numDos:number):number{
return (numUno + numDos);

}
function restar(numUno:number, numDos:number):number{
return (numUno - numDos);

}
function multiplicar(numUno:number, numDos:number):number{
return (numUno * numDos);

}
function dividir(numUno:number, numDos:number): number{
return (numUno / numDos);

}

function main(){
    calculadora();
}

function calculadora(){
  const operacion:string =  prompt("Selecciona una operacion:\n 1. Suma\n 2. Resta \n 3. Multiplicacion\n 4. Division \n 5. Salir");

  const esSuma:boolean = operacion == 'suma' || operacion == '1';
  const esResta:boolean = operacion == 'resta' || operacion == '2';
  const esMultiplicacion:boolean = operacion == 'multiplicacion' || operacion == '3';
  const esDivision:boolean = operacion == 'division' || operacion == '4';
  const esSalir:boolean = operacion == 'salir' || operacion == '5';

  const estaValida:boolean = esSuma || esResta || esMultiplicacion || esDivision;

    if(estaValida){
        const numUno = +prompt("Numero 1");  //PONIENDO UN '+' ANTES DEL PROMPT SE CAMBIA A TIPO NUMBER
        const numDos = +prompt("Numero 2");
        let resultado = 0;

            if(esSuma){
              resultado =   sumar(numUno, numDos);
            }
            if(esResta){
              resultado =   restar(numUno, numDos);
            }
            if(esMultiplicacion){
              resultado =  multiplicar(numUno, numDos);
            }

            if(esDivision){
               resultado =  dividir(numUno, numDos);
            }
            
            console.log(resultado);
    }
    else if(esSalir){
        
            console.log('Adios');
        }
    else{
        console.log('Has elegido una opcion no valida');
        calculadora();
    }


    
}
/*
1) Seleccionar operacion
2) La seleccion no es valida
2.1.1) Vuelve a seleccionar la operacion
2.2) La seleccion es valida
2.2.1) Ingresar primer numero
2.2.2) Ingresar segundo numero
2.2.3)Ejecutar la operacion
*/
