import React, { useContext } from "react";
import { VscGraph } from "react-icons/vsc";
import { IoIosPeople } from "react-icons/io";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaEnvelopeOpenText } from "react-icons/fa";

import "./LeftSidebarIcon.css";

import { IconContext } from "../LeftSideBar";

function LeftSidebarIcon(props) {

    const selectedIcon = useContext(IconContext);  
 
    const flexDisplay = {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    }

    const selectedIconStyle = {
        ...flexDisplay,
        height:"4rem",
        width:"5rem", 
        borderRadius:"1rem",
        borderWidth:"0.1rem",
        borderStyle:"solid",
        borderColor:"#c82ae8"
    }

    const unselectedIconStyle = {
        ...flexDisplay,
        height:"4rem",
        width:"5rem",  
        borderWidth:"0.1rem",
        borderStyle:"solid",
        borderColor:"white"
    }

    const iconStyle = {
        marginTop:"0.5rem",
        fontSize:"2em",
        color:"#c82ae8"
    }

    const disabledIconStyle = {
        marginTop:"0.25rem",
        fontSize:"2em",
        color:"grey"    
    }

    const iconLabelStyle = {
        color:props.disabled?"grey":"#c82ae8",
        fontSize:"0.75em",
        fontWeight:"bolder",
        
    }

    const getIcon = (id) => {
        switch(id){
            case 0:
                return <VscGraph style={!props.disabled?iconStyle:disabledIconStyle}/>
            case 1:
                return <IoIosPeople style={!props.disabled?iconStyle:disabledIconStyle}/>
            case 2:
                return <DiGoogleAnalytics style={!props.disabled?iconStyle:disabledIconStyle}/>
            case 3:
                return <FaEnvelopeOpenText style={!props.disabled?iconStyle:disabledIconStyle}/>
            default:
                return null
        }
    }  


  return (
    <div style={selectedIcon === props.id?selectedIconStyle:unselectedIconStyle} onClick={!props.disabled?props.onClick:null} className="icon-outer-margin">
      <div>
        <span>{getIcon(props.id)}</span>
      </div>
      <div>
        <p style={iconLabelStyle}>{props.text}</p>
      </div>
    </div>
  );
}

export default LeftSidebarIcon;
