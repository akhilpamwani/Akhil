import React from 'react'
import { Carousel } from 'react-bootstrap'

import ProjectSecond from'../assets/img/Project1.png'
import ProjectFirst from'../assets/img/Project2.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import imgicon from'../assets/img/right.png'

import '../assets/css/Projects.css'
export const Project = () => {
  
    return (
        <>
      <div className="Project-intro">
                <h3 className="Project-h3">
                    Projects
                </h3>
                <p className="Project-p">
                    My Projects
                </p>

            </div>









            <section className="Project" id='Project'>
<div className="Project-Control"data-aos="zoom-in" >
            <Carousel>
  <Carousel.Item>
<div className="Project-box">
    <img src={ProjectFirst} alt="" srcSet={ProjectFirst} className="Project-Img" />
    <h3 className="Project-Heading">Blood Donation Website</h3>  
    <a href="https://blood-donors.co.in/" className='Nav-anchr'> 
    <button className="Project-btn">Visit Website <span>
        <img src={imgicon} alt="" srcSet={imgicon} className="Project-btn-Ing" /></span></button>
  </a></div>

  </Carousel.Item>
  <Carousel.Item>
  <div className="Project-box">
    <img src={ProjectSecond} alt="img" srcSet={ProjectSecond} className="Project-Img" />
    <h3 className="Project-Heading">Chatting Web App</h3>  
  <a href="https://aryanpamwanichatingapp.firebaseapp.com/" className='Nav-anchr'>
       <button className="Project-btn">Visit Website 
       <span><img src={imgicon} srcSet={imgicon} alt="img"  className="Project-btn-Ing" /></span></button></a>
  </div>

   
  </Carousel.Item>
 
 
</Carousel>
</div></section>
        </>
    )
}
