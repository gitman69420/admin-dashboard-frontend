import React, { useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import { Switch } from "@material-ui/core";
import { BiConversation } from "react-icons/bi"

import SettingItem from "./SettingItem/SettingItem";

import "./MainContent.css";
import "./SettingItem/SettingItem.css";

function MainContent(props) {
  const settings = [
    {
      head: "Moderation",
      desc: "Easily review all questions before they go live",
    },
    {
      head: "Labels",
      desc: "Categorize and filter questions",
    },
    {
        head:"Downvotes",
        desc:"Enable downvoting of questions"
    },
    {
        head:"Replies",
        desc:"Allow participants to reply to or comment on the questions"
    },
    {
        head:"Anonymous questions",
        desc:"Let your participants send anonymous questions"
    },
    {
        head:"Close questions",
        desc:"Prevent the participants from sending new questions to your event"
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main-content-body">
        <div className="setting-item" style={{marginTop:"2rem"}}>
        <h2 className="main-content-header">
        <>
        {props.heading+"\t"}
        <BiConversation style={{fontSize:"1.15em"}} />
        </>
        </h2>
        <Switch onClick={()=>setIsOpen(!isOpen)} />
        </div>
      <Collapse collapsedSize={"0"} in={isOpen}>
        {settings.map((item, index) => {
          return (
            <SettingItem key={index} heading={item.head} desc={item.desc} />
          );
        })}
      </Collapse>
    </div>
  );
}

export default MainContent;
