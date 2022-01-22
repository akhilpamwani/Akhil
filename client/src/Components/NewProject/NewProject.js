import React from 'react'
import Project from '../assets/img/bg_about.png'
import imgicon from'../assets/img/right.png'
import '../assets/css/NewProject.css'
import '../assets/css/Systemresponsive.css'

export const NewProject = () => {
   
    return (
        <>
        <section className="NewProject-Section">
        <div className="NewProject-Control" data-aos="zoom-out-up">
            <img src={Project} alt="Awsome" srcSet={Project} className='NewProject-Img' />
            <div className="Project-Content">
                <h3 className="NewProject-h3">
                You have a new project
                </h3>
                <p className="NewProject-para">
            Contact me now and get a 30% discount on your new project!
                </p>
                <a  className="Nav-anchr Nav-anchr-dark " href="#Contact">  <button className="NewProject-Button">Contact Me<span><img src={imgicon} alt="Aswome" srcSet={imgicon} className='NewProject-btn-Img' /></span></button>
            </a></div>
            </div>  </section>  
        </>
    )
}
