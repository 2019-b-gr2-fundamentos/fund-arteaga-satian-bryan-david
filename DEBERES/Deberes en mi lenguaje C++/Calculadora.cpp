#include <iostream>
#include <stdio.h>
#include <math.h>
using namespace std;

int main(){
    system("color 02");
    cout<<"\tBienvenido, este programa simula una calculadora\n\nElija su opcion preferida:";
cout<<("\nSuma: 1.\nResta: 2.\nMultiflicacion: 3.\nDivision: 4.\nPotencia de un numero: 5. \n");
int ElegirOpcion;
 cout<<"\nIngresa la opcion que necesites: "; cin>>ElegirOpcion;

float valor1, valor2;
if(ElegirOpcion==1 || ElegirOpcion == 2 || ElegirOpcion==3 || ElegirOpcion==4){
cout<<"\nIngresa el primer valor: "<<endl; cin>>valor1;
cout<<"\nIngresa el segundo valor: "<<endl; cin>>valor2;
}
if(ElegirOpcion==5){
    cout<<"\nIngresa un numero:"<<endl; cin>>valor1;
    cout<<"\nA que numero quieres elevarlo? "<<endl; cin>>valor2;
}
cout<<endl;

switch(ElegirOpcion){

   



    case 1:
            cout<<"Has elegido la Suma: "<<endl<<valor1<<" + "<<valor2<<endl;
            cout<<"El resultado es: "; cout<<valor1+valor2;
            break;

    case 2:
            cout<<"Has elegido la Resta: "<<endl<<valor1<<" - "<<valor2<<endl;
            cout<<"El resultado es: "; cout<<valor1-valor2;
            break;

    case 3:
            cout<<"Has elegido la Multiplicacion: "<<endl<<valor1<<" * "<<valor2<<endl;
            cout<<"El resultado es: "; cout<<valor1*valor2;
            break;

    case 4:
        cout<<"Has elegido la Division: "<<endl;

        if(valor2 == 0){ cout<<"No se puede dividir para 0."; }
        else{
            cout<<valor1<<" / "<<valor2<<endl;
            cout<<"El resultado es: "; cout<<(valor1/valor2); }
            break;

    case 5:
        cout<<"Has elegido la potenciacion: "<<endl<<valor1<<"^"<<valor2;
        cout<<"\nEl resultado es: "<<endl; cout<<pow(valor1,valor2);
    break;

    default:
        cout<<"Has elegido un numero que NO esta en las opciones."<<endl;
        break;
        }

    return 0;
}
//:)