import React from 'react'
import './_langSwitch.scss'

export default function LangSwitch() {
    return (
        <div className="LangSwitchContainer">
            <button><span>PL</span></button>
            <button><span>DE</span></button>
            <button><span>ENG</span></button>
        </div>
    )
}
