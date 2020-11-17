import React from 'react'
import './_header.scss';
import LangSwitch from '../LangSwitch/LangSwitch'

export default function Header(props) {
    return (
        <div className="headerContainer">
            <div className="title">
            <span>{props.title}</span>
            </div>
            <div className="lang">
                {props.lang}
            </div> 
        </div>
    )
}
