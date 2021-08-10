import React, { useState, useContext, useEffect } from "react";
import Collapse from "@material-ui/core/Collapse";

import PrimaryButton1 from "../../../Buttons/PrimaryButton1";
import PrimaryButton2 from "../../../Buttons/PrimaryButton2";
import SecondaryButton1 from "../../../Buttons/SecondaryButton1";
import SecondaryButton2 from "../../../Buttons/SecondaryButton2";
import FormInput from "../../../FormComponents/FormInput";
import FormSelect from "../../../FormComponents/FormSelect";
import FormSettingItem from "../../../FormComponents/FormSettingItem";
import FormTab from "./FormTab/FormTab";
import { IOSSwitch } from "../../../IosStyleSwitch/IosStyleSwitch";
import SettingItem from "./SettingItem/SettingItem";

import {
  NavigationContext,
  NavListSubheadings,
} from "../PageContentNavigationContext";
import { SelectTab, SelectedTab } from "../SideContent/SideContent";

import "./MainContent.css";
import "./SettingItem/SettingItem.css";
import FormUpload from "../../../FormComponents/FormUpload";

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
      head: "Downvotes",
      desc: "Enable downvoting of questions",
    },
    {
      head: "Replies",
      desc: "Allow participants to reply to or comment on the questions",
    },
    {
      head: "Anonymous questions",
      desc: "Let your participants send anonymous questions",
    },
    {
      head: "Close questions",
      desc: "Prevent the participants from sending new questions to your event",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const ANIndex = useContext(NavigationContext);
  const resetTab = useContext(SelectTab);
  const tabIndex = useContext(SelectedTab);

  const [displayHeading, setHeading] = useState(
    NavListSubheadings[ANIndex][tabIndex].titleName
  );

  useEffect(() => {
    resetTab(0);
  }, [ANIndex]);

  useEffect(() => {
    if (typeof NavListSubheadings[ANIndex][tabIndex].titleName !== undefined)
      setHeading(NavListSubheadings[ANIndex][tabIndex].titleName);
  }, [tabIndex]);

  // form layout

  return (
    <div className="main-content-body">
      <div className="setting-item" style={{ marginTop: "1rem" }}>
        <h2 className="main-content-header">
          <>{displayHeading + "\t"}</>
        </h2>
      </div>
      <form className="form">
      <div className="form-tabs">
        <FormTab label="Speakers" id={1}/>
        <FormTab label="Settings" id={2}/>
      </div>
        <div className="form-top-buttons">
        <PrimaryButton1 label="New Speaker"/>
        <SecondaryButton1 label="Export to excel"/>
        <SecondaryButton1 label="Upload .xlx file"/>
        </div>
        <div className="form-grid">
          <FormInput
            label="Name"
            placeholder="Enter speaker name"
            gridArea="name"
          />
          <FormInput
            label="Company"
            placeholder="Enter your company"
            gridArea="company"
          />
          <FormInput
            label="Email"
            placeholder="Enter your mail"
            gridArea="email"
          />
          <FormInput
            label="Position"
            placeholder="Enter your position"
            gridArea="position"
          />
          <FormUpload
            label="Upload"
            gridArea="upload"
          />
          <FormInput
            label="Speaker Details"
            placeholder="Enter Speaker Details"
            gridArea="speaker"
          />
          <FormInput
            label="Instagram/Facebook/Twitter"
            placeholder="Enter your link here"
            gridArea="socials"
          />
          <FormSelect
            label="Category"
            gridArea="category"
            optionList={[
              { disp: "Item 1", value: "item1" },
              { disp: "Item 2", value: "item2" },
              { disp: "Item 3", value: "item3" },
              { disp: "Item 4", value: "item4" },
            ]}
          />
          <FormSettingItem label="Speaker Private mode" gridArea="switch"/>
        </div>
      </form>
      <div className="form-bottom-buttons">
            <PrimaryButton2 label="Save"/>
            <SecondaryButton2 label="Delete selected"/>
            <SecondaryButton2 label="Cancel"/>
      </div>
    </div>
  );

// settings layout

  // return (
  //   <div className="main-content-body">
  //     <div className="setting-item" style={{ marginTop: "1rem" }}>
  //       <h2 className="main-content-header">
  //         <>
  //           {displayHeading + "\t"}
  //         </>
  //       </h2>
  //         <IOSSwitch
  //           onClick={() => setIsOpen(!isOpen)}
  //           color="primary"
  //         />
  //     </div>
  //     <Collapse collapsedSize={"0"} in={isOpen}>
  //       {settings.map((item, index) => {
  //         return (
  //           <SettingItem key={index} heading={item.head} desc={item.desc} />
  //         );
  //       })}
  //     </Collapse>
  //   </div>
  // );
}

export default MainContent;
