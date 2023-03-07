import React from "react";
import PropTypes from 'prop-types';

function Alerta(props){
    return (
        <div className='alert'>
            {props.mensaje}
        </div>
    )
   }
   
export default Alerta;
