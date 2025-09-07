// src/components/BannerSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    src: "/assets/img1.jpg",
    title: "Welcome to Our Website",
    subtitle: "Discover amazing products",
    buttonText: "Shop Now",
    buttonLink: "#",
  },
  {
    src: "/assets/img2.jpg",
    title: "New Collection",
    subtitle: "Check out our latest arrivals",
    buttonText: "Explore",
    buttonLink: "#",
  },
  {
    src: "/assets/img3.jpg",
    title: "Special Offer",
    subtitle: "Limited time discounts",
    buttonText: "Grab Now",
    buttonLink: "#",
  },
];

const BannerSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="relative"
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-[80vh]">
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
              fetchpriority={idx === 0 ? "high" : "auto"}
            />

            {/* Text Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-6 drop-shadow-lg">
                {slide.subtitle}
              </p>
              <a
                href={slide.buttonLink}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
