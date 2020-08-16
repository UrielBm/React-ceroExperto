import React, { Fragment } from 'react';
const PrimeraApp=() => {

    const saludo2="Hola banda";
    const saludo={
        nombre: 'Fernando',
        edad:34,
        entidad: 'Hidalgo',
    };
    return (
        <Fragment>
        <h1>{saludo2}</h1>
        {/* <pre>{JSON.stringify(saludo,null, 3 )}</pre> */}
        <p>Mi primera App</p>
        </Fragment>
    ); 
}
export default PrimeraApp;