import { retornaArreglo } from '../../base/07-deses-arr';
describe('Pruebas de arreglos  de 07-deses-arr.js', () => {
    test('Retornar un String y un numero del arreglo retornaArreglo ', () => {
      const [letras,numeros]=retornaArreglo();
    //   expect(arreglo).toEqual(['ABC',123])
      expect(letras).toBe('ABC');
      expect(numeros).toBe(123);
      expect( typeof letras).toBe('string');
      expect( typeof numeros).toBe('number');
    })
    
})
