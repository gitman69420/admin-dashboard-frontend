import React from 'react'

import "./FormStyles.css";

function FormUpload(props) {
    return (
        <div className={`form-input-container`} style={{gridArea:props.gridArea}}>
            <h2 className="form-input-label">
                {props.label}
            </h2>
            <input type="file" title={props.label} className="form-input-upload" placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default FormUpload
