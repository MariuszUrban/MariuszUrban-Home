import React from "react";
import "./_displayContainer.scss";

export default function DisplayContainer({ background, text }) {
  return (
    <div className="displayContainer">
      <div className="displayContainer-background">{background}</div>
      <div className="displayContainer-text">{text}</div>
    </div>
  );
}
