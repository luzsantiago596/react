import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function ContadorApp(props){
    const { value } = props;
    const [counter, setCounter ] = useState(value);

    const sumarValor = () => {
        setCounter(counter + 1);
    }

    const restarValor = () => {
        setCounter(counter -1);
    }

    const resetValor = () => {
        setCounter(value);
    }

    return(
        <div> 
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>    
            <button onClick={ sumarValor }> Sumar 1 </button>
            <button onClick={ restarValor }> Restar 1 </button>
            <button onClick={ resetValor }> Reset </button>
        </div>
    )

}

ContadorApp.propTypes ={
    value: PropTypes.number.isRequired
}
export default ContadorApp;