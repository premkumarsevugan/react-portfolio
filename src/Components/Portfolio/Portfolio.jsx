import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import carrent from '../../img/carrent.png'
import smartbincon from '../../img/smartbincon.png'
import speechplay from '../../img/speechplay.png'
import foodapp from '../../img/foodapp.png'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className="portfolio" id='Skills'>
        <span style={{color:darkMode? "white" : ""}}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grapCursor= {true}
        className='portfolio-slider' data-aos="zoom-out" data-aos-duration="2000"
        >
            <SwiperSlide>
            <a className='swiperli' target='_blank' href="https://carrentapp.netlify.app">
                <img src={carrent} alt="" />
                <p className='swiperpara'>Car Rental App</p>
            </a>
            </SwiperSlide>
            <SwiperSlide>
                <a className='swiperli' href="https://smartbinfinalyear.000webhostapp.com">
                <img src={smartbincon} alt="" />
                <p className='swiperpara'>Smart Bin Controller</p>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a className='swiperli' href="https://premkumarsevugan.github.io/foodspot-react/">
                <img src={foodapp} alt="" />
                <p className='swiperpara'>Food Order</p>
                </a>
            </SwiperSlide>
            <SwiperSlide>
            <a className='swiperli' href="https://premkumarsevugan.github.io/speech-companion">
                <img src={speechplay} alt="" />
                <p className='swiperpara'>Speech Play</p>
            </a>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio