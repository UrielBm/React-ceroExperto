import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';
describe('Pruebas de la Api y el metodo de 11-async-await.js', () => {
        test('Debe de retonar una url de una imagen ', async() => {
           const url= await getImagen();
           console.log(url);
           expect(url.includes('https://')).toBe(true);
        });
        
})
