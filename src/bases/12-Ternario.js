const activo=true;

let mensaje='';
if (!activo){
    mensaje='activo'
}else{
    mensaje='inactivo'
}
console.log(mensaje)
//segunda forma 
const mensaje2=(activo)? 'Activo': 'Inactivo';
const mensaje3=activo && 'Activo';
console.log(mensaje2);
console.log(mensaje3);