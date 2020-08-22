import '@testing-library/jest-dom';
const { getSaludo } = require("../../base/02-template-string");

describe('Prueba en 02-template-string.js', () => {
    test('GetSludo debe retornar el nombre Uriel! ', () => {
        const nombre='Uriel';
        //Aplicanso el estimulo
       const saludo=getSaludo(nombre);
       console.log(saludo);
       expect(saludo).toBe('Hola '+nombre+ '!');
    })
    //GetSaludo debe de retornar Hola Diana! si no hay argumento en el nombre
    test('GetSaludo debe de retornar Hola Diana! si no hay argumento en el nombre ', () => {
        const saludo=getSaludo();
        console.log(saludo);
        expect(saludo).toBe('Hola Diana!');
    })
    
})
