import React from "react"

import "./ButtonStyles.css"

function PrimaryButton2(props){
    return<>
        <button className="primary-button-2" onClick={props.onClick}>
            {props.label}
        </button>
    </>
}

export default PrimaryButton2