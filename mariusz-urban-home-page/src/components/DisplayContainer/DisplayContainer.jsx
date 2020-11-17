import React from 'react'
import './_displayContainer.scss'

export default function DisplayContainer(props) {
    return (
        <div className="displayContainer">
            <div className="displayContainer-background">
                {props.background}
            </div>
            <div className="displayContainer-text">
                {props.text}
            </div>
        </div>
    )
}





