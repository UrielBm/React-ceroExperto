const Personajes=['Uriel','Ruben','Evelyn', 'Azucena','Amor' ];
//primer forma
console.log(Personajes[0])
console.log(Personajes[1])
console.log(Personajes[2])
console.log(Personajes[3])
console.log(Personajes[4])

// sEGUNDA FORMA 
const [p1]= Personajes;
const [, ,p3]=Personajes;

console.log (p1);
console.log(p3);

const RetornarArreglo=()=>{
 return ['ABC',123]
}
const [letras,numeros]= RetornarArreglo();

console.log(RetornarArreglo());
console.log(letras,numeros)

//Resolviendo Tarea.

const useState= (nombre) => {
    return [nombre, ()=>{console.log('Hola Mundo')}]
};

const Arreglo=useState('Diana');
console.log(Arreglo)
//Resolviendo.
const [nombre,SetNombre]= Arreglo;
console.log(nombre)
 SetNombre()