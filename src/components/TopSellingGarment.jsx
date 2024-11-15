import React from "react";
import gallery1 from "../assets/gallery1.png";
import { IoStar } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
export default function TopSellingGarment() {
  const arr = [
    {
      image: gallery1,
      title: "Title",
      price: "$120",
      desc: "Lorem ipsum dolor sit amet consectetur. Rutrum elit enim accumsan ut mauris.",
    },
    {
        image: gallery1,
      title: "Title",
      price: "$120",
      desc: "Lorem ipsum dolor sit amet consectetur. Rutrum elit enim accumsan ut mauris.",
    },
    {
        image: gallery1,
      title: "Title",
      price: "$120",
      desc: "Lorem ipsum dolor sit amet consectetur. Rutrum elit enim accumsan ut mauris.",
    },
    {
        image: gallery1,
        title: "Title",
        price: "$120",
        desc: "Lorem ipsum dolor sit amet consectetur. Rutrum elit enim accumsan ut mauris.",
      },
      {
        image: gallery1,
        title: "Title",
        price: "$120",
        desc: "Lorem ipsum dolor sit amet consectetur. Rutrum elit enim accumsan ut mauris.",
      },
  ];
  return (
    <div className="bg-collection-bg  bg-cover bg-no-repeat p-10 md:p-20">
      <AnimatedHeading text={'top selling garments'} styles={'custom-fonts text-2xl font-bold text-white tracking-wider uppercase'}/>
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
          640: {
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
              <img src={item.image} alt="" className="h-80 w-80 mb-2" />
              <h4 className="custom-fonts text-xl font-bold text-white tracking-wider uppercase">{item.title}</h4>
              <div className="flex gap-2 my-2">
            <IoStar  className="text-[#F1A935]" size={25}/>
            <IoStar  className="text-[#F1A935]" size={25}/>
            <IoStar  className="text-[#F1A935]" size={25}/>
            <IoStar  className="text-[#F1A935]" size={25}/>
            <IoStar  className="text-[#Fff]" size={25}/>
            </div>
              <p className="custom-fonts font-light text-sm text-white uppercase tracking-widest">{item.desc}</p>
              <p className="custom-fonts font-bold text-xl text-white uppercase tracking-widest my-3">{item.price}</p>
              <button className=" custom-button bg-white w-full montserat-fonts font-bold text-black font-xl px-3 py-2 rounded-md">Shop New Arrivals</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>

    </div>
  );
}
