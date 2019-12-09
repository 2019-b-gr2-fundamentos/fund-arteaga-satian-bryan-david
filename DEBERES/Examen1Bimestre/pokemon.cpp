#include <iostream>
#include<math.h>
#include<stdlib.h>
#include<conio.h>
using namespace std;
/* 
ingresar creaciones de pokemones y luego tomar uno para actualizar su evoluciones 
dentro de donde se los guarda existe la opción de eliminarlos.  

SE TIENEN LOS 7 POKEMONES, LUEGO TOCA ELEGIR SOLO 4 POKEMONES,  ,
, CUANDO YA SE ELIGEN LOS 4, SE DEBE MOSTRAR LA POKEDEXCREADA Y LUEGO VER SI SE LOS PUEDE EVOLUCIONAR O ELIMINAR ALGUNO
NO OLVIDARSE DE DAR UNA OPCION SALIR.
*/


//DECLARACION DE FUNCIONES
void pokedex();
bool analisisdeOp(string op);
string DandoNombres(string op);
//void EliminacionesYEvoluciones(string pokemonUno, string pokemonDos, string pokemonTres, string pokemonCuatro);


int main(){
    system("color 02");
    pokedex();
    


    getch();
    return 0;
}


void pokedex(){
    cout<<"\n\t\tPOKEDEX\n\tBienvenido jugador/a.\n\tAhora tienes 4 pokeballs para enfrentarte en la batalla!!!!!!\n";
    cout<<"\n\nElige Sabiamente a tus favoritos: \n--------------------------------\n";
    cout<<"Bulbasaur --> 1.\nCharmander --> 2.\nSquirtle --> 3.\nCubone --> 4\nPikachu --> 5.";
    cout<<"\nVulpix --> 6.\nAbra --> 7.\n--------------------------------\n\nRecuerda que solo puedes elegir 4 pokemones:\n\n";

   
    string pokebola[4]; //EN ESTE AREGLO VAMOS A GUARDAR A LOS POKEMONES

    for(int espacio = 0; espacio<4; espacio++){
        cout<<"\nElige tu pokemon #"<<espacio+1<<": "; cin>>pokebola[espacio];
       bool resultado =  analisisdeOp(pokebola[espacio]); //INGRESA LA FUNCION
        
        
        
        if(resultado == false){
            cout<<"\n Has elegido un pokemon que no esta en la lista disponible, intentalo de nuevo\n";
            espacio = espacio-1;
        }
        if(resultado == true){
           
                if(pokebola[espacio]==pokebola[0]){
                pokebola[espacio] = DandoNombres(pokebola[espacio]);
                cout<<"\t\t\t TU POKEBALL: ["<<pokebola[0]<<", "<<pokebola[1]<<", "<<pokebola[2]<<", "<<pokebola[3]<<"] ";
            } 
            if(pokebola[espacio]==pokebola[1]){
                pokebola[espacio] = DandoNombres(pokebola[espacio]);
                bool verificarRepeticion = pokebola[1]==pokebola[0] || pokebola[1]==pokebola[2] || pokebola[1]==pokebola[3];
                    if(verificarRepeticion==false){
                        
                        cout<<"\t\t\t TU POKEBALL: ["<<pokebola[0]<<", "<<pokebola[1]<<", "<<pokebola[2]<<", "<<pokebola[3]<<"] ";
                    }else{
                        cout<<"\nHas elegido un pokemon repetido, intentalo de nuevo.\n";
                        espacio = espacio-1;
                    }
            }
            if(pokebola[espacio]==pokebola[2]){
                pokebola[espacio] = DandoNombres(pokebola[espacio]);
                bool verificarRepeticion = pokebola[2]==pokebola[0] || pokebola[2]==pokebola[1] || pokebola[2]==pokebola[3];
                    if(verificarRepeticion==false){                       
                        cout<<"\t\t\t TU POKEBALL: ["<<pokebola[0]<<", "<<pokebola[1]<<", "<<pokebola[2]<<", "<<pokebola[3]<<"] ";
                    }else{
                        cout<<"\nHas elegido un pokemon repetido, intentalo de nuevo.\n";
                        espacio = espacio-1;
                    }
            }
            if(pokebola[espacio]==pokebola[3]){
                pokebola[espacio] = DandoNombres(pokebola[espacio]);
                bool verificarRepeticion = pokebola[3]==pokebola[0] || pokebola[3]==pokebola[1] || pokebola[3]==pokebola[2];
                    if(verificarRepeticion==false){
                        cout<<"\t\t\t TU POKEBALL: ["<<pokebola[0]<<", "<<pokebola[1]<<", "<<pokebola[2]<<", "<<pokebola[3]<<"] ";
                    }else{
                        cout<<"\nHas elegido un pokemon repetido, intentalo de nuevo.\n";
                        espacio = espacio-1;
                    }
            }
        }
              
    }

    cout<<"\nFELICIDADES!!\nAhora tienes tu pokeball llena: \n\n";
    
    //DE AHORA EN ADELANTE EMPEZAMOS CON LAS EVOLUCIONES Y LAS ELIMINACIONES
   // EliminacionesYEvoluciones(pokebola[0], pokebola[1], pokebola[2], pokebola[3]);

}

