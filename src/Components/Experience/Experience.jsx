import React from 'react'
import './Experience.css'
// import { themeContext } from '../../Context'
// import { useContext } from 'react'
const Experience = () => {
    // const theme=useContext(themeContext);
    // const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='Experience'>
        <div className="achievement" data-aos="zoom-out-up" data-aos-duration="1000">
            <div className="circle">
                3+
            </div>
            <span>Months</span>
            <span>Internship</span>
        </div>
        <div className="achievement" data-aos="flip-down" data-aos-duration="1000">
            <div className="circle">
                6+
            </div>
            <span>completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement" data-aos="zoom-out-down" data-aos-duration="1000">
            <div className="circle">
                1
            </div>
            <span>On Going</span>
            <span>Projects</span>
        </div>
    </div>
  )
}

export default Experience