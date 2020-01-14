#include<iostream>
#include<math.h>
#include<conio.h>
using namespace std;

int main (){
    /*
Calcular la hipotenusa de un triangulo rectangulo mediante dos casos:
Cuando se tiene un cateto y un angulo 
Cuando se tienen dos catetos.
*/

cout<<"\tBienvenido, este programa calcula la hipotenusa mediante 2 formas.\n\n";
string dibujito1 = ("     /|\n    / |\n h /  | c2\n  /   |\n /    |\n/_____|\n   c1\n");
cout<<dibujito1<<endl;
cout<<"Para ingresar los dos catetos como datos -> 1.\nPara ingresar un cateto y un angulo -> 2.\nQue opcion eliges?\n";
int op; cin>>op;
const double PI = std::atan(1.0)*4;

//Ingreso de loscondicionales
switch(op){
    case 1:
        float catetoA, catetoB, resultado1;
        cout<<"Para ingresar los dos catetos como datos:\nIngresa el primer cateto:\n"; cin>> catetoA;
        cout<<"Para ingresar los dos catetos como datos:\nIngresa el segundo cateto:\n"; cin>> catetoB;
        cout<<endl;
        //calcula la hipotenusa
        resultado1 = sqrt(catetoA*catetoA+catetoB*catetoB);
        cout<<"El resultado de la hipotenusa es: "<<resultado1<<endl;
    
    break;

    case 2:
        cout<<"Para ingresar un cateto y un angulo (En Grados):\nTienes las siguientes opciones:\ncateto1 y angulo de arriba ->1.\ncateto2 y angulo de arriba->2.\ncateto1 y angulo de abajo->3.\ncateto2 y angulo de abajo ->4.\n";
        int opciones2; cin>>opciones2;

        switch(opciones2){
            case 1:
            {
                float catetoCaso1, anguloCaso1;
                cout<<"\nIngresa el valor del cateto 1: \n"; cin>> catetoCaso1;
                cout<<"\nIngresa el valor del angulo de arriba: \n"; cin>>anguloCaso1;
                
                float resultadoCaso1 = (catetoCaso1/(sin(anguloCaso1*(PI/180))));
                cout<<"\nEl resultado de la hipotenusa es: "<<resultadoCaso1;
            }
            break; 
            
            case 2:
            {
                float catetoCaso2, anguloCaso2;
                cout<<"\nIngresa el valor del cateto 2: \n"; cin>> catetoCaso2;
                cout<<"\nIngresa el valor del angulo de arriba: \n"; cin>>anguloCaso2;
                float resultadoCaso2 = (catetoCaso2/(cos(anguloCaso2*(PI/180))));
                cout<<"\nEl resultado de la hipotenusa es: "<<resultadoCaso2;
            }
            break; 

            case 3:
            {
                float catetoCaso3, anguloCaso3;
                cout<<"\nIngresa el valor del cateto 1: \n"; cin>> catetoCaso3;
                cout<<"\nIngresa el valor del angulo de abajo: \n"; cin>>anguloCaso3;
                             
                float resultadoCaso3 = (catetoCaso3/(cos(anguloCaso3*(PI/180))));
                cout<<"\nEl resultado de la hipotenusa es: "<<resultadoCaso3;
            }
            break;

            case 4:
            {
                float catetoCaso4, anguloCaso4;
                cout<<"\nIngresa el valor del cateto 2: \n"; cin>> catetoCaso4;
                cout<<"\nIngresa el valor del angulo de abajo: \n"; cin>>anguloCaso4;
                             
                float resultadoCaso4 = (catetoCaso4/(sin(anguloCaso4*(PI/180))));
                cout<<"\nEl resultado de la hipotenusa es: "<<resultadoCaso4;
            }
            break;

            default:
            {
              cout<<"Has elegido una opcion NO válida.\n";
            }
            break;

        }

    break;

    default:
        cout<<"Has elegido una opcion NO válida.\n";
    break;

        
}



    return 0;
}