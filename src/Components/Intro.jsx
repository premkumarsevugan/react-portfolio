import React from 'react'
import './Intro.css'
import Github from '../img/github.png'
import Linkedin from '../img/linkedin.png'
import Instagram from '../img/instagram.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import boy from '../img/prem.png'
import FloatingDiv from './FloatingDiv/FloatingDiv'
import thumbup from '../img/thumbup.png'
import Crown from '../img/crown.png'
import glassesimoji from '../img/glassesimoji.png'
import { themeContext } from '../Context'
import { useContext } from 'react'

import { motion } from 'framer-motion'
import Resume from '../file/resume.pdf'
// import { useState } from 'react'
const Intro = ()=> {
    // const [isInView, setIsInView] = useState(false);
    const transitoin = {duration : 2, type:'spring'}
    const theme=useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
      <div className="intro" id='Home'>
        <div className="i-left" data-aos="fade-right" data-aos-duration="2000">
            <div className="i-name">
                <span style={{color: darkMode? 'white' : ''}}>Hy! This is</span>
                <span>Prem Kumar</span>
                <span>An aspiring individual who is intricately involved and dedicated to whatever he does. Inspired and amazed by the
tech world, I possess the skill to handle complicated projects efficiently, and building myself in all dimensions
remains to be my eternal goal.
</span>
            </div>
            <a href={Resume} download>
            <button className='i-button button'>Resume</button>
            </a>
            <div className="i-icons">
                <a target = "_blank" href="https://github.com/premkumarsevugan" rel="noreferrer">
                    <img src={Github} alt="" />
                </a>
                <a target = "_blank" href="https://www.linkedin.com/in/premkumar-s-578966207/" rel="noreferrer">
                    <img src={Linkedin} alt="" />
                </a>
                <a target = "_blank" href="https://www.instagram.com/prem__kumar__s/" rel="noreferrer">
                <img src={Instagram} alt="" />
                </a>
                
                
                
            </div>
        </div>
        <div className="i-right" data-aos="fade-left" data-aos-duration="1000">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />

            <motion.img 
            initial={{left:'-36%'}}
            animate={{left:'-24%'}}
            transition={transitoin}
            src={glassesimoji} alt="" />

            <motion.div style={{top : '-4%', left :'58%'}}
            initial = {{top:'-4%',left:'74%'}}
            // whileInView={{left : '58%'}}
            animate={{left:'58%'}}
            transition={transitoin}
            // initial={{ opacity: 1 }}
            // whileInView={{ opacity: 0 }}
            className="Floating-div"
            >
                <FloatingDiv image = {Crown} txt1='Web' txt2='Developer' />
            </motion.div>
            <motion.div style={{top : '18rem', left :'0rem'}}
            initial = {{left : '-10rem'}}
            animate ={{left:'0rem'}}
            transition={transitoin}
            className="Floating-div"
            >
                <FloatingDiv image = {thumbup} txt1='Best' txt2='Programmer' />
            </motion.div>


            {/* blur divs */}
            <div className="blur" style={{background:"rgb(238 210 255"}}></div>
            <div className="blur" style={{background:"#C1F5FF",top:'17rem',width : '21rem',height : '11rem',left:'-9rem'}}></div>

        </div>
      </div>
  )
}

export default Intro
