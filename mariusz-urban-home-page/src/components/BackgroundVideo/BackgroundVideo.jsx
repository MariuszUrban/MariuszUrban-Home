import React from "react";
import "./_backgroundVideo.scss";
import video from "./utils/City.mp4";

export default function BackgroundVideo() {
  return (
    <div className="BackgroundVideoContainer">
      <div className="video-wrapper">
        <video
          playsInline
          autoPlay
          muted
          loop
          poster="./utils/City.png"
          id="City"
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}
