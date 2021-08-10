import React from 'react'

import "./FormStyles.css";

function FormSelect(props) {
    return (
        <div className="form-input-container" style={{gridArea:props.gridArea}}>
            <h2 className="form-input-label">
                {props.label}
            </h2>
            <select title={props.label} className="form-input-select" value={props.value} onChange={props.onChange}>
                {
                    props.optionList.map((item)=>{
                        return <option value={item.value}>{item.disp}</option>
                    })
                }
            </select>
        </div>
    )
}

export default FormSelect