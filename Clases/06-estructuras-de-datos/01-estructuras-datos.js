//IMPORTO LA INTERFAZ DE  ANIMAL PERRITO 
//boolean
//string
//null -> object
//number
//Persona
//ANIMAL -> nombre cinetifico, colo principal.
//Fecha de nacimiento, peso, genero, altura.
//CASI EN TODOS LOS LENGUAJES
//Struct -> Estructura de datos.
//Clase -> EStructura de datos -> Metodos!
//Estructura de datos en lenguaje NO  TIPADO *************
//Ejemplos
var edad = 20;
var ejemploEstructura = {
    nombreCientifico: 'canis lupus familiaris',
    "llave": "valor",
    noEsNecesario: true,
    enojo: undefined,
    edadActual: edad // Variables.
};
var poliPerro = {
    nombreCientifico: 'canis lupus familiaris',
    nombre: 'Grandote',
    clan: 'Poliperro',
    edad: 10,
    hijos: null,
    perritas: ['Manuela', 'Zoraida'],
    vacunado: true
};
console.log(poliPerro.nombreCientifico); //Canis lupus familiaris
//Estructura de datos en lenguaje  TIPADO *************
var poliPerroAmarillo = {
    nombreCientifico: 'canis lupus familiaris',
    nombre: 'Amarillo',
    clan: 'Poliperro',
    edad: 4,
    //hijos: null,
    perritas: [],
    vacunado: false
};
var duenioPoliperroAmarrillo = {
    nombres: 'David',
    apellidos: 'Arteaga',
    fechaDeNacimiento: 2,
    mascotasPerros: poliPerroAmarillo
};
//Guardar datos en una estructura de datos
poliPerroAmarillo.duenio = duenioPoliperroAmarrillo;
poliPerroAmarillo.edad = 4;
poliPerroAmarillo.vacunado = true;
//Acceder a los datos de una estructura de datos
console.log(poliPerroAmarillo.duenio.nombres);
