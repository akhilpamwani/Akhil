import React from 'react'
import '../assets/css/Skill.css'
import '../assets/css/Systemresponsive.css'
export const Skill = () => {
  
    return (
        <>
         <div className="Full" id="Skill" data-aos="fade-down"  data-aos="fade-up-right">
        <div className="Skill-h3-logo">
            <h3 className="Skill-h3-logo">Skills</h3>
            <p className="Skill-p">My Skills</p> </div>
        <div className="Skills">
          <div className= "Skill Skills-dark">

              <li className="Skill-li"><h3 className="Skill-h3">HTML5</h3><h2 className='Skill-h2'>90%</h2><span className="bar"><span className="html Span-2"></span></span></li>
              <li className="Skill-li"><h3 className="Skill-h3">CSS3</h3><h2 className='Skill-h2'>60%</h2><span className="bar"><span className="css Span-2"></span></span></li>
              <li className="Skill-li"><h3 className="Skill-h3">Javascript</h3><h2 className='Skill-h2'>30%</h2><span className="bar"><span className="js Span-2"></span></span></li>
              <li className="Skill-li"><h3 className="Skill-h3">React JS</h3><h2 className='Skill-h2'>30%</h2><span className="bar"><span className="react Span-2"></span></span></li>
              <li className="Skill-li"><h3 className="Skill-h3">Mongodb</h3><h2 className='Skill-h2'>20%</h2><span className="bar"><span className="mgdb Span-2"></span></span></li>
              <li className="Skill-li"><h3 className="Skill-h3">Express Js</h3><h2 className='Skill-h2'>50%</h2><span className="bar"><span className="njs Span-2"></span></span></li>
              <li className="Skill-li"><h3 className="Skill-h3">Bootstrap</h3><h2 className='Skill-h2'>25%</h2><span className="bar"><span className="bootstrap Span-2"></span></span></li>
              </div>  </div></div>
        </>
    )
}