bool analisisdeOp(string op){
    
    bool pokeBulbasaur = op=="1" || op== "Bulbasaur" || op== "bulbasaur";
    bool pokeCharmander = op== "2" || op== "Charmander" || op== "charmander";
    bool pokeSquirtle = op== "3" || op== "Squirtle" || op== "squirtle";
    bool pokeCubone =  op=="4" || op== "Cubone" || op== "cubone";
    bool pokePikachu = op== "5" || op== "Pikachu" || op== "pikachu";
    bool pokeVulpix = op== "6" || op== "Vulpix" || op== "vulpix";
    bool pokeAbra = op== "7" || op== "Abra" || op== "abra";
    bool opcionesValidas = pokeBulbasaur || pokeCharmander || pokeSquirtle || pokeCubone || pokePikachu || pokeVulpix || pokeAbra;

    return opcionesValidas;


}

string DandoNombres(string op){
    bool pokeBulbasaur = op=="1" || op== "Bulbasaur" || op== "bulbasaur";
    bool pokeCharmander = op== "2" || op== "Charmander" || op== "charmander";
    bool pokeSquirtle = op== "3" || op== "Squirtle" || op== "squirtle";
    bool pokeCubone =  op=="4" || op== "Cubone" || op== "cubone";
    bool pokePikachu = op== "5" || op== "Pikachu" || op== "pikachu";
    bool pokeVulpix = op== "6" || op== "Vulpix" || op== "vulpix";
    bool pokeAbra = op== "7" || op== "Abra" || op== "abra";
        
    string pokemon;
    if(pokeBulbasaur){
        pokemon = "Bulbasaur";
    }
    if(pokeCharmander){
        pokemon = "Charmander";
    }
    if(pokeSquirtle){
        pokemon = "Squirtle";
    }
    if(pokeCubone){
        pokemon = "Cubone";
    }
    if(pokePikachu){
        pokemon = "Pikachu";
    }
    if(pokeVulpix){
        pokemon = "Vulpix";
    }
    if(pokeAbra){
        pokemon = "Abra";
    }
    return pokemon;

}

/*void EliminacionesYEvoluciones(string pokemonUno, string pokemonDos, string pokemonTres, string pokemonCuatro){

    int Decidircambio;
    cout<<"\nDeseas hacer algun cambio??\nSI --> 1.\nNO -->2.\nSALIR --> 0\n\nOpcion: "; cin>>Decidircambio;
    if(Decidircambio==2){
        cout<<"\t\nTU POKEBALL:\n--------------------\n";
        //mostramos la pokeball
        cout<<pokemonUno<<endl<<pokemonDos<<endl<<pokemonTres<<endl<<pokemonCuatro<<endl;
        cout<<"--------------------\n";
    }
    if(Decidircambio==1){

    }



}

/*
    */

