import React from 'react'
import { BiMenuAltLeft } from "react-icons/bi"

import './Navbar.css'

function Navbar() {

    const navbarStyle = {
        width:"100%",
        height:"5rem",
    }

    const navbarIconStyle = {
        fontSize:"3em",
    }

    return (
        <div style={navbarStyle} className="navbar-body">
            <BiMenuAltLeft style={navbarIconStyle} />
            <h1>Admin Dashboard</h1>
        </div>
    )
}

export default Navbar
