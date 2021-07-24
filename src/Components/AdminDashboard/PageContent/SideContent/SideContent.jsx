import React, { useState, createContext } from "react";

import PaneItem from "./PaneItem/PaneItem";

import "./SideContent.css";

export const SelectedTab = createContext();

function SideContent() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(2);

  function PaneHeader(props) {
    const headingContainerStyle = {
      padding: "1.75rem 1rem",
      color: "#aaa",
      fontWeight: "350",
    };

    return (
      <div className="pane-header">
        <h2 style={headingContainerStyle}>{props.heading}</h2>
      </div>
    );
  }



  return (
    <div className="side-content-body">
    <SelectedTab.Provider value={selectedTabIndex}>
      <PaneHeader heading="Event Settings" />
      <PaneItem text="General" id={0} onClick={()=>setSelectedTabIndex(0)}/>
      <PaneItem text="Privacy" id={1} onClick={()=>setSelectedTabIndex(1)}/>
      <PaneItem text="Features" id={2} onClick={()=>setSelectedTabIndex(2)}/>
      <PaneItem text="Customization" id={3} onClick={()=>setSelectedTabIndex(3)}/>
      <PaneItem text="Integration" id={4} onClick={()=>setSelectedTabIndex(4)}/>
      <PaneItem text="Session Settings" id={5} disabled onClick={()=>setSelectedTabIndex(5)}/>
      <PaneItem text="My plans" id={6} onClick={()=>setSelectedTabIndex(6)}/>
      </SelectedTab.Provider>
    </div>
  );
}

export default SideContent;
