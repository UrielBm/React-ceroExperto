import React from 'react';
import '@testing-library/jest-dom';
// import {render} from '@testing-library/react';
import { shallow } from 'enzyme';
import CouterApp from '../CounterApp';
import CounterApp from '../CounterApp';
describe('Probando la correcta funcionalidad de CouterApp.js', () => {
         let wrapperCouterApp=shallow(<CouterApp />);
        beforeEach(() =>{
            wrapperCouterApp=shallow(<CouterApp />);
        });
    test('Debe mostar correctamente el componente <CouterApp /> con su valor por defecto 10 ', () => {
        expect(wrapperCouterApp).toMatchSnapshot();
    });
    test('Debe mostar correctamente el componente <CouterApp /> enviando el valor mediante props  ', () => {
        const v=100;
        const wrapperCouterApp=shallow(<CounterApp value={v} />);
        const ContadorH2=wrapperCouterApp.find('h2').text().trim();
        // console.log(ContadorH2);
        expect(ContadorH2).toBe('100');

    });
    test('Debe incrementar +1 con el boton ', () => {
       wrapperCouterApp.find('button').at(0).simulate('click');
        // console.log(btn1.html()) para ocupar agegar const btn1=
        const ContadorH2=wrapperCouterApp.find('h2').text().trim();
        expect(ContadorH2).toBe('11');
    });
    test('Debe decrementar -1 con el boton ', () => {
        const btn3=wrapperCouterApp.find('button').at(2).simulate('click');
         // console.log(btn1.html())
         const ContadorH2=wrapperCouterApp.find('h2').text().trim();
         expect(ContadorH2).toBe('9');
     });
     test('Retorna los valores que se le mandan en el props  con el boton reset', () => {
        const v=110;
        const wrapperCouterApp=shallow(<CounterApp value={v} />);
        wrapperCouterApp.find('button').at(0).simulate('click');
        wrapperCouterApp.find('button').at(0).simulate('click');
        wrapperCouterApp.find('button').at(1).simulate('click');
        const ContadorH2=wrapperCouterApp.find('h2').text().trim();
        console.log(ContadorH2);
        expect(ContadorH2).toBe('110');
     });
     
    
})
