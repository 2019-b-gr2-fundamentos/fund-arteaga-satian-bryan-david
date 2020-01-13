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
bool CompararFilasyColumnas(int filaUno, int columnaUno, int filaDos, int columnaDos);
void CompararElementos();

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

  /*  float MatrizDos[2][3] =
    {
        {2,5,1}, 
        {1,1,1},
    };
    */

    float MatrizDos[3][2] = 
    {
        {2,1},
        {1,4},
        {1,2}
    };

    int tamanoFilaUno = sizeof(MatrizUno)/ sizeof(MatrizUno[0]); // con el sizeof definimos el tamno pero en bytes.
    int tamanoColumnaUno = (sizeof(MatrizUno[0]) / sizeof(MatrizUno[0][0])); // Definimos el tamano de las F y C

    int tamanoFilaDos = sizeof(MatrizDos)/ sizeof(MatrizDos[0]); // con el sizeof definimos el tamno pero en bytes.
    int tamanoColumnaDos = (sizeof(MatrizDos[0]) / sizeof(MatrizDos[0][0])); // Definimos el tamano de las F y C
    
    //Mando a la funcion a evaluar si las dimensiones son iguales.
   bool FilasyColumnas =CompararFilasyColumnas(tamanoFilaUno, tamanoColumnaUno, tamanoFilaDos, tamanoColumnaDos);
    //Creo un condicional parque seguira con el programa.
    if(FilasyColumnas == true){
        //conmparo los numeros de la filas y luego procedo a las columnas.
         bool VoF = true; // con este verifico que siempre se mantenga en true 
         int ContadorColumna = 0;
         int ContadorFila = 0;
        do{
            do{
                if(MatrizUno[ContadorFila][ContadorColumna] != MatrizDos[ContadorFila][ContadorColumna]){
                VoF = false;
                }
                ContadorColumna += 1;


            }while(VoF == true && ContadorColumna<tamanoColumnaUno);

                ContadorFila += 1;

        }while (VoF == true && ContadorFila<tamanoFilaUno); // hasta aqui acabo de comparar elementos

        if(VoF == true){
            cout<<"Las matrices que has ingresado son iguales. :)"<<endl;

        }else{
            cout<<"Las matrices que has ingresado NO son iguales. :("<<endl;
        }
        
    }

    



}

 bool CompararFilasyColumnas(int filaUno, int columnaUno, int filaDos, int columnaDos){
    bool resultadofilasycolumnas = false;
    if(filaUno == filaDos && columnaUno == columnaDos){
        resultadofilasycolumnas = true;
        return resultadofilasycolumnas;
        
        

    }else{
        cout<<"La dimension de las matrices que se introdujeron no son iguales, por lo tanto las matrices NO son iguales."<<endl;
        return resultadofilasycolumnas;
    }

}




