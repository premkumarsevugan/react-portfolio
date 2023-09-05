import React from 'react'
import './Services.css'
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Cards/card'
import Resume from '../../file/resume.pdf';
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Services = () => {
    const theme=useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        <div className="awesome" data-aos="zoom-in-left" data-aos-duration="1000" style={{width:"800px"}}>
            <span style={{color: darkMode? 'white' :''}}>My Awesome</span>
            <span>Services</span>
            <span>
               “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler
            </span>
            <a href={Resume} download>
            <button className="button s-button">Resume</button>
            </a>
        </div>
        <div className="cards">
            <div style={{left:'16rem'}}>
                <Card
                emoji = {Heartemoji}
                heading = {'Front-End'}
                details  = {'I can develop the front end for any kind of projects'}
                />
            </div>
            <div style={{top:'12rem',left:'-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Programming'}
                details  = {'I can help to solve coding problems in various platforms'}
                />
            </div>
            <div style={{top:'19rem',left:'14rem'}}>
                <Card
                emoji = {Humble}
                heading = {'API Integration'}
                details  = {'I can help you to solve the problems in your API integration'}
                />
            </div>
        </div>
        <div className="blur s-blur2" style={{background: "var(--purple"}}></div>
        <div className="blur s-blur1" style={{background: "#C1F5FF"}}></div>
    </div>
  )
}

export default Services;