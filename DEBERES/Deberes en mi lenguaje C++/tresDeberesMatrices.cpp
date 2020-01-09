#include <iostream>
#include<stdlib.h>
#include<math.h>
#include<stdio.h>
using namespace std;

//Escriba un programa qeu verifique si dos matrices son iguales
//(L Matriz es de dos dimensiones n*m)
//"n" y "m" pueden ser iguales o distintas.


//EJERCICIO 2: SUMAR FILAS Y SUMASR COLUMNAS
//EFJERCICIO 3: INTERCAMBIAR COLUMNAS Y FILAS


void CrearMatrices();

int main(){
    CrearMatrices();





    return 0;
    system("pause");
    
}

void CrearMatrices(){
    float MatrizUno[3][2] = 
    {
        {2,1},
        {1,4},
        {1,2}
    };

    float MatrizDos[2][3] =
    {
        {2,5,1},
        {1,1,1},
    };

    int tamanoFila = sizeof(MatrizUno)/ sizeof(MatrizUno[0]);
    cout<<tamanoFila<<endl;
    int tamanoColumna = sizeof(MatrizUno[0]) / sizeof(MatrizUno[0]);
    cout<<tamanoColumna<<endl;


    

}
