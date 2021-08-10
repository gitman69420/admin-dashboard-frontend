import React, { useContext } from 'react'

import NavbarLink from './NavbarLink/NavbarLink';

import "./AdminNavbar.css";

import { NavList, NavigationContextModifier } from "../PageContentNavigationContext";

function NavbarDivider(){
    return<><div className="navbar-divider"></div></>
}

export default function AdminNavbar() {

    const setNav = useContext(NavigationContextModifier);

    return (
        <div className="admin-navbar-container">
            {
                NavList.map((item, index)=>{
                    return <>
                    <NavbarLink key={index} id={index} navLink={item} onClick={()=>{setNav(index)}}/>
                    {(index !== NavList.length-1)?<NavbarDivider/>:null}
                    </>
                })
            }
        </div>
    )
}
