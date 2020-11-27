import React from "react";
import "./_socialMedia.scss";

export default function SocialMedia() {
  return (
    <div className="SocialMediaContainer">
      <div className="title-social"> <h1>Social Media</h1></div>   
      <div className="logotypes">
        <div className="single-social">
          <a
            href="https://github.com/MariuszUrban"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-img git"></div>
            <span>GitHub</span>
          </a>
        </div>
        <div className="single-social">
          <a
            href="https://www.linkedin.com/in/mariusz-urban/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-img linked"></div>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
