import React from 'react';
import './_navigation.scss';
import {Link} from 'react-scroll'

export default function Navigation() {
    return (
        <nav className="navContainer">
            <ul>
                <Link   
                 activeClass="active"
                  to="front"
                  spy={true}
                  smooth={true}
                  duration={300}><li>Front-End Development</li></Link>
                <Link   
                 activeClass="active"
                  to="ux"
                  spy={true}
                  smooth={true}
                  duration={400}><li>UI/UX Design</li></Link>
                 <Link   
                 activeClass="active"
                  to="graphic"
                  spy={true}
                  smooth={true}
                  duration={500}><li>Grafika & 3D</li></Link>
                  <Link   
                 activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={800}><li>O mnie</li></Link>
                 <Link   
                 activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1000}><li>Kontakt</li></Link> 
            </ul>
        </nav>
    )
}
