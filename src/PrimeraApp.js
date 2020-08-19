import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const PrimeraApp=({saludo, subtitulo}) => {
    // const saludo2="Hola banda";
    // const saludo={
    //     nombre: 'Fernando',
    //     edad:34,
    //     entidad: 'Hidalgo',
    // };

    return (
        <Fragment>
        <h1>{saludo}</h1>
        {/* <pre>{JSON.stringify(saludo,null, 3 )}</pre> */}
        <p>{subtitulo}</p>
        </Fragment>
    ); 
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps={
    subtitulo: 'Prueba tu primera App'
}
export default PrimeraApp;