import React from "react";
import "./_textContainer.scss";

export default function TextContainer(props) {
  return (
    <div className={`TextContainer-` + props.style}>
      <div className={`TextContainer-Header-` + props.style}>{props.header}</div>
      {props.nav}
      <div className={`TextContainer-Desc-` + props.style}>
        {props.desc}
        {props.tech}
      </div>
    </div>
  );
}
