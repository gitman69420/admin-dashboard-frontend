import React from "react";
import RightSideBar from "../SideBars/RightSideBar/RightSideBar";
import LeftSideBar from "../SideBars/LeftSideBar/LeftSideBar";
import AdminDashboard from "../AdminDashboard/AdminDashboard";

import "./PageLayout.css";

function PageLayout() {
  return (
    <div className="page-main-body">
      <div style={{justifySelf:"start"}}>
        <LeftSideBar />
      </div>
      {/* <div style={{justifySelf:"center"}}> */}
      <div>
        <AdminDashboard />
      </div>
      <div style={{justifySelf:"end"}}>
        <RightSideBar />
      </div>
    </div>
  );
}

export default PageLayout;
