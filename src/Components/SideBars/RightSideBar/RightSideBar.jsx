import React, { useState } from "react";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { BiConversation } from "react-icons/bi";
import { RiSettings3Fill } from "react-icons/ri";

import "./RightSideBar.css";

function ProfileAvatar() {
  const [unreadProfileNotifications, changeProfileNotif] = useState(true);

  const notifDot = {
    position: "relative",
    top: "-1.25rem",
    left: "0.25rem",
    height: "0.75rem",
    width: "0.75rem",
    backgroundColor: "#c82ae8",
    borderRadius: "50%",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "white",
    zIndex: "10",
  };

  return (
    <>
      <div className="profile-avatar-container">
        <img
          src="https://media.altphotos.com/cache/images/2017/07/04/07/752/portrait-man-dark.jpg"
          className="profile-avatar"
          alt="Avatar"
        />
      </div>
      {unreadProfileNotifications && <div style={notifDot}></div>}
    </>
  );
}

function IconNotifDot() {
  const iconNotifDotStyle = {
    position: "relative",
    right: "-1.25rem",
    top: "0.5rem",
    height: "0.5rem",
    width: "0.5rem",
    borderRadius: "50%",
    backgroundColor: "#74eb6e",
  };

  return <div style={iconNotifDotStyle}></div>;
}

function RightIcons() {
  const [iconNotifDots, setIconNotifDots] = useState({
    notif: true,
    messages: true,
    settings: true,
  });

  const iconStyles = {
    fontSize: "2em",
    color: "grey",
  };

  return (
    <div className="icons-container">
      <div>
        {iconNotifDots.notif && <IconNotifDot />}
        <IoNotificationsCircleSharp style={iconStyles} />
      </div>
      <div>
        {iconNotifDots.messages && <IconNotifDot />}
        <BiConversation style={iconStyles} />
      </div>
      <div>
        {iconNotifDots.settings && <IconNotifDot />}
        <RiSettings3Fill style={iconStyles} />
      </div>
    </div>
  );
}

function RightSideBar() {
  return (
    <div className="right-sidebar-container">
      <div>
        <ProfileAvatar />
      </div>
      <RightIcons />
    </div>
  );
}

export default RightSideBar;
