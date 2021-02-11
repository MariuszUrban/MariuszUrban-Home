import React from "react";
import "./_backgroundImage.scss";

export default function BackgroundImage({
  element,
  animation,
  delay,
  mirror,
  once,
  placement,
  anchor,
  offset,
}) {
  return (
    <div
      className={`background-image-` + element}
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-mirror={mirror}
      dara-aos-once={once}
      data-aos-anchor-placement={placement}
      data-aos-anchor={anchor}
      data-aos-offset={offset}
    ></div>
  );
}
