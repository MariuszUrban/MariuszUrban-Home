import React from 'react'
import './_textContainer.scss'

export default function TextContainer(props) {
    return (
        <div className="TextContainer">
            {props.header}
            {props.nav}
            {props.desc}
            {props.tech}
        </div>
    )
}
