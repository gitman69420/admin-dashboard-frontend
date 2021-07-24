import React, { useState, createContext } from "react";

import "./LeftSideBar.css";

import LeftSidebarIcon from "./LeftSidebarIcon/LeftSidebarIcon";

export const IconContext = createContext();

function LeftSideBar() {
  
    const [selectedIcon, setSelectdIcon] = useState(0);

  return (
    <IconContext.Provider value={selectedIcon}>
      <div className="left-sidebar-container">
        <LeftSidebarIcon id={0} text="Events" onClick={()=>{setSelectdIcon(0)}} />
        <LeftSidebarIcon id={1} text="Teams" onClick={()=>{setSelectdIcon(1)}}/>
        <LeftSidebarIcon disabled id={2} text="Analytics" onClick={()=>{setSelectdIcon(2)}}/>
        <LeftSidebarIcon disabled id={3} text="Results" onClick={()=>{setSelectdIcon(3)}}/>
        </div>
    </IconContext.Provider>
  );
}

export default LeftSideBar;
