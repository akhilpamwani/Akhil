import React,{useState,useEffect} from 'react'
import Aos from 'aos' 
import { About } from '../About/About'
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer'
import { Home } from '../Home/Home'
import { Nav } from '../NavBar/Nav'
import { NewProject } from '../NewProject/NewProject'
import { Project } from '../Project/Project'
import '../assets/css/darkmode.css'
import { Services } from '../Services/Services'
import { Skill } from '../Skills/Skill'
import { NavResponsive } from '../NavBarResp/NavResp'
import 'aos/dist/aos.css'
export const Mainpage = () => {
    useEffect(() => {
        Aos.init({
            anchorPlacement: 'top-bottom'
        })
        
           
        },
     [])
    const [state, setstate] = useState(true)
    return (
        <>
        
        <main className={state?'lightmode': 'darkmode'}>
           <Nav button={()=>setstate(!state)}/>
           <NavResponsive button={()=>setstate(!state)}/>
           <Home/>
           <About/> 
           <Skill/>
           <Services/>
           <Project/>
           <NewProject/>
           <Contact/>
           <Footer/>
           </main>
        </>
    )
}
