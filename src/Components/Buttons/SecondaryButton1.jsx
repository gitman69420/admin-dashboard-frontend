import React from "react"

import "./ButtonStyles.css"

function SecondaryButton1(props){
    return<>
        <button className="secondary-button-1" onClick={props.onClick}>
            <h4>{props.label}</h4>
        </button>
    </>
}

export default SecondaryButton1