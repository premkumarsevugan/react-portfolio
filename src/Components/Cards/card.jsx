import React from 'react'
import './card.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Card = ({emoji,heading,details}) => {
  const theme=useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card" data-aos="flip-right" data-aos-duration="1000">
        <img src={emoji} alt="" />
        <span style={{color: darkMode? 'white':''}}>{heading}</span>
        <span>{details}</span>
        <button style={{background: darkMode? 'var(--orange)':'',color: darkMode? 'white':''}}className='c-button'>Learn More</button>
    </div>
  )
}

export default Card