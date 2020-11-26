import React from 'react'
import './_backgroundContainer.scss'

export default function BackgroundContainer(props) {
    return (
        <div className="BackgroundContainer">
            {props.image1}
            {props.image2}
            {props.image3}
            {props.image4}
            {props.image5}
        </div>
    )
}
