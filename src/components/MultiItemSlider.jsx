// src/components/MultiItemSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./MultiItemSlider.css";


const slides = [
  { img: "/assets/img1.jpg", title: "Slide 1", subtitle: "Subtitle 1" },
  { img: "/assets/img2.jpg", title: "Slide 2", subtitle: "Subtitle 2" },
  { img: "/assets/img3.jpg", title: "Slide 3", subtitle: "Subtitle 3" },
  { img: "/assets/img1.jpg", title: "Slide 3", subtitle: "Subtitle 3" },
  { img: "/assets/img2.jpg", title: "Slide 3", subtitle: "Subtitle 3" },
  { img: "/assets/img3.jpg", title: "Slide 3", subtitle: "Subtitle 3" },
];

const MultiItemSlider = () => {
  return (
    <div className="py-10 px-4 bg-gray-50">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
         nextEl: ".custom-next",
         prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}        
        loop={true}
        spaceBetween={20}
      //   slidesPerView={3}
      //   slidesPerGroup={3}
        breakpoints={{
          630: { slidesPerView: 2, slidesPerGroup: 2 },
          991: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                  {slide.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
         <div className="custom-prev absolute left-2 top-1/2 z-10 cursor-pointer">
            <FaArrowLeft className="text-white text-2xl"/>
         </div>
         <div className="custom-next absolute right-2 top-1/2 z-10 cursor-pointer">
            <FaArrowRight className="text-white text-2xl"/>
         </div>
      </Swiper>
    </div>
  );
};

export default MultiItemSlider;
