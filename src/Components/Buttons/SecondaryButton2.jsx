import React from "react"

import "./ButtonStyles.css"

function SecondaryButton2(props){
    return<>
        <button className="secondary-button-2" onClick={props.onClick}>
            <h4>{props.label}</h4>
        </button>
    </>
}

export default SecondaryButton2