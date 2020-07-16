
//fUNCIONES{}
function saludar(nombre){
    return `Hola, soy ${nombre}`;
}

// Forma segura evitando warnings 
const Saludar2= function(nombre){
    return `Hola, soy ${nombre}`;
}
/*  Error
Saludar2=20;
*/
// FUNCIONES FLECHAS OTRA FORMA DE HACER FUNCIONES.
const Saludar3=(nombre) => `Hola, mi nombre es: ${nombre}`;
const Saludar4=() => `Que onda mundo!!!`;
// Funciones con un Objeto.
const getUser= function() {
    return{
        id: `asd1236`,
        username:`Azucena`,
    }
}
const getUser2= () => (
    {
        id: `asdgq12345`,
        username: `Evelyn`,
        edad: 26, 
    }
)
// dos formas de invocar y modifiar la función.
console.log(Saludar2('Uriel'));
console.log(Saludar3('Ruben'));
console.log(Saludar4());
console.log(getUser());
console.log(getUser2());


// Tarea 
function getUsuarioActivo(nombre){
    return{
        id: `ascf1276`,
        username: `hola soy ${nombre}`,
    }
}
const usuarioActivo=getUsuarioActivo('Uriel');
 console.log(usuarioActivo)
// Resolviendo Tarea Function flecha

const usuarioActivo2= (nombre) => ({
    id: `ascf1276`,
    username: `hola soy ${nombre}`,
})

console.log(usuarioActivo2('Uriel'));