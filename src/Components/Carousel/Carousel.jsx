import React from 'react'
import './Carousel.css'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
const Carousel = () => {
    const clients =[{
        img: profilePic1,
        review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam unde quia expedita placeat quisquam, impedit nam porro laborum amet nemo distinctio consequuntur quis soluta culpa sunt vitae quos error.'
    },
    {
        img: profilePic2,
        review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam unde quia expedita placeat quisquam, impedit nam porro laborum amet nemo distinctio consequuntur quis soluta culpa sunt vitae quos error.'
    },
    {
        img: profilePic3,
        review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam unde quia expedita placeat quisquam, impedit nam porro laborum amet nemo distinctio consequuntur quis soluta culpa sunt vitae quos error.'
    },
    {
        img: profilePic4,
        review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam unde quia expedita placeat quisquam, impedit nam porro laborum amet nemo distinctio consequuntur quis soluta culpa sunt vitae quos error.'
    }
    ]
  return (
    <div className="t-wraper">
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background:"var(--purple"}}> </div>
            <div className="blur t-blur2" style={{background:"skyblue"}}> </div>
        </div>

        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        >
            {clients.map((client,index)=>{
                return(
                    <SwiperSlide>
                        <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>

    </div>
  )
}

export default Carousel