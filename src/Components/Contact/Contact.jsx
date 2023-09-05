import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Contact = () => {
  const theme=useContext(themeContext);
    const darkMode = theme.state.darkMode;

  const form=useRef();

  const [done,setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6uyo169', 'template_30k5mb9', form.current, 'dEX99jO_O5K0WaRgB')
      .then((result) => {
        setDone(true);
          // console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left" data-aos="fade-down-right" data-aos-duration="1000">
            <div className="awesome">
            <span style={{color:darkMode? "white" : ""}}>Get in touch</span>
            <span>Contact me</span>
            <div 
            className="blur s-blur1"
            style={{background: "#ABF1FF94"}}
            >
            </div>
            </div>
        </div>
        <div className="c-right" data-aos="fade-up-left" data-aos-duration="1000">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="email" name="user_email" className='user' placeholder='Email'/>
                <textarea name="message"  className="user" placeholder='Message'></textarea>
                <input type="submit" value="Send" className='button'/>
                <span>{done && "Thanks for Contacting Me"}</span>
                <div className="blur c-blur1" style={{background: "var(--purple)"}}></div>
            </form>
        </div>
        
    </div>
  )
}

export default Contact