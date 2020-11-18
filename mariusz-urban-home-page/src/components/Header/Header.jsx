import React from 'react'
import './_header.scss';

export default function Header(props) {
    return (
        <div className={`headerContainer-`+props.style}>
            <div className="title">
            <span>{props.title}</span>
            </div>
            <div className="lang">
                {props.lang}
            </div> 
        </div>
    )
}
