#include<iostream>
#include<stdlib.h>
#include<stdio.h>
using namespace std;

int main(){
    
    


int num; 
			
	
	cout<<"\tIntroduzca el numero que desee descomponer: "<<"\n\n";
	 cout<<"Numero: "; cin>>num;
	int i=2;
	 while(i<=num){ 
		if(num%i==0){ if(num!=i){
						cout<<i<<"*"; }
						 else{ 
						cout<<i<<".";
						}
						num/=i;
						i-1;     }
		else{
		i++;}
	
}
		cout<<endl<<endl;
        
    return 0;
}
