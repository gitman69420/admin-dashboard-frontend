import React from "react";

import Navbar from "../Navbar/Navbar";
import PageContent from "./PageContent/PageContent";
import AdminNavbar from "./PageContent/AdminNavbar/AdminNavbar";
import PageContentNavigationContext from "./PageContent/PageContentNavigationContext";


import "./AdminDashboard.css";

function AdminDashboard() {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  return (
    <PageContentNavigationContext>
    <div className="dashboard-container">
      <Navbar />
      <AdminNavbar />
      <div style={styles}>
        <PageContent />
      </div>
    </div>
    </PageContentNavigationContext>
  );
}

export default AdminDashboard;
