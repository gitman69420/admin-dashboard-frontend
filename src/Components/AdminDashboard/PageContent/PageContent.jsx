import React from 'react'

import MainContent from './MainContent/MainContent'
import SideContent from './SideContent/SideContent'

import './PageContent.css'

function PageContent() {
    return (
        <div className="page-content-body">
            <SideContent />
            <MainContent heading="Audience Q&A" />
        </div>
    )
}

export default PageContent
