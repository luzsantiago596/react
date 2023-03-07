import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Alerta from './Alerta';

function ContadorApp(props){
    const { value } = props;
    const [counter, setCounter ] = useState(value);
    const [alerta, setAlerta] = useState(false);

    useEffect(() => {
        document.title = `El valor del contador es: ${counter}`;
      }, [counter]);

    const sumarValor = () => {
        setAlerta(false);

        setCounter(counter + 1);

        if (counter === 10) {
            setAlerta(true);
        }
        
    }
    
    const restarValor = () => {
        setCounter(counter -1);
    }

    const resetValor = () => {
        setCounter(value);
    }
    
    return(
        <div> 
            {console.log(counter)}
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>    
            {alerta && <Alerta mensaje="El contador alcanzó: 10" />}
            <button onClick={ sumarValor}> Sumar 1 </button>
            <button onClick={ restarValor }> Restar 1 </button>
            <button onClick={ resetValor }> Reset </button>
        </div>

    )

}

ContadorApp.propTypes ={
    value: PropTypes.number.isRequired
}
export default ContadorApp;
