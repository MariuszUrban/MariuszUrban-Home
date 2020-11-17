import React from 'react';
import './_backgroundImage.scss';

export default function BackgroundImage(props) {
    return (
            <div className={`background-image-` + props.element}></div>
         
    )
}
