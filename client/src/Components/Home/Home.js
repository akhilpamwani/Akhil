import React from 'react'

import '../assets/css/Home.css'
import imgicon from'../assets/img/right.png'
import icon from '../assets/img/bg.png'
import '../assets/css/Systemresponsive.css'

export const Home = () => {
   
    return (
        <>
<section className="Home" id='Home'>
    <div className="Home-Control">
    <div className="Left"data-aos="fade-right">
<h1 className="Home-h1">
    Hi ! from <span className="Home-h1-color">Aryan Pamwani</span> 
</h1>
<a  className="Nav-anchr Nav-anchr-dark " href="#Contact"><button className="Home-btn ">Hire Me <span><img src={imgicon} alt="img"className='btn-img'   /></span></button>
</a>
</div>
    <div className="Right" data-aos="fade-left">
<svg viewBox="0 0 200 200" className='Right-Svg' xmlns="http://www.w3.org/2000/svg">
  <path fill="#0F62FE" d="M33.9,-59.6C40.7,-54.7,41,-39.3,41.9,-27.5C42.9,-15.8,44.7,-7.9,49.9,3C55.1,14,63.8,27.9,60.6,35.6C57.3,43.3,42,44.8,29.9,46.3C17.8,47.7,8.9,49.3,-0.8,50.7C-10.5,52.1,-21,53.3,-35.4,53.2C-49.7,53,-68,51.4,-75,42.3C-82,33.2,-77.7,16.6,-69.5,4.8C-61.3,-7.1,-49,-14.1,-40.2,-20.1C-31.4,-26.1,-26,-30.9,-19.9,-36.2C-13.8,-41.4,-6.9,-47.1,3.3,-52.9C13.5,-58.6,27,-64.4,33.9,-59.6Z" transform="translate(100 100)" />
<image xlinkHref={icon} x="35" y="-15" className='Main-img'/>
</svg>
</div>
</div>
</section>
         
        </>
    )
}
