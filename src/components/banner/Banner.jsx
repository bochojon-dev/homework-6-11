import React from "react";
import "../banner/Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/carousel1.jpg";
import img2 from "../../assets/carousel2.jpeg";
import img3 from "../../assets/carousel3.jpg";

import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="banner__swiper"
      >
        <SwiperSlide className="banner__item">
          <img src={img1} alt="nature" />
        </SwiperSlide>
        <SwiperSlide className="banner__item">
          <img src={img2} alt="nature" />
          <div className="banner__content">
            <h2></h2>
            <p></p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner__item">
          <img src={img3} alt="nature" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
