import React from 'react'
import first from'../assets/img/portfolio1.jpg'
import second from'../assets/img/portfolio2.jpg'
import third from'../assets/img/portfolio3.jpg'
import '../assets/css/Service.css'
import '../assets/css/Systemresponsive.css'
import imgicon from'../assets/img/right.png'

export const Services = () => {
   
    return (
        <>
            <div className="Services-intro" id='Services'>
                <h3 className="Services-h3">
                    Services
                </h3>
                <p className="Services-p">
                    My Services
                </p>

            </div>
        <section className="Services">
<div className="Services-Control">
<div className="Services-box" data-aos="fade-right">
    <img src={first} srcSet={first} alt="" className="Services-Img" />
<h3 className="Service-Heading">Frontend Development</h3>  
<a  className="Nav-anchr Nav-anchr-dark " href="#Contact"><button className="Service-btn">Hire Me <span><img src={imgicon} alt="" srcSet={imgicon} className="Service-btn-Ing" /></span></button>
</a></div>
<div className="Services-box" data-aos="fade-up">
    <img src={second} alt="" srcSet={second} className="Services-Img" />
<h3 className="Service-Heading">Backend Development</h3>
<a  className="Nav-anchr Nav-anchr-dark " href="#Contact"><button className="Service-btn">Hire Me <span><img src={imgicon} alt="" srcSet={imgicon} className="Service-btn-Ing" /></span></button>
</a></div>
<div className="Services-box"data-aos="fade-left">
    <img src={third} alt="" srcSet={third} className="Services-Img" />
 <h3 className="Service-Heading">Database Designer </h3>
 <a  className="Nav-anchr Nav-anchr-dark " href="#Contact"><button className="Service-btn">Hire Me <span><img src={imgicon} alt='' srcSet={imgicon} className="Service-btn-Ing" /></span></button>   
</a> </div></div>
        </section>
        </>
    )
}
