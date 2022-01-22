import React from 'react'
import  icon from'../assets/img/bg_about.png'
import  dicon from'../assets/img/download.png'
import '../assets/css/About.css'

export const About = () => {
    
    return (
        <>
             <div className="Intro" >
                    <h3 className="About-intro">About</h3>
                    <p className="About-small">My Introduction</p>

             </div>
        <section className="About" id='About' >
            
         <div className="About-control">
             <div className="About-Img"data-aos="fade-up-right">
                 <img src={icon} alt=""  className="Img-about"srcSet={icon} />
             </div>
<div className="About-Content"data-aos="fade-up-left">
    <p className="About-para">Highly Skilled Web-Developer with extensive practical knowledge and master in devops operations and web technologies.</p>
        <button className="About-btn">Download CV Resume <span><img src={dicon} alt="" srcSet={dicon} className="About-btn-Img" /></span> </button>
</div>
            
         </div></section>
        </>
    )
}
