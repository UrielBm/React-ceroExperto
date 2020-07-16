//console.log(`Hola mundo!!`)
// Exepcion  para hacer arreglos fijos. 
const Arreglo= new Array();
console.log(Arreglo)

// ARREGLO NORMAL pero no ocupar Push 
const ArregloCorrecto=[];
ArregloCorrecto.push(1)
ArregloCorrecto.push(2)
ArregloCorrecto.push(3)
ArregloCorrecto.push(4)
ArregloCorrecto.push(5)
console.log({ArregloCorrecto});
//Uso de operador Spreed
let ArregloCorrecto2=[...ArregloCorrecto,6];
console.log({ArregloCorrecto2});
//Uso correcto del Map 
let ArregloCorrecto3=ArregloCorrecto2.map(function(numero){
        return numero*3;
});
ArregloCorrecto3.push(7)
console.log(ArregloCorrecto3);
