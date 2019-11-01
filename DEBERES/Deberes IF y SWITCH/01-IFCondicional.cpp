#include <iostream>
#include <stdio.h>
#include <math.h>
using namespace std;

int main(){
    system("color 02");
    cout<<"\tBienvenido,este programa determina si la ec. cuadratica tiene soluciones reales."<<endl;
cout<<"A continuacion introduzca a, b y c.\n de la forma ax^2+bx+c=0\n"<<endl;
float varA,varB,varC;

cout<<"Introduce 'a': "; cin>>varA;
cout<<"Introduce 'b': "; cin>>varB;
cout<<"Introduce 'c': "; cin>>varC;
cout<<endl;

float discriminante = (varB*varB-4*varA*varC); // dicriminante para sabes si es positivo o negativo
float raiz = sqrt(discriminante); // funcion para sacar la raiz
float solucion1 = ((-varB+raiz)/2*varA); 
float solucion2 = ((-varB-raiz)/(2*varA));   // soluciones de la ecuacion cuadratica
float solReales = discriminante >=0;

// Ingresan condicionales
if(solReales){
    if(discriminante>0){
    cout<<"Esta ecuacion tiene dos soluciones reales, las cuales son: "<<endl;
    cout<<"x= "<<solucion1<<endl<<"x= "<<solucion2<<endl;
    }

    if(discriminante == 0){
    cout<<"Esta ecuacion solo tiene una solucion real y es: "<<endl;
    cout<<"x= "<<solucion1<<endl;
    }

}else{
    cout<<"Esta ecuacion NO tiene soluciones Reales.";
    }

    return 0;
}
