//NODE MODULES
//const sumaLibreria = require('david-libreriauno/lib/suma');
//IMmportar todo el contenido con el nombre
//'sumaLibreria' del paquete 'david-libreriauno'
import * as sumaLibreria from 'david-libreriauno/lib/suma';
import * as PI from 'david-libreriauno/lib/pi';


const respuesta = sumaLibreria(1,2);
console.log('La respuesta es: ', respuesta);
console.log('La respuesta es: ', PI);
