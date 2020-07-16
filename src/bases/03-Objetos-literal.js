//console.log(`Hola mundo!!`)

const personaa ={
    nombre: 'Uriel',
    apellido_Paterno:  'Benitez',
    apellido_Materno: 'Medina',
    edad: 45,
    direccion: {
        pais: 'Mexico',
        ciudad:'Pachuca',
        codigo_postal: '42084',
        calle: 'cofre de perote',
    }
};

console.log({personaa});
/*Referencia a memoria Falso positivo NO SE HACE JAMAS
const Persona2=personaa;
Persona2.nombre='Ruben';
console.log({Persona2});*/

// cOMO REALIZAR OTRO OBJETO CON SPREED.
const Persona3={...personaa};
Persona3.nombre='Ruben';
console.log({Persona3});