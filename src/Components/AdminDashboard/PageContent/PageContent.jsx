import React, { useContext } from "react";

import MainContent from "./MainContent/MainContent";
import SideContent from "./SideContent/SideContent";

import "./PageContent.css";

import { NavList, NavigationContext, NavListSubheadings } from "./PageContentNavigationContext";
import { SelectedTab } from "./SideContent/SideContent";

function PageContent() {
  const pageIndex = useContext(NavigationContext);
  const tabIndex = useContext(SelectedTab);
  const pageName = NavListSubheadings[pageIndex][tabIndex];

  return (
    <div className="page-content-body">
      <SideContent heading={NavList[pageIndex]}>
        <MainContent heading={pageName} />
      </SideContent>
    </div>
  );
}

export default PageContent;
