// src/components/BannerSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from "../assets/img1.jpg";
import slide2 from "../assets/img2.jpg";
import slide3 from "../assets/img3.jpg";


export default function BannerSlider() {
  const slides = [slide1, slide2, slide3];
  
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation 
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      className="banner-slider"
    >
      {slides.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`Slide ${idx + 1}`}
            className="slider-img"
            loading={idx === 0 ? "eager" : "lazy"}
            fetchpriority={idx === 0 ? "high" : "auto"}
          />
          <div className="slider-text">
            <h1>{`Slide ${idx + 1} Heading`}</h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
