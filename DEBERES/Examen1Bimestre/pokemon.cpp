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
void Eliminaciones(string pokemonUno, string pokemonDos, string pokemonTres, string pokemonCuatro);
void PreguntarEvolucion(string Uno, string Dos);
void Evoluciones(string pokemonUno, string pokemonDos);

int main(){
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

    cout<<"\nFELICIDADES!!\nAhora tienes tu pokeball\n\n";
    
    //DE AHORA EN ADELANTE EMPEZAMOS CON LAS EVOLUCIONES Y LAS ELIMINACIONES
    Eliminaciones(pokebola[0], pokebola[1], pokebola[2], pokebola[3]);

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
/*
*/
void Eliminaciones(string pokemonUno, string pokemonDos, string pokemonTres, string pokemonCuatro){
    string pokeballCasi[] = {pokemonUno, pokemonDos, pokemonTres, pokemonCuatro};
    cout<<"TU POKEBALL : ["<<pokemonUno<<", "<<pokemonDos<<", "<<pokemonTres<<", "<<pokemonCuatro<<"]\n\n";
    

    cout<<"Ahora estamos listos para la batalla!!!\nNuestro primer oponente es BROCK de ciudad Plateada\n";
    cout<<"Brock ha elegido a ONIX y a GENGAR!!!\n";
    cout<<"\nPERO TENEMOS UN GRAN PROBLEMA\nDebemos eliminar 2 pokemones para estar a la par en la batalla:  ";
    cout<<"Que pokemon vas a eliminar?\n";
    for(int i=0; i<4; i++){
        cout<<pokeballCasi[i]<<"---> "<<i+1<<". "<<endl;
    }
    string Eliminarpokemon[2];

    cout<<"\nEliminar pokemon: "; cin>>Eliminarpokemon[0];
    cout<<"\nEliminar pokemon: "; cin>>Eliminarpokemon[1];

    for(int j=0; j<2; j++){
       if(Eliminarpokemon[j] == "1"){
           pokeballCasi[0] = "eliminado";
        }
       if(Eliminarpokemon[j] == "2"){
           pokeballCasi[1] = "eliminado";
        }
       if(Eliminarpokemon[j] == "3"){
           pokeballCasi[2] = "eliminado";
        }
        if(Eliminarpokemon[j] == "4"){
           pokeballCasi[3] = "eliminado";
        }
          
    }
    
    string PokeballTotal[2];


 //CON ESTE BUCLE DEFINIMOS EL NUEVO ARREGLO SOLO CON LOS DOS POKEMONES.
    int x = 0;
    for(int i = 0; i<4; i++){
        if(pokeballCasi[i]!="eliminado"){
            PokeballTotal[x] = pokeballCasi[i];
            x+=1;
        }

    }

    cout<<"\n\tTu nueva Pokeball es:\n\n["<<PokeballTotal[0]<<", "<<PokeballTotal[1]<<"]";   

    PreguntarEvolucion( PokeballTotal[0], PokeballTotal[1]);
    
}   

        //DEspues agregar la condicion de si quiere evolucionar o no.
void PreguntarEvolucion(string Uno, string Dos){
    cout<<"\n\nDeseas evolucionar tus pokemones antes de la batalla?\nSI --> 1.\nNO --> 2.";
    int Elige;
    cout<<"\nElige: "; cin>>Elige;
    switch(Elige){
        case 1:
            Evoluciones(Uno, Dos);
            break;
        
        case 2:
            cout<<"\n\t   TU POKEBALL:\n\t------------------------\n"<<"       "<<Uno<<endl<<"       "<<Dos<<endl<<"\t------------------------";
            cout<<"\n\n PREPARATE PARA LA BATALLA!!!!\n Buena Suerte. ";
            break;
        
        default:
            cout<<"Has elegido una opcion NO valida.";
            PreguntarEvolucion(Uno, Dos);
            break;
    }

}




void Evoluciones(string pokemonUno, string pokemonDos){
     
    string pokeball[2] = {pokemonUno, pokemonDos};

    for(int j = 0; j<2;j++){

        cout<<endl<<pokeball[j]<<" ha evolucionado a ---->  ";
        
                if(pokeball[j] == "Bulbasaur"){
                    pokeball[j] = "Ivysaur";
                    
                }
                if(pokeball[j] == "Charmander"){
                    pokeball[j] = "Charmeleon";
                }
                if(pokeball[j] == "Squirtle"){
                   pokeball[j] ="Wartortle";
                }
                if(pokeball[j] == "Cubone"){
                    pokeball[j] = "Marowak";
                }
                if(pokeball[j] == "Pikachu"){
                    pokeball[j] = "Raichu";
                }
                if(pokeball[j] == "Vulpix"){
                    pokeball[j] = "Ninetales";
                }
                if(pokeball[j] == "Abra"){
                    pokeball[j] = "Kadabra"; 
                }
        cout<<pokeball[j]<<". "<<endl;
            
    }
    
    cout<<"\n\t   TU POKEBALL:\n\t------------------------\n"<<pokeball[0]<<endl<<pokeball[1]<<endl<<"\t------------------------";
            cout<<"\n\n PREPARATE PARA LA BATALLA!!!!\n Buena Suerte. ";


}

