const nombre='Uriel';
const apellido='Benítez Medina';
/*Viejo método
const nombreCompleto=nombre+' '+apellido;*/

//Nuevo Método
const nombreCompleto=`${nombre} ${apellido}`
// otra caracteristica
const nombreCompleto2=`
${nombre}
${apellido}
${1+1} 
`;
console.log(nombreCompleto, nombreCompleto2);

function getHola(){
    return 'Hola mundo'
}
//otra funcion con Argumento
function getSaludo(nombreCompleto){
    return 'Hola '+ nombreCompleto+ " :)"
}

console.log(` Este es el mensaje: ${getHola()} ${nombre}`)
// Uso de constante.
console.log(`Este es otro mensaje: ${getSaludo(nombreCompleto)}`)