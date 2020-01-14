#include <iostream>
#include <stdlib.h> 
#include <conio.h>
using namespace  std;

void pasarmatriz();


int main(){
    
    pasarmatriz();







    return 0;
}

void pasarmatriz(){
    int myprimerarreglo[2][3] =
    {
        {1,2,3},
        {1,7,1}
        
    };

    cout<<"Matriz uno"<<endl;
    
    for(int i = 0; i<2; i++){
        cout<<"|  ";
        for(int j = 0; j<3; j++){
            cout<<myprimerarreglo[i][j]<<"  ";
        }
        cout<<"|"<<endl;

    }
   
    
}



/*
int main(){
    int arreglo[] = {1,2,3,4,5};
    int tamanoArreglo = 5;
    int aux = 0;

    for(int i=0; i<tamanoArreglo; i++){

        aux= arreglo[i];
        arreglo[i] = arreglo[i+1];
        arreglo[i+1] = aux;


    }
    
    for(int i = 0; i<tamanoArreglo; i++){
        cout<<arreglo[i]<<endl;
    }


    return 0;
}
*/