import React, { useState, createContext, useContext } from "react";

import PaneItem from "./PaneItem/PaneItem";

import {
  NavListSubheadings,
  NavigationContext,
} from "../PageContentNavigationContext";

import "./SideContent.css";

export const SelectedTab = createContext();
export const SelectTab = createContext();

function SideContent(props) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(2);

  const navIndex = useContext(NavigationContext);

  const tabsList = NavListSubheadings[navIndex];

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
    <>
      <SelectedTab.Provider value={selectedTabIndex}>
      <SelectTab.Provider value={setSelectedTabIndex}>
        <div className="side-content-body">
          <PaneHeader heading={props.heading} />
          {tabsList.map((item, index) => {
            return (
              <PaneItem
                text={item.titleName}
                disabled={item.disabled}
                id={index}
                onClick={() => setSelectedTabIndex(index)}
              />
            );
          })}
        </div>
        {props.children}
        </SelectTab.Provider>
      </SelectedTab.Provider>
    </>
  );
}

export default SideContent;
