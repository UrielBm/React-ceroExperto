import '@testing-library/jest-dom';
import {getHeroeByIdAsync} from '../../base/09-promesas'
import heroes from '../../data/heroes';
describe('Prueba de las promesas en 09-promesas.js', () => {
    test('Retorna un heroe mediante un id en async', (done) => {
        const id=1;
        getHeroeByIdAsync(id)
        .then(heroe =>{
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });
    test('Evaluando cuando el id del héroe no existe regresa un error', (done) => {
        const id=10;
        getHeroeByIdAsync(id)
        .catch(error=>{
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
    
    
})
