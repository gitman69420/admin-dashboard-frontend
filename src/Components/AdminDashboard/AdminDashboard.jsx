import React from "react";

import Navbar from "../Navbar/Navbar";
import PageContent from "./PageContent/PageContent";

import "./AdminDashboard.css";

function AdminDashboard() {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div style={styles}>
        <PageContent />
      </div>
    </div>
  );
}

export default AdminDashboard;
