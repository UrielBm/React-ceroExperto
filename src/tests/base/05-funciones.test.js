import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';
describe('Test de Funciones 05-funciones.js ', () => {
    test('GetUser debe retornar un objeto', () => {
        const usuarioTest={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user=getUser();
        expect(usuarioTest).toEqual(user);
    })
    //debe de retornar un objeto GetUsuarioActivo
    test('debe de Retornar un objeto GetUsuarioActivo con parametro nombre', () => {
        const nombre='Uriel';
        const posibleResultado={
            uid: 'ABC567',
            username: nombre,
        }
        const retornoObjeto=getUsuarioActivo(nombre);
        expect(posibleResultado).toEqual(retornoObjeto);
    })
    //debe de retortnar un objeto con nombre Diana
    test('debe de retornar un objeto entre su nombre debe de estar nombre Diana de la funcion GetUsuarioActivo', () => {
        const objetoNombreDefault={
            uid: 'ABC567',
            username: 'Diana',
        }
        const objetoDafault=getUsuarioActivo();
        expect(objetoNombreDefault).toEqual(objetoDafault);
    })
    
    
})
