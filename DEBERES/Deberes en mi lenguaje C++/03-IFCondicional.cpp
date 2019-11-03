#include<iostream>
using namespace std;

int main (){
        /*
    En este programa se introduce  la nota del primer y segundo Bimestre,
    luego define si se aprobó no el semestre*/

    cout<<"\tBienvenido, este prgrama define si pasas o no el semestre\nEl sistema de calificacion es sobre 10.\n\n";
    float notaPrim, notaSeg, promedio, notasValidas;
    cout<<"Ingresa la nota del primer bimestre: \n";
 cin>>notaPrim;
 cout<<"Ingresa la nota del segundo bimestre: \n";
 cin>>notaSeg;
 promedio = ((notaPrim+notaSeg)/2);
 notasValidas = (promedio >=0 && promedio <=10);

 //Ingresan los condicionales
 if(notasValidas){
    if(promedio >=0 && promedio < 7){
     cout<<"Tu promedio es: "<<promedio<<endl;
     cout<<"Has reprobado, segunda es todo."<<endl;
    }

    if(promedio >=7 && promedio <=10){
    cout<<"Tu promedio es: "<<promedio<<endl;
     cout<<"Has aprobado, FELICITACIONES."<<endl;
    }
 } else{
    cout<<"Tu promedio no esta en el rango establecido de 0 a 10, ingresaste mal tus notas."<<endl;
    }




 return 0;
}


 