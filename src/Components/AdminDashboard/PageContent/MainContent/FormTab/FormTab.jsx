import React from 'react'

import "./FormTabStyles.css"

function FormTab(props) {

    const index = 1

    const isSelected = props.id == index;

    return (
        <div className={`form-tab ${isSelected?`selected`:null}`}>
            {props.label}
        </div>
    )
}

export default FormTab
