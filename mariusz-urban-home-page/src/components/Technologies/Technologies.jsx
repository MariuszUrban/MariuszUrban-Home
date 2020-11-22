import React from "react";
import HTML from './assets/html5.png';
import CSS from './assets/css3-alt.png';
import SASS from './assets/sass.png'
import Bootstrap from "./assets/bootstrap.png";
import JS from './assets/js-square.png';
import REACT from './assets/react.png';
import REDUX from './assets/redux.png';
import NOTES from './assets/Notes.png';
import SKETCH from './assets/sketch.png';
import XD from './assets/adobexd@2x.png';
import PHOTOSHOP from './assets/photoshop@2x.png';
import ILLUSTRATOR from './assets/llustrator@2x.png';
import INDESIGN from './assets/indesign@2x.png';
import LIGHTROOM from './assets/lightroomclassic@2x.png';
import BLENDER from './assets/blender_logo_no_socket_white@2x.png';
import SKETCHUP from './assets/sk@2x.png';
import VRAY from './assets/vr@2x.png';



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
  if (tech === "ux") {
    return (
      <div className="tech-container">
        <h1>Narzędzia</h1>
        <div className="tech-line1">
          <div className="tech-element">
            <img src={NOTES} alt="" />
            <span>Notatkl</span>
          </div>
          <div className="tech-element">
            <img src={SKETCH} alt="" />
            <span>Sketch</span>
          </div>
          <div className="tech-element">
            <img src={XD} alt="" />
            <span>Adobe XD</span>
          </div>
        </div>
      </div>
    );
  }
  if (tech === "graphic") {
    return (
      <div className="tech-container">
        <h1>Grafika</h1>
        <div className="tech-line1">
          <div className="tech-element">
            <img src={PHOTOSHOP} alt="" />
            <span>Photoshop</span>
          </div>
          <div className="tech-element">
            <img src={ILLUSTRATOR} alt="" />
            <span>Illustrator</span>
          </div>
          <div className="tech-element">
            <img src={INDESIGN} alt="" />
            <span>InDesign</span>
          </div>
          <div className="tech-element">
            <img src={LIGHTROOM} alt="" />
            <span>Lightroom</span>
          </div>
        </div>
        <h1>3D</h1>
        <div className="tech-line2">
          <div className="tech-element threedee">
            <img src={BLENDER} alt="" />
          </div>
          <div className="tech-element threedee">
            <img src={SKETCHUP} alt="" />
          </div>
          <div className="tech-element threedee">
            <img  src={VRAY} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
