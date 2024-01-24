import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        className="portfolio-slider"
        breakpoints={{
          // Set breakpoints for different screen sizes
          768: {
            slidesPerView: 2,
            spaceBetween: 20, 
          },
          1024: {
            slidesPerView: 3, 
            spaceBetween: 30, 
          },
        }}
      >
        <SwiperSlide>
          <a href="https://scooboo.in/" target="_blank" rel="noreferrer"><img src={Sidebar} alt="" /></a>  
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://amazon-crown.vercel.app/" target="_blank" rel="noreferrer"><img src={Ecommerce} alt="" /></a>    
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.encased.com/" target="_blank" rel="noreferrer"><img src={MusicApp} alt="" /></a>      
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://burger-crown.vercel.app/" target="_blank" rel="noreferrer"><img src={HOC} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
