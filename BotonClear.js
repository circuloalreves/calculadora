import React from 'react';
import '../stylessheets/BotonClear.css'

const BotonClear = (props) => (
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
)

export default BotonClear;