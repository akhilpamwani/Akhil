import React from 'react'
import '../assets/css/Nav.css'
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";
import instagram  from "../assets/img/instagram.png";
import darkmode from "../assets/img/darkmode.png";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/Logo.png'
import '../assets/css/Systemresponsive.css'


export const Nav = (props) => {

    return (
        <>

        <div className="NavDiv" >
          <nav className="NavBar">
              <div className="Logo">
              <NavLink to="/" className="Nav-anchr"><img src={Logo} className='Nav-img' alt="" srcSet={Logo} /></NavLink></div>
              <ul className="Nav-ul">
                    <li className="Nav-Li"><a  className="Nav-anchr Nav-anchr-dark " href="#Home">Home</a></li>
                    <li className="Nav-Li"><a  className="Nav-anchr Nav-anchr-dark " href="#About">About</a></li>
                    <li className="Nav-Li"><a  className="Nav-anchr Nav-anchr-dark " href="#Skill">Skills</a></li>
                    <li className="Nav-Li"><a  className="Nav-anchr Nav-anchr-dark " href="#Services">Services</a></li>
                    <li className="Nav-Li"><a  className="Nav-anchr Nav-anchr-dark " href="#Project">Projects</a></li>
                    <li className="Nav-Li"><a  className="Nav-anchr Nav-anchr-dark " href="#Contact">Get in touch</a></li>

              </ul>
              <div className="Social">
                 <a href="https://github.com/akhilpamwani/" className='Nav-anchr'> <img src={github} alt="" srcSet={github} className="Social-icons" /></a>
                 <a href="https://www.linkedin.com/in/aryan-pamwani-8771161a6/" className='Nav-anchr'><img src={linkedin} alt="" srcSet={linkedin} className="Social-icons" /></a> 
                 <a href="https://www.instagram.com/aryanpamwani.official/" className='Nav-anchr'><img src={instagram} alt="" srcSet={instagram} className="Social-icons" /></a> 
                  <img src={darkmode} alt="" srcSet={darkmode}  onClick={props.button}className="Social-icons" />
              </div>
              </nav>  
              </div>
        </>
    )
}
