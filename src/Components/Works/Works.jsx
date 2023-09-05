import React from 'react'
import './Works.css'
import laravel from '../../img/laravel.png'
import vue from '../../img/vue.png'
import js from '../../img/js.png'
import react from '../../img/react.png'
import tailwind from '../../img/tailwind.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Works = () => {
    const theme=useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="works" id='Works'>
        <div className="awesome" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <span style={{color:darkMode? "white" : ""}}>Skills</span>
            <span>Technical</span>
            <span>
            All of the aforementioned languages and frameworks are ones that I am willing to use <br/>and am generally familiar with. I created some projects in those languages and also <br/> completed some certifications.
            </span>
            <button className="button s-button">Hire me</button>
            <div className="blur s-blur1" style={{background: "#C1F5FF"}}></div>
        </div>

        <div className="w-right" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={laravel} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={vue} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={js} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={tailwind} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={react} alt="" />
                </div>
            </div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works