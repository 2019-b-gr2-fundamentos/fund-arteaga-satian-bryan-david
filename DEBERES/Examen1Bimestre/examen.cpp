/*
hacer la calculadora que ya hicimos con las cuatro operaciones solo en nuestro lenguaje, luego sumar otras seis operaciones 
a mi me tocó hacer una funcion de factorial.
el examen es hasta antes del 11 de diciembre
*/

#include <iostream>
#include <stdlib.h>
#include <stdio.h>
#include <math.h>
#include <conio.h>
using namespace std;


// sE DEFINEN LAS FUNCIONES QUE VAMOS A UTILIZAR POSTERIORMENTE
float Sumar(float numUno, float numDos);
float Restar(float numUno, float numDos);
float Multiplicar(float numUno, float numDos);
float Dividir(float numUno, float numDos);
float Factorial(float numUno, float numDos);
void calcu();
void seguirEnELPrograma();

// FUNCION PRINCIPAL FUNCION PRINCIPAL FUNCION PRINCIPAL
int main(){
    system("color 04");
    calcu(); //LA FUNCION MAIN ES LA PRINCIPAL, DENTRO DE ESTA SE HACE EJECUTAR LA FUNCION CALCU.
    

    getch();
    return 0;
}

  //  FUNCION PRINCIPAL FUNCION PRINCIPAL FUNCION PRINCIPAL 

//SE DEFINE LO QUE HACEN CADA UNA DE LAS FUNCIONES
float Sumar(float numUno, float numDos){
    return numUno + numDos;
}
float Restar(float numUno, float numDos){
    return numUno - numDos;
}
float Multiplicar(float numUno, float numDos){
    return numUno * numDos;
}
float Dividir(float numUno, float numDos){
    return numUno / numDos;
}
int Factorial(float numUno){
    int resultadofactorial = 1;
    for(int i=1; i<= numUno; i++){
        resultadofactorial = resultadofactorial * i;
        if(i<numUno){
        cout<<i<<"*";
        }else{
            cout<<i<<"."<<endl;
        }
    }
    

    return resultadofactorial;
}

void calcu(){
    cout<<"\n\n\n\tBienvenido, este programa simula una calculadora\n\nElija su opcion preferida:";
    cout<<("\nSuma: 1.\nResta: 2.\nMultiplicacion: 3.\nDivision: 4.\nFactorial 5. \nSALIR 6.\n");
    string elegirOpcion; cin>>elegirOpcion;
    bool opcionSuma = elegirOpcion == "1" || elegirOpcion == "suma" || elegirOpcion == "Suma";
    bool opcionResta = elegirOpcion =="2" || elegirOpcion =="resta" ||elegirOpcion =="Resta";
    bool opcionMultiplicacion = elegirOpcion =="3" || elegirOpcion =="multiplicacion" ||elegirOpcion == "Multiplicacion";
    bool opcionDivision = elegirOpcion == "4" || elegirOpcion == "division" || elegirOpcion == "Division"; 
    bool opcionFactorial = elegirOpcion =="5" || elegirOpcion =="factorial" ||elegirOpcion == "Factorial";
    bool opcionSALIR = elegirOpcion =="6" || elegirOpcion == "salir";
    bool opcionesValidas = opcionSuma || opcionResta || opcionMultiplicacion ||opcionDivision || opcionFactorial || opcionSALIR;
    bool opBasicas = opcionSuma || opcionResta || opcionMultiplicacion ||opcionDivision;

    

    if(opcionesValidas){
        if(opBasicas){
            float numUno, numDos;
            cout<<"\nPor favor ingresa el primer numero:"<<endl; cin>>numUno;
            cout<<"Por favor ingresa el segundo numero: "<<endl; cin>>numDos;
            float resultado = 0;
            
            if(opcionSuma){
                cout<<"----------------------------------";
                cout<<"\nHas elegido la suma"<<endl;
                cout<<endl<<numUno<<"+"<<numDos<<endl;
                resultado = Sumar(numUno, numDos);
            }
            if(opcionResta){
                cout<<"----------------------------------";
                 cout<<"\nHas elegido la resta"<<endl;
                cout<<endl<<numUno<<"-"<<numDos<<endl;
                resultado = Restar(numUno, numDos);
            }
            if(opcionMultiplicacion){
                cout<<"----------------------------------";
                 cout<<"\nHas elegido la multiplicacion"<<endl;
                cout<<endl<<numUno<<"*"<<numDos<<endl;
                resultado = Multiplicar(numUno, numDos);
            }
            if(opcionDivision){
                cout<<"----------------------------------";
                 cout<<"\nHas elegido la division"<<endl;
                cout<<endl<<numUno<<"/"<<numDos<<endl;
                resultado = Dividir(numUno, numDos);
            }

            cout<<"El resultado es: "<<endl<<resultado<<endl;
            cout<<"\n----------------------------------";
            cout<<endl<<endl;
            seguirEnELPrograma();

        }

        if(opcionFactorial){
            cout<<"----------------------------------";
            cout<<"\nHas elegido la operacion factorial"<<endl<<"Ingresa un numero entero: "<<endl;
            int numUno, resultado;
            cin>>numUno; cout<<endl;
            resultado = Factorial(numUno);
            cout<<"El resultado es: "<<endl<<resultado<<endl;
            cout<<"\n----------------------------------";
            cout<<endl<<endl;
            seguirEnELPrograma();
            
        }

        if(opcionSALIR){
            cout<<"\n\tSAYONARA.\n";
        }
        
    }else{
        cout<<"\nHas elegido una opcion no valida"<<endl;
        cout<<endl<<endl;
        calcu();
    }
   
   

}

void seguirEnELPrograma(){
    int seleccionar;
    cout<<"\nHacer otra operacion: 1\nSALIR: 2\n";
    cin>>seleccionar;
    switch (seleccionar){
    case 1:
        main();
        break;
    case 2: 
        cout<<"\n\tSAYONARA.";
        break;
    default:
        cout<<"\nHas elegido una opcion no valida\n";
        seguirEnELPrograma();
        break;
    }

    
}
 
    
    



