import React from "react";
import { IoStar } from "react-icons/io5";
import avatar from "../assets/avatar.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import AnimatedHeading from "./AnimatedHeading";
import { motion } from "framer-motion";
export default function OurCustomer() {
  return (
    <div className="bg-[#AE7447] py-16 px-10">
      <AnimatedHeading styles={'text-white custom-fonts tracking-widest font-bold text-2xl mt-8 uppercase'} text={'What our customer say'}/>
        <div className="w-28 h-1 bg-[#F1A935] mt-2"/>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 3, y: 0 }}
        transition={{ duration: 0.8 }}
    >
      <Swiper
        slidesPerView={3.3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-10"
        breakpoints={{
            1024: {
                slidesPerView: 3.3,  // Show 3 slides for larger screens
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
        <SwiperSlide>
          <div className="bg-white rounded-3xl p-5 mb-12">
          <div className="flex mb-4 gap-2">
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            </div>

            <p className="font-normal montserat-fonts text-black text-base">
              Lorem ipsum dolor sit amet consectetur. Eget lorem tempor eget
              tincidunt pretium eget sed vitae vel. Quis dignissim vel
              vestibulum aliquam. Egestas tortor tortor dui ultricies risus.
              Elementum sed venenatis bibendum aenean scelerisque ullamcorper
              sagittis tempor.
            </p>
            <div className="flex gap-4 items-center mt-4">
              <img src={avatar} alt="" />
              <p className="font-bold">Jennifer Lopez</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="bg-white rounded-3xl p-5 mb-12">
            <div className="flex mb-4 gap-2">
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            </div>

            <p className="font-normal montserat-fonts text-black text-base">
              Lorem ipsum dolor sit amet consectetur. Eget lorem tempor eget
              tincidunt pretium eget sed vitae vel. Quis dignissim vel
              vestibulum aliquam. Egestas tortor tortor dui ultricies risus.
              Elementum sed venenatis bibendum aenean scelerisque ullamcorper
              sagittis tempor.
            </p>
            <div className="flex gap-4 items-center mt-4">
              <img src={avatar} alt="" />
              <p className="font-bold">Jennifer Lopez</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-white rounded-3xl p-5 mb-12">
        <div className="flex mb-4 gap-2">
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            </div>

            <p className="font-normal montserat-fonts text-black text-base">
              Lorem ipsum dolor sit amet consectetur. Eget lorem tempor eget
              tincidunt pretium eget sed vitae vel. Quis dignissim vel
              vestibulum aliquam. Egestas tortor tortor dui ultricies risus.
              Elementum sed venenatis bibendum aenean scelerisque ullamcorper
              sagittis tempor.
            </p>
            <div className="flex gap-4 items-center mt-4">
              <img src={avatar} alt="" />
              <p className="font-bold">Jennifer Lopez</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-white rounded-3xl p-5 mb-12">
        <div className="flex mb-4 gap-2">
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            <IoStar  className="text-[#FFC247]"/>
            </div>

            <p className="font-normal montserat-fonts text-black text-base">
              Lorem ipsum dolor sit amet consectetur. Eget lorem tempor eget
              tincidunt pretium eget sed vitae vel. Quis dignissim vel
              vestibulum aliquam. Egestas tortor tortor dui ultricies risus.
              Elementum sed venenatis bibendum aenean scelerisque ullamcorper
              sagittis tempor.
            </p>
            <div className="flex gap-4 items-center mt-4">
              <img src={avatar} alt="" />
              <p className="font-bold">Jennifer Lopez</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </motion.div>

    </div>
  );
}
