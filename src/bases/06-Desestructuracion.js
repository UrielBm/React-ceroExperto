// Desestructuración. 
const Persona= {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    rango: 'Soldado',
}

 /* const {nombre,edad,clave}=Persona;
console.log(nombre,edad,clave); */ 

const retornaPersona=({ clave, nombre,edad,rango='Capitan'}) => {
 // console.log(nombre,edad,rango)
 return{
   nombreClave: clave,
   años: edad,
  latLog: {
      lat:1213221,
      long : -122321
  }

 }
}
retornaPersona(Persona);
//Tarea del Video. 
const Avenger=retornaPersona(Persona);
const {nombreClave:nombre,años:edad,latLog:{lat, long}}= Avenger;
 console.log(Avenger);
 console.log(nombre,edad, `la longitud es: ${long} , la langitud es: ${lat} `);