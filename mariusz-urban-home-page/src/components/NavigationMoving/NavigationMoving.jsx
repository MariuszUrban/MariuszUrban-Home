import React from 'react';
import './_navigationMoving.scss';
import {Link, animateScroll as scroll} from 'react-scroll';


export default function NavigationMoving() {
    return (
        <nav className="NavigationMovingContainer">
            <ul className="NavigationMoving-List">
       <li>
       <Link   
                 activeClass="active"
                  to="start"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}> <button> <span>Start</span></button></Link></li>
                <li>
                <Link   
                 activeClass="active"
                  to="front"
                  spy={true}
                  smooth={true}
                  duration={500}><button><span>Front-End</span></button></Link>
                </li>
                <li> <Link   
                 activeClass="active"
                  to="ux"
                  spy={true}
                  smooth={true}
                  duration={500}><button><span>UI/UX</span></button></Link></li>
                <li> <Link   
                 activeClass="active"
                  to="graphic"
                  spy={true}
                  smooth={true}
                  duration={500}><button><span>Grafika & 3D</span></button></Link></li>
                <li> <Link   
                 activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}><button><span>O mnie</span></button></Link></li>
                <li> <Link   
                 activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}><button><span>Kontakt</span></button></Link></li>
            </ul>
        </nav>
    )
}
