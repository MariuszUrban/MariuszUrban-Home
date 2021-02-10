import React, { Fragment } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import "_navLinks.scss";

export default function NavigationMoving() {
  return (
    <Fragment>
      <Link
        activeClass="active"
        to="start"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Start
      </Link>
      <Link
        activeClass="active"
        to="front"
        spy={true}
        smooth={true}
        duration={500}
      >
        Front-End
      </Link>
      <Link
        activeClass="active"
        to="ux"
        spy={true}
        smooth={true}
        duration={500}
      >
        UI/UX
      </Link>{" "}
      <Link
        activeClass="active"
        to="graphic"
        spy={true}
        smooth={true}
        duration={500}
      >
        Grafika & 3D
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
      >
        O mnie
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        Kontakt
      </Link>
    </Fragment>
  );
}
