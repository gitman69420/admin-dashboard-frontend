import React from 'react'

import { IOSSwitch } from '../IosStyleSwitch/IosStyleSwitch';

import "./FormStyles.css";

function FormSettingItem(props) {
    return (
        <div className={`form-input-container-switch`} style={{gridArea:props.gridArea}}>
            <h2 className="form-input-label">
                {props.label}
            </h2>
            <IOSSwitch />
        </div>
    )
}

export default FormSettingItem