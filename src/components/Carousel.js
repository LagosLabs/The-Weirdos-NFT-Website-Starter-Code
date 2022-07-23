import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/Nffts/2146.svg';
import img2 from '../assets/Nffts/3107.svg';
import img3 from '../assets/Nffts/4315.svg';
import img4 from '../assets/Nffts/5494.svg';
import img5 from '../assets/Nffts/6824.svg';
import img6 from '../assets/Nffts/7692.svg';
import img7 from '../assets/Nffts/9599.svg';
import img8 from '../assets/Nffts/9694.svg';
import img9 from '../assets/Nffts/10654.svg';
import img10 from '../assets/Nffts/11146.svg';

import Arrow from '../assets/Arrow.svg'

const Container = styled.div`
width: 25vw;
height: 70vh;

@media (max-width: 70em){
    height: 60vh;
}

@media (max-width: 64em){
    height: 50vh;
    width: 30vw;
}
@media (max-width: 48em){
    height: 50vh;
    width: 40vw;
}
@media (max-width: 30em){
    height: 45vh;
    width: 60vw;
}

.swiper{
    width: 100%;
    height: 100%;
}
.swiper-slide{
    background-color: ${props => props.theme.carouselColor};

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }

    @media (max-width: 64em){
        width: 3rem;
    }
    @media (max-width: 30em){
        width: 3rem;
    }
}

.swiper-button-prev{
    color: ${props => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
    @media (max-width: 64em){
        width: 3rem;
    }
    @media (max-width: 30em){
        width: 3rem;
    }
}
`

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        pagination={{
            type:'fraction',
        }}
        scrollbar={{
            draggable: true,
        }}
        modules={[EffectCards,Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}

        className="mySwiper"
      >
        <SwiperSlide>  <img src={img1} alt="Streamillonaires" />   </SwiperSlide>
        <SwiperSlide>  <img src={img2} alt="Streamillonaires" />   </SwiperSlide>
        <SwiperSlide>  <img src={img3} alt="Streamillonaires" />   </SwiperSlide>
        <SwiperSlide>  <img src={img4} alt="Streamillonaires" />   </SwiperSlide>
        <SwiperSlide>  <img src={img5} alt="Streamillonaires" />   </SwiperSlide>
        <SwiperSlide>  <img src={img6} alt="Streamillonaires" />   </SwiperSlide>
        <SwiperSlide>  <img src={img7} alt="Streamillonaires" />   </SwiperSlide>
        <SwiperSlide>  <img src={img8} alt="Streamillonaires" />   </SwiperSlide>
        <SwiperSlide>  <img src={img9} alt="Streamillonaires" />   </SwiperSlide>
        <SwiperSlide>  <img src={img10} alt="Streamillonaires" />   </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel