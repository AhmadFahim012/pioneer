import React from "react";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
export default function NewArrivals() {
  const arr = [
    {
      image: gallery1,
      title: "Italian Silk Dress",
      price: "$120",
    },
    {
      image: gallery3,
      title: "Italian Silk Dress",
      price: "$120",
    },
    {
      image: gallery2,
      title: "Italian Silk Dress",
      price: "$120",
    },
    {
      image: gallery4,
      title: "Italian Silk Dress",
      price: "$120",
    },
    {
      image: gallery4,
      title: "Italian Silk Dress",
      price: "$120",
    },
  ];
  return (
    <div className="bg-about-bg  bg-cover bg-no-repeat p-10 md:p-20">
      <AnimatedHeading text={'New Arrivals'} styles={'custom-fonts text-2xl font-bold text-white tracking-wider uppercase'}/>
      <div className='border-b-2 border-[#F1A935] h-1 w-36 my-3 mb-5'/>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 3, y: 0 }}
        transition={{ duration: 0.8 }}
    >
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-10"
        breakpoints={{
            1024: {
                slidesPerView: 4,  // Show 3 slides for larger screens
                centeredSlides: false,  // Disable centering on larger screens
                spaceBetween: 30,
              },
          600: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          540: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          440: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {arr.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-80 mb-12">
              <img src={item.image} alt="" className="h-80 w-80" />
              <h4 className="custom-fonts text-white font-light uppercase tracking-widest text-base my-2">{item.title}</h4>
              <p className="custom-fonts text-white font-bold text-xl">{item.price}</p>
              <button className="bg-white custom-button w-full montserat-fonts px-4 py-2 rounded-md mt-5 font-bold">Shop New Arrivals</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </motion.div>
    </div>
  );
}
