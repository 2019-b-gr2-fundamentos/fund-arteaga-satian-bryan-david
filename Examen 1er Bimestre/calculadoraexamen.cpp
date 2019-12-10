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
float Potencia(float numUno, float elevado);
void MinimoComunMultiplo(int numUno);
void NumeroParoImpar(int numUno);
void SolReal(float a, float b, float c);
float Hipotenusa(float catetoUno, float catetoDos);


void calcu();
void seguirEnELPrograma();

// FUNCION PRINCIPAL FUNCION PRINCIPAL FUNCION PRINCIPAL
int main(){
    system("color 02");
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
float Potencia(float numUno, float elevado){
    return pow(numUno, elevado);
}
void MinimoComunMultiplo(int numUno){
    int i = 2;
    int num = numUno;
	 while(i<=num){ 
		if(num%i==0){ 
            if(num!=i){
				cout<<i<<"*";
            }else{ 
				cout<<i<<".";
			}
		    num/=i;
			i-1;   
        }else{
		i++;
        }
    }
    cout<<endl;
}
void NumeroParoImpar(int numUno){
    if(numUno%2==0){
        cout<<"El numero que ingresaste es PAR\n";
    }else{
        cout<<"El numero que ingresaste es IMPAR\n";
    }
}
void SolReal(float a, float b, float c){
    float discriminante = ((b*b)-(4*a*c));
    cout<<"El discriminante es "<<discriminante<<" por lo tanto: "<<endl;
    if(discriminante>=0){
        cout<<"La ecuacion SI tiene soluciones Reales"<<endl;
    }else{
        cout<<"La ecuacion NO tiene soluciones Reales"<<endl;
    }
}
float Hipotenusa(float catetoUno, float catetoDos){
    
    float hipo = sqrt((catetoUno*catetoUno)+(catetoDos*catetoDos));
    return hipo;
}



void calcu(){
    cout<<"\n\n\n\tBienvenido, este programa simula una calculadora especial\n\nElija su opcion preferida:";
    cout<<("\nSuma: ---> 1.\nResta: ---> 2.\nMultiplicacion: ---> 3.\nDivision: ---> 4.\nFactorial: ---> 5.\nPotencia de un numero: ---> 6.");
    cout<<("\nCalcular el M.C.M de un numero: ---> 7.\nSaber si un numero es par o impar: ---> 8.");
    cout<<("\nDeterminar si una Ec. Cuadratica tiene soluciones reales: ---> 9.\nCalcular la hipotenusa: ---> 10.\nSALIR: ---> 0.\n");
    int elegirOpcion; cin>>elegirOpcion;
    bool opcionSuma = elegirOpcion == 1;
    bool opcionResta = elegirOpcion ==2;
    bool opcionMultiplicacion = elegirOpcion ==3;
    bool opcionDivision = elegirOpcion == 4;
    bool opcionFactorial = elegirOpcion ==5;
    bool opcionPotencia = elegirOpcion == 6;
    bool opcionMCM = elegirOpcion == 7;
    bool opcionparimpar = elegirOpcion == 8;
    bool opcionReales = elegirOpcion == 9;
    bool opcionHipotenusa = elegirOpcion == 10;
    bool opcionSALIR = elegirOpcion ==0;
    bool opcionesValidas = opcionSuma || opcionResta || opcionMultiplicacion ||opcionDivision || opcionFactorial || opcionPotencia || opcionMCM || opcionparimpar || opcionReales || opcionHipotenusa || opcionSALIR;
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
            cout<<"\nHas elegido la operacion factorial"<<endl<<"Ingresa un numero entero: "<<endl;
            int numUno, resultado;
            cin>>numUno; cout<<endl;
            resultado = Factorial(numUno);
            cout<<"----------------------------------";
            cout<<"\nEl resultado es: "<<endl<<resultado<<endl;
            cout<<"\n----------------------------------";
            cout<<endl<<endl;
            seguirEnELPrograma();    
        }

        if(opcionPotencia){
            cout<<"\nHas elegido la potenciacion\n";
            float numUno;
            float elevado;
            float resultado;
            cout<<"Elige un numero: \n"; cin>>numUno;
            cout<<"A que numero quieres elevarlo?\n"; cin>>elevado;
            resultado = Potencia(numUno,elevado);
            cout<<"----------------------------------";
            cout<<"\nEl resultado es: "<<endl<<resultado<<endl;
            cout<<"\n----------------------------------";
            cout<<endl<<endl;
            seguirEnELPrograma();
        }

        if(opcionMCM){
            cout<<"\nPara calcular el MCM de un numero"<<endl<<"Ingresa un numero entero: "<<endl;
            int numUno; 
            cin>>numUno; cout<<endl;
            MinimoComunMultiplo(numUno);
            cout<<endl<<endl;
            seguirEnELPrograma();    
        }

        if(opcionparimpar){
            cout<<"\nIngresa un numero entero:"<<endl;
            int numUno; cin>>numUno;
            NumeroParoImpar(numUno);
            cout<<endl<<endl;
            seguirEnELPrograma();
        }

        if(opcionReales){
            cout<<"\nIngresa a, b, c de la forma ax^2+bx+c:\n";
            float a,b,c;
            cout<<"\nIngresa a: "; cin>>a; 
            cout<<"\nIngresa b: "; cin>>b;
            cout<<"\nIngresa c: "; cin>>c; cout<<endl;
            SolReal(a,b,c);
            cout<<endl<<endl;
            seguirEnELPrograma();
        }

        if(opcionHipotenusa){
            float catetoUno, catetoDos, resultado;
            cout<<"\nIngresa el primer cateto: "; cin>>catetoUno;
            cout<<"Ingresa el segundo cateto: "; cin>>catetoDos;
            resultado = Hipotenusa(catetoUno,catetoDos);
            cout<<"\nEl resultado de la hipotenusa es: "<<resultado<<endl;
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
 
    
    



