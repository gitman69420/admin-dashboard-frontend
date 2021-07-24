import React from 'react'
import Switch from '@material-ui/core/Switch';

import './SettingItem.css'

function SettingItem({heading, desc, value}) {
    return (
        <div className="setting-item">
            <div className="setting-info">
                <h4 className="setting-heading">{heading}</h4>
                <p className="setting-desc">{desc}</p>
            </div>
            <div className="switch-container">
                <Switch color="primary" style={{colorPrimary:"green"}}/>
            </div>
        </div>
    )
}

export default SettingItem
