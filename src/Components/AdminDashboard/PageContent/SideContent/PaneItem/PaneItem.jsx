import React, { useContext } from "react"
import { AiTwotoneLock } from "react-icons/ai"

import {SelectedTab} from "../SideContent"

import './PaneItem.css'

function PaneItem(props) {
    const selected = useContext(SelectedTab);
    
    const selectedStyle = {
      width: "0.5rem",
      backgroundColor: "#c82ae8",
    };

    const unSelectedStyle = {};

    const disabledStyle = {}; 

    return (
      <div
        className="pane-item"
        style={{ backgroundColor: selected === props.id && "#EEE" }}
        onClick={()=>props.onClick()}
      >
        <div
          style={
            !props.disabled
              ? selected === props.id
                ? selectedStyle
                : unSelectedStyle
              : disabledStyle
          }
        ></div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4
            style={{
              color: !props.disabled
                ? selected === props.id
                  ? "#c82ae8"
                  : "grey"
                : "grey",
              paddingLeft: "0.5rem",
              fontWeight: "400",
            }}
          >
            {props.text + "\t"}
            {props.disabled && (
              <AiTwotoneLock
                style={{
                  fontSize: "1.15em",
                  position: "relative",
                  top: "0.25rem",
                }}
              />
            )}
          </h4>
        </div>
      </div>
    );
  }

export default PaneItem