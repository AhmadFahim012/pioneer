import React, { useRef } from "react";
import collection1 from "../assets/collection1.png";
import collection2 from "../assets/collection2.png";
import collection3 from "../assets/collection3.png";
import collection4 from "../assets/collection4.png";
import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

export default function OurCollection() {
  return (
    <div className="md:bg-collection-bg bg-cover bg-no-repeat py-20 px-10">
      <div className="flex justify-center items-center flex-col mt-11">
        <h2 className="text-black md:text-white text-center md:text-start custom-fonts text-2xl font-bold tracking-widest uppercase">
          Collection section
        </h2>
        <div className="border-b-2 border-[#F1A935] h-1 w-36 my-3 mb-5" />
        <h2 className="text-black md:text-white custom-fonts text-3xl text-center md:text-start font-bold uppercase ">
          Explore our collection
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 3, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative flex flex-col md:flex-row mt-10">
          <div className="relative md:w-[60%] md:ml-auto">
            <img src={collection1} alt="Collection" className="w-full" />
          </div>

          <div className="md:absolute top-0 left-0 md:w-[40%] h-full z-20 bg-[#BF8860] p-10">
            <AnimatedHeading text={"European"} styles={'text-3xl md:text-[96px] font-bold text-white uppercase custom-fonts whitespace-nowrap'}/>
            <AnimatedHeading text={"Elegance"} isWebkitText={true} styles={'text-3xl md:text-[96px] font-bold text-white uppercase custom-fonts whitespace-nowrap'}/>
            <h4 className="text-2xl montserat-fonts text-white uppercase">
              Featuring classic styles from Italy, France, and the UK.
            </h4>

            <button className=" custom-button mt-10 font-bold text-black px-5 py-3 bg-yellow-400 rounded-md hover:bg-yellow-500">
              Shop the collection
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div>
        <div className="relative flex flex-col md:flex-row-reverse mt-10">
          <div className="  w-full md:w-[40%] z-20 bg-[#BF8860] p-10">
            <div className="md:absolute text-end top-10 right-10 flex">
              <AnimatedHeading text={"Asian "} styles={'text-3xl md:text-[96px] font-bold text-white uppercase custom-fonts whitespace-nowrap'}/>
              <AnimatedHeading text={"Chic"} isWebkitText={true} styles={'text-3xl md:text-[96px] font-bold text-white uppercase custom-fonts whitespace-nowrap'}/>
            </div>
            <div className="flex flex-col h-full justify-center items-end mt-5 mb-auto">
              <h4 className="text-2xl text-white uppercase mt-4 text-end">
                Featuring classic styles from Italy, France, and the UK.
              </h4>
              <button className=" custom-button mt-10 font-bold text-black px-5 py-3 bg-yellow-400 rounded-md hover:bg-yellow-500">
                Shop the collection
              </button>
            </div>
          </div>

          <div className="relative w-full md:w-[60%] md:mr-auto">
            <img
              src={collection2}
              alt="Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <motion.div>
        <div className="relative flex-col  md:flex mt-10">
          <div className="relative md:w-[60%] md:ml-auto">
            <img src={collection3} alt="Collection" className="w-full" />
          </div>

          <div className="md:absolute top-0 left-0 md:w-[40%] h-full z-20 bg-[#BF8860] p-10">
            <AnimatedHeading text={"Latin American"} styles={'text-3xl md:text-[96px] font-bold text-white uppercase custom-fonts whitespace-nowrap'}/>
            <AnimatedHeading text={"Flair"} isWebkitText={true} styles={'text-3xl md:text-[96px] font-bold text-white uppercase custom-fonts whitespace-nowrap'}/>
            <h4 className="text-2xl text-white uppercase mt-4">
              Vibrant and unique designs from Mexico, Brazil, and Argentina.
            </h4>
            <button className=" custom-button mt-10 font-bold text-black px-5 py-3 bg-yellow-400 rounded-md hover:bg-yellow-500">
              Shop the collection
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div>
        <div className="relative flex flex-col md:flex-row-reverse mt-10">
          <div className="  w-full md:w-[40%] z-20 bg-[#BF8860] p-10">
            <div className="md:absolute text-end  right-10">
              <AnimatedHeading text={"African"} styles={'text-3xl md:text-[96px] font-bold text-white uppercase custom-fonts whitespace-nowrap'}/>
              <AnimatedHeading text={"Artistry"} isWebkitText={true} styles={'text-3xl md:text-[96px] font-bold text-white uppercase custom-fonts whitespace-nowrap'}/>
            </div>
            <div className="flex flex-col h-full justify-end items-end mt-auto mb-auto">
              <h4 className="text-2xl text-white uppercase mt-4 text-end">
                Modern and traditional wear from Japan, Korea, and India.
              </h4>
              <button className=" custom-button mt-10 font-bold text-black px-5 py-3 bg-yellow-400 rounded-md hover:bg-yellow-500">
                Shop the collection
              </button>
            </div>
          </div>

          <div className="relative w-full md:w-[60%] md:mr-auto">
            <img
              src={collection4}
              alt="Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
