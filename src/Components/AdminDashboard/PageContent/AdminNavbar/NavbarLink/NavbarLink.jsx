import React, { useContext } from 'react'

import "./NavbarLink.css";

import {NavigationContext } from "../../PageContentNavigationContext";

export default function NavbarLink(props) {

    const isSelected = (props.id === useContext(NavigationContext))

    return (
        <div onClick={()=>{props.onClick()}} className={`navbar-link-item ${isSelected?"selected-link":null}`}>
            {props.navLink}
        </div>
    )
}
