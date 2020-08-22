import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas sobre 08-imp-exp.js', () => {
    test('Retorno de objetos de heroes mediante id', () => {
        const id= 1;
        const heroeData=heroes.find( h => h.id===id)
        const heroe=getHeroeById(id);
        expect(heroe).toEqual(heroeData);


    });
    test('Retorno de objetos undefine al no existir id', () => {
        const id= 10;
        // const heroeData=heroes.find( h => h.id===id)
        const heroe=getHeroeById(id);
        expect(heroe).toBe(undefined);


    });

    test('Debe de retornar un arreglo con los heroes de DC ', () => {
        const owner= 'DC';
        const heroesDataDC= heroes.filter((h)=>h.owner===owner);
        const heroesDC=getHeroesByOwner(owner);
        // console.log(heroesDC);
        expect(heroesDC).toEqual(heroesDataDC);
    });
    test('Debe de retornar un objeto vacio si el owner no existe  ', () => {
        const owner= 'marbel';
        const heroesDC=getHeroesByOwner(owner);
        // console.log(heroesDC);
        expect(heroesDC).toEqual([]);
    });
    test('Debe de retornar un arreglo con los héroes de Marvely una longitud de 2', () => {
        const owner2='Marvel';
        const heroesMarvel=getHeroesByOwner(owner2);
        const heroesDataMarvel=heroes.filter((h)=>h.owner===owner2);
        // console.log(heroesMarvel);
        const longitudHeroesMarvel=heroesMarvel.length;
        // console.log(longitudHeroesMarvel);
        expect(heroesMarvel).toEqual(heroesDataMarvel);
        //Evaluendo por longitud de 2
        expect(longitudHeroesMarvel).toBe(2);
    })
    
})
