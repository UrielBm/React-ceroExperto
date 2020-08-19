import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
 
const CounterApp=({value}) => {
    const [counter,setCounter]= useState(value);
    //Funcion del boton 
    const handleAdd = () =>{
        setCounter(counter+1);
        // setCounter((c)=>c+1);
    }
    const Reset= () =>{
        setCounter(value);
    }
    const Handleless=() =>{
        setCounter(counter-1);
    }
    return (
        <Fragment>
        <h1>CouterApp *tarea*</h1>
        {/* <pre>{JSON.stringify(saludo,null, 3 )}</pre> */}
        <h2>{counter}</h2>
        <div className="wrapper-botones">
        <button className="button" onClick={handleAdd}>+1</button>
        <button className="button" onClick={Reset}>Reset</button>
        <button className="button" onClick={Handleless}>-1</button>
        </div>
        </Fragment>
    ); 
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
CounterApp.defaultProps={
    value: 10
}
export default CounterApp;