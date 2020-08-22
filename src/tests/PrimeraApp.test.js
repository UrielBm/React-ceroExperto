import React from 'react';
import '@testing-library/jest-dom';
// import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';
describe('Evaluendo componente de reacr PrimeraApp.js', () => {
    // Test con // import '@testing-library/jest-dom/extend-expect'; de setupTest.js 
    // test('Debe mostrar el mensaje: Hola,qué onda la banda? ', () => {
    //     const mensaje= 'Hola,qué onda la banda?';
    //     const {getByText} = render(<PrimeraApp saludo={mensaje} />);
    //     expect(getByText(mensaje)).toBeInTheDocument();
    // });
    test('debe de mostrare <PrimeraApp /> correctamente ', () => {
        const saludo='Hola,qué onda la banda?';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    });
    test('Envio de subtitulos enviado por props en <PrimeraApp /> ', () => {
        const subtitulos= 'Todo esta bien';
        const saludo='Hola,qué onda la banda?';
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulos} />);
        const textoParrafo= wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulos);
    })
    
    
})
