import  {Duenio} from './duenio.interface';

export interface AnimalPerrito{ //INTERFACE -> (STRUCT)
    nombreCientifico: string;
    nombre: string;
    clan: string;
    edad?: number; //PONEMOS EL SIGNO DE INTERROGACION EN LAS QUE QUEREMOS QUE SEAN OPCIONALES. !!!!!! OJO //OPCIONALES
    //hijos: null,
    perritas?:  string[], //OPCIONALES
    vacunado?: boolean; //OPCIONALES
    duenio?: Duenio;  //Dentro de esta estructura de datos se puede ingresar otra estructura de datos.
}

//con el export exportamos esta interface a los otros archivos con los que vamos a trabajar