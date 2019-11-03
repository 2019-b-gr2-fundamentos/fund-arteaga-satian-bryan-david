#include <iostream>
#include <math.h>
#include <conio.h>
using namespace std;

//programa que simula un cajero automatico con saldo inicial de 1000 dolares.

int main () {
	int saldo_inicial=1000, opc;
	float extra, saldo=0, retiro;
	cout<<"\tBienvenido al cajero virtual"<<endl;
	cout<<"\n1. Ingresar dinero en cuenta. ";
	cout<<"\n2. Retirar dinero de la cuenta. ";
	cout<<"\n3. Salir. ";
	cout<<"\nOpcion: "; cin>>opc; cout<<endl;
	
	//Ingreso del condicional switch
	switch(opc){
		case 1: 
			cout<<"Digite la cantidad de dinero a ingresar: "; cin>>extra;
			saldo=saldo_inicial+extra;
			cout<<"\nDinero en cuenta: "<<saldo; break;
			
		case 2:
			cout<<"Digite la cantidad de dinero que va a retirar: "; cin>>retiro;
			if(retiro>saldo_inicial){ cout<<"\nNO posee la cantidad suficiente de dinero."<<endl;
			}
			else{ cout<<"\nSu saldo restante es: "<<saldo_inicial-retiro<<endl;
			} break;
		case 3: break;		
	}
	
	getch();	
	return 0;
}