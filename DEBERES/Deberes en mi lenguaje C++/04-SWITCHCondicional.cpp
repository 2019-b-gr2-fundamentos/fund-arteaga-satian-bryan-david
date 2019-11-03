#include<iostream>
#include<math.h>
using namespace std;

int main(){
    /*
Este programa define si la division de dos numeros es exacta o no.
*/
cout<<"\tBienvenido, este programa define si la division entre dos numeros enteros es exacta.\n\n";
int numUno, numDos, resultado;
cout<<"Ingrese el primer numero: \n"; cin>>numUno;
cout<<"Ingrese el segundo numero: \n"; cin>>numDos;


resultado = (numUno/numDos);
int residuo = numUno % numDos;


if(numDos!= 0){
    
    switch(residuo){
    case 0: 
        cout<<"El resultado de la division es: "<<resultado<<"\nPor lo tanto la division es EXACTA. ";
        break;
    default:
        cout<<"El resultado de la division es: "<<resultado<<"\nPor lo tanto la division NO es EXACTA. ";
        break;
    }

}else{
    cout<<"No se puede dividir para 0.";
}




    return 0;
}