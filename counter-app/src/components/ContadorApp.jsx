import React from 'react';
import PropTypes from 'prop-types';

function ContadorApp(props){

    const { value } = props; 

    const imprimeValor = () => {
        console.log(value);
    }

    return(
        <div> 
            <h1>CounterApp</h1>
            <h2>{ value }</h2>    
            <button onClick={ imprimeValor }>Mostrar Valor</button>
        </div>
    )

}

ContadorApp.propTypes ={
    value: PropTypes.number.isRequired
}
export default ContadorApp;