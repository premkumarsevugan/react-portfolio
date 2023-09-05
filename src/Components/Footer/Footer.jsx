import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linked from '@iconscout/react-unicons/icons/uil-linkedin'
import Git from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%', opacity:'0.8'}} />
        <div className="f-content">
            <span>&copy; {currentYear} Premkumar<br/><span className='small'>all rights reserved</span></span>
            
            <div className="f-icon">
                <a target = "_blank" href="https://github.com/premkumarsevugan" rel="noreferrer">
                    <Git color='white' size='3rem' />
                </a>
                <a target = "_blank" href="https://www.instagram.com/prem__kumar__s/" rel="noreferrer">
                  <Insta color='white' size='3rem' />
                </a>
                <a target = "_blank" href="https://www.linkedin.com/in/premkumar-s-578966207/" rel="noreferrer">
                  <Linked color='white' size='3rem' />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer