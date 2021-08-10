import React from "react"

import "./ButtonStyles.css"

function PrimaryButton1(props){
    return<>
        <button className="primary-button-1" onClick={props.onClick}>
            {props.label}
        </button>
    </>
}

export default PrimaryButton1