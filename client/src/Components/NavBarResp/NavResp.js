import React,{useState} from 'react'
import githubresp from "../assets/img/github.png";
import linkedinresp from "../assets/img/linkedin.png";
import instagramresp  from "../assets/img/instagram.png";
import darkmoderesp from "../assets/img/darkmode.png";
import { NavLink } from 'react-router-dom';
import '../assets/css/NavResp.css'
import Logoresp from '../assets/img/Logo.png'
import Menuresp from '../assets/img/menu.png'
export const NavResponsive = (props) => {
    const [status,setStatus]=useState(false)
    return (
        <>

        <div className={status?"Nav-resp":" Nav-resp-cl"}>
            <nav className="NavBar-resp ">
                <div className="Logo-resp">
                <NavLink to="/" className="Nav-anchr-resp"><img className="Nav-Logo-resp" src={Logoresp} srcSet={Logoresp} alt='img'/></NavLink>
                </div>
                <div className="Hamburger">
                        <img src={Menuresp} alt='img' srcSet={Menuresp} onClick={()=>setStatus(!status)} className="btn-Hamburger" />
                </div>

              
                <ul className={status?"Nav-ul-Resp": "Nav-ul-Resp-cl"}>
                    <li className="Nav-Li-Resp"><a href="#Home" onClick={()=>setStatus(!status)} className="Nav-anchr-resp">Home</a></li>
                    <li className="Nav-Li-Resp"><a href="#About"onClick={()=>setStatus(!status)} className="Nav-anchr-resp">About</a></li>
                    <li className="Nav-Li-Resp"><a href="#Skill"onClick={()=>setStatus(!status)} className="Nav-anchr-resp">Skill</a></li>
                    <li className="Nav-Li-Resp"><a href="#Services"onClick={()=>setStatus(!status)} className="Nav-anchr-resp">Services</a></li>
                    <li className="Nav-Li-Resp"><a href="#Project"onClick={()=>setStatus(!status)} className="Nav-anchr-resp">Project</a></li>
                    <div className="Social-resp">
                 <a href="https://github.com/akhilpamwani/" className='Nav-anch-resp'> <img src={githubresp} alt='img' srcSet={githubresp} className="Social-icons-resp" /></a>
                 <a href="https://www.linkedin.com/in/aryan-pamwani-8771161a6/" className='Nav-anchr-resp'><img alt='img' src={linkedinresp}  srcSet={linkedinresp} className="Social-icons-resp" /></a> 
                 <a href="https://www.instagram.com/aryanpamwani.official/" className='Nav-anchr-resp'><img alt='img' src={instagramresp} srcSet={instagramresp} className="Social-icons-resp" /></a> 
                  <img src={darkmoderesp} srcSet={darkmoderesp} onClick={props.button} alt="img" className="Social-icons-resp" />
              </div>
                </ul>
            </nav>
        </div>
            
        </>
    )
}
