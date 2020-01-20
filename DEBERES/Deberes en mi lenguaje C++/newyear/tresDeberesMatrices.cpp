#include <iostream>
#include<stdlib.h>
#include<math.h>
#include<stdio.h>
using namespace std;

//Escriba un programa qeu verifique si dos matrices son iguales
//(L Matriz es de dos dimensiones n*m)
//"n" y "m" pueden ser iguales o distintas.


//EJERCICIO 2: SUMAR FILAS Y SUMASR COLUMNAS
//EFJERCICIO 3: INTERCAMBIAR diagonales


void CrearMatrices();
bool CompararFilasyColumnas(int filaUno, int columnaUno, int filaDos, int columnaDos);


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
/*
    float MatrizDos[2][3] =
    {
        {2,5,1}, 
        {1,1,1},
    };
  */  
 /*
 float MatrizDos[3][2] = 
    {
        {2,1},
        {1,4},
        {1,2}

    };
    */

    float MatrizDos[3][3] = 
    {
        {3,1,5},
        {1,9,6},
        {1,2,7}
    };
    

    int tamanoFilaUno = sizeof(MatrizUno)/ sizeof(MatrizUno[0]); // con el sizeof definimos el tamno pero en bytes.
    int tamanoColumnaUno = (sizeof(MatrizUno[0]) / sizeof(MatrizUno[0][0])); // Definimos el tamano de las F y C

    int tamanoFilaDos = sizeof(MatrizDos)/ sizeof(MatrizDos[0]); // con el sizeof definimos el tamno pero en bytes.
    int tamanoColumnaDos = (sizeof(MatrizDos[0]) / sizeof(MatrizDos[0][0])); // Definimos el tamano de las F y C



    //IMPRIMIMOS LAS MATRICES..
    //MATRIZ UNO
    cout<<"Matriz Uno"<<endl;
    
    for(int i = 0; i<tamanoFilaUno; i++){
        cout<<"|  ";
        for(int j = 0; j<tamanoColumnaUno; j++){
            cout<<MatrizUno[i][j]<<"  ";
        }
        cout<<"|"<<endl;

    }

    //MATRIZ Dos
    cout<<"\nMatriz Dos"<<endl;
    
    for(int i = 0; i<tamanoFilaDos; i++){
        cout<<"|  ";
        for(int j = 0; j<tamanoColumnaDos; j++){
            cout<<MatrizDos[i][j]<<"  ";
        }
        cout<<"|"<<endl;

    }



    
    //Mando a la funcion a evaluar si las dimensiones son iguales.
   bool FilasyColumnas =CompararFilasyColumnas(tamanoFilaUno, tamanoColumnaUno, tamanoFilaDos, tamanoColumnaDos);
    

    //Creo un condicional parque seguira con el programa. y comparo los elementos de cada matriz
    if(FilasyColumnas == true){

        
        //conmparo los numeros de la filas y luego procedo a las columnas.
         bool VoF = true; // con este verifico que siempre se mantenga en true
         int ContadorFila = 0; 
         
        do{
            int ContadorColumna = 0;
            
            do{
                if(MatrizUno[ContadorFila][ContadorColumna] != MatrizDos[ContadorFila][ContadorColumna]){
                VoF = false;
                }
                ContadorColumna += 1;


            }while(VoF == true && ContadorColumna<tamanoColumnaUno);

                ContadorFila += 1;

        }while (VoF == true && ContadorFila<tamanoFilaUno); // hasta aqui acabo de comparar elementos

        if(VoF == true){
            cout<<"\nLas matrices que has ingresado son iguales. :)"<<endl;

        }else{
            cout<<"\nLas matrices que has ingresado NO son iguales. :("<<endl;
        }
        
    }

    //SUMATORIA DE FILAS Y COLUMNAS ******************
    
    //Matriz uno
    cout<<"\n---MATRIZ UNO---\n";
    //Sumatoria de las filas de la matriz

    float sumatoriaFila = 0;
    
    for(int i=0; i<tamanoFilaUno; i++){
        for(int j=0; j<tamanoColumnaUno; j++){
        sumatoriaFila += MatrizUno[i][j];
        }
        cout<<"Sumatoria de la fila #"<<i+1<<"= "<<sumatoriaFila<<endl;
        sumatoriaFila = 0; //Con esto reinicio el conteo de la sumatoria
        
    }

    //Sumatoria de las columnas de la matriz
    float sumatoriaColumna = 0;
    for(int i=0; i<tamanoColumnaUno; i++){
        for(int j=0; j<tamanoFilaUno; j++){
            sumatoriaColumna += MatrizUno[j][i];
        }
        cout<<"Sumatoria de la columna #"<<i+1<<"= "<<sumatoriaColumna<<endl;
        sumatoriaColumna = 0;
    }


    //Matriz DOS
    cout<<"\n---MATRIZ DOS---\n";
    //Sumatoria de las filas de la matriz

    sumatoriaFila = 0;
    
    for(int i=0; i<tamanoFilaDos; i++){
        for(int j=0; j<tamanoColumnaDos; j++){
        sumatoriaFila += MatrizDos[i][j];
        }
        cout<<"Sumatoria de la fila #"<<i+1<<"= "<<sumatoriaFila<<endl;
        sumatoriaFila = 0; //Con esto reinicio el conteo de la sumatoria
        
    }

    //Sumatoria de las columnas de la matriz
    sumatoriaColumna = 0;
    for(int i=0; i<tamanoColumnaDos; i++){
        for(int j=0; j<tamanoFilaDos; j++){
            sumatoriaColumna += MatrizDos[j][i];
        }
        cout<<"Sumatoria de la columna #"<<i+1<<"= "<<sumatoriaColumna<<endl;
        sumatoriaColumna = 0;
    }

    

    //INTERCAMBIAR LAS DIAGONALES DE LAS MATRICES.
    
    //Empezamos con la matriz Uno
    //Para empezar la matriz debe ser cuadrada.
    //MATRIZ UNO
    cout<<"\n\n\tIntercambio de las diagonales en las matrices.\n";
      cout<<"\n---MATRIZ UNO---\n";

    if(tamanoFilaUno == tamanoColumnaUno){

        float auxiliar = 0;
        for(int i=0; i<tamanoFilaUno-1; i++){
            auxiliar = MatrizUno[i][i];
            MatrizUno[i][i] = MatrizUno[i+1][i+1];
            MatrizUno[i+1][i+1] = auxiliar;
        }

        for(int i = 0; i<tamanoFilaUno; i++){
        cout<<"|  ";
        for(int j = 0; j<tamanoColumnaUno; j++){
            cout<<MatrizUno[i][j]<<"  ";
        }
        cout<<"|"<<endl;

        }

        
    }else{
        cout<<"La matriz Uno no puede ser intercambiada puesto que no es una matriz cuadrada.\n";
    }

    //MATRIZ 2
      cout<<"\n---MATRIZ DOS---\n";
    
    if(tamanoFilaDos == tamanoColumnaDos){

        float auxiliar = 0;
        for(int i=0; i<tamanoFilaDos-1; i++){
            auxiliar = MatrizDos[i][i];
            MatrizDos[i][i] = MatrizDos[i+1][i+1];
            MatrizDos[i+1][i+1] = auxiliar;
        }

        for(int i = 0; i<tamanoFilaDos; i++){
        cout<<"|  ";
        for(int j = 0; j<tamanoColumnaDos; j++){
            cout<<MatrizDos[i][j]<<"  ";
        }
        cout<<"|"<<endl;

        }
        

    }else{ 
        cout<<"\nLa matriz Dos no puede ser intercambiada puesto que no es una matriz cuadrada.";
    }




}

 bool CompararFilasyColumnas(int filaUno, int columnaUno, int filaDos, int columnaDos){
    bool resultadofilasycolumnas = false;
    if(filaUno == filaDos && columnaUno == columnaDos){
        resultadofilasycolumnas = true;
        return resultadofilasycolumnas;
        
        

    }else{
        cout<<"\nLa dimension de las matrices que se introdujeron no son iguales, por lo tanto las matrices NO son iguales."<<endl;
        return resultadofilasycolumnas;
    }

}




