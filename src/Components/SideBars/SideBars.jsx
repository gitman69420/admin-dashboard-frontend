import React from 'react'

import './SideBars.css'

import LeftSideBar from './LeftSideBar/LeftSideBar';
import RightSideBar from './RightSideBar/RightSideBar';

function SideBars(props) {
    return (
        <div style={{height:"100%", margin:"0", padding:"0"}}>
            <LeftSideBar />
                {props.children}
            <RightSideBar />
        </div>
    )
}

export default SideBars;
