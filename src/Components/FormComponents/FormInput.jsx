import React from 'react'

import "./FormStyles.css";

function FormInput(props) {
    return (
        <div className={`form-input-container`} style={{gridArea:props.gridArea}}>
            <h2 className="form-input-label">
                {props.label}
            </h2>
            <input className="form-input-textbox" placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default FormInput
