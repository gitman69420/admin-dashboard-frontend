import React from 'react'

import { IOSSwitch } from '../../../../IosStyleSwitch/IosStyleSwitch';

import './SettingItem.css'

function SettingItem({heading, desc}) {
    return (
        <div className="setting-item">
            <div className="setting-info">
                <h4 className="setting-heading">{heading}</h4>
                <p className="setting-desc">{desc}</p>
            </div>
            <div className="switch-container">
                <IOSSwitch />
            </div>
        </div>
    )
}

export default SettingItem
