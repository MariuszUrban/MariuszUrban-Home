import React from "react";
import HTML from './assets/html5.png';
import CSS from './assets/css3-alt.png';
import SASS from './assets/sass.png'
import Bootstrap from "./assets/bootstrap.png";
import JS from './assets/js-square.png';
import REACT from './assets/react.png';
import REDUX from './assets/redux.png';

import "./_technologies.scss";

export default function Technologies(props) {
  const tech = props.tech;
  if (tech === "front") {
    return (
      <div className="tech-container">
        <h1>Technologie</h1>
        <div className="tech-line1">
          <div className="tech-element">
            <img src={HTML} alt="" />
            <span>HTML5</span>
          </div>
          <div className="tech-element">
            <img src={CSS} alt="" />
            <span>CSS 3</span>
          </div>
          <div className="tech-element">
            <img src={SASS} alt="" />
            <span>SASS</span>
          </div>
          <div className="tech-element">
            <img src={Bootstrap} alt="" />
            <span>Bootstrap</span>
          </div>
        </div>
        <div className="tech-line2">
          <div className="tech-element">
            <img src={JS} alt="" />
            <span>JavaScript6</span>
          </div>
          <div className="tech-element">
            <img src={REACT} alt="" />
            <span>React</span>
          </div>
          <div className="tech-element">
            <img src={REDUX} alt="" />
            <span>Redux</span>
          </div>
        </div>
      </div>
    );
  }
}
