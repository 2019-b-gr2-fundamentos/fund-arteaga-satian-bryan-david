//NODE MODULES
//const sumaLibreria = require('david-libreriauno/lib/suma');
//IMmportar todo el contenido con el nombre
//'sumaLibreria' del paquete 'david-libreriauno'
var sumaLibreria = require('david-libreriauno/lib/suma');
var PI = require('david-libreriauno/lib/pi');
var respuesta = sumaLibreria(1, 2);
console.log('La respuesta es: ', respuesta);
console.log('La respuesta es: ', PI);
