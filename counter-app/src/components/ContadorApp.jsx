import React from "react";
import PropTypes from "prop-types";

function contador(props){
    return(
        <div> 
            <h1>CounterApp</h1>
            <h1>{ props.value }</h1>    
        </div>
    )

}

contador.PropTypes ={
    value: PropTypes.number
}
export default contador;