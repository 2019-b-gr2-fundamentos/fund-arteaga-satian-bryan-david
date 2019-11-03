#include<iostream>
#include<stdio.h>
#include<math.h>
using namespace std;

int main (){
        /*
    En este programa se ingresan dos vectores de R^2... ej: (u1,u2).
    y luego se dermina si forman un angulo recto,agudo u obtuso.
    siguiendo la formula cos(x)=<vectorA,vectorB>/||vectorA||||vectorB||
    */
    system("color 02");
    cout<<"\tBienvenido, a continuacion introduzca 2 vectores de R^2."<<endl;
    float vectorAComp1, vectorAcomp2, vectorBComp1, vectorBcomp2;
    const double PI = std::atan(1.0)*4;

    //Ingresa el primer vector VectorA = (vectorAcomp1, vectorAcomp2)
    cout<<"\nVector A\nIntroduzca el primer componente.\nVectorA=(a1,a2)"<<endl;
    cin>>vectorAComp1;
    cout<<"\nVector A\nIntroduzca el segundo componente.\nVectorA=("<<vectorAComp1<<",a2)\n";
    cin>>vectorAcomp2;
    cout<<"\nVectorA=("<<vectorAComp1<<","<<vectorAcomp2<<")"<<endl;

    //Ingresa el segundo vector VectorB
    cout<<"\nVector B\nIntroduzca el primer componente.\nVectorB=(b1,b2)"<<endl;
    cin>>vectorBComp1;
    cout<<"\nVector B\nIntroduzca el segundo componente.\nVectorB=("<<vectorAComp1<<",b2)\n";
    cin>>vectorBcomp2;
    cout<<"\nVectorB=("<<vectorBComp1<<","<<vectorBcomp2<<")"<<endl<<endl<<endl;

    //Ingresan las formulas
    float moduloVectorA = sqrt(vectorAComp1*vectorAComp1+vectorAcomp2*vectorAcomp2);
    float moduloVectorB = sqrt(vectorBComp1*vectorBComp1+vectorBcomp2*vectorBcomp2);
    float cosx = ((vectorAComp1*vectorBComp1+vectorAcomp2*vectorBcomp2)/(moduloVectorA*moduloVectorB));
    float x = acos(cosx);

    //Ingresan condicionales
    if(x > ((PI)/2)){
        cout<<"El angulo es obtuso.";
    }
    else{
        if(x < (PI/2)){
            cout<<"El angulo es agudo.";
        }
        if(x == PI){
        cout<<"El angulo es recto (perpendicular).";
        }
        cout<<endl;
    }

    return 0;
}
