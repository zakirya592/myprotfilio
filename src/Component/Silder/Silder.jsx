import React, {useRef,useContext} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";
// Import Swiper styles
import "swiper/css/effect-cube";
// import required modules
import { EffectCube, Pagination, Zoom, } from "swiper";
import './Silder.css';
import Project1 from '../../Images/Project11.png';
import Project2 from '../../Images/Project2.png';
import Project3 from '../../Images/project3.png';
// Deak mode
import { themeContext } from "../../Context";
function Silder() {

  // Dark Mode
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
     <div className="portfolio container" id="portfolio">
      {/* heading */}
      <div className='heading'>
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>
      </div>
  
    <Swiper
        spaceBetween={30}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><h5>Bootstrap desgin</h5><img src={Project1} alt="project" /></SwiperSlide>
        <SwiperSlide><h5>Email template desgin</h5><img src={Project2} alt="project" /></SwiperSlide>
        <SwiperSlide><h5>Email template desgin</h5><img src={Project3} alt="project" /></SwiperSlide>
        <SwiperSlide><img src={Project2} alt="project" /></SwiperSlide>
        <SwiperSlide><img src={Project1} alt="project" /></SwiperSlide>
        <SwiperSlide><img src={Project3} alt="project" /></SwiperSlide>
      </Swiper>
      </div>
    </>
  )
}

export default Silder;