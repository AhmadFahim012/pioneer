import React from "react";
import home1 from "../assets/home1.png";
import AnimatedHeading from "./AnimatedHeading";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 3, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-home-bg min-h-screen w-full bg-cover bg-no-repeat">
        <div className="flex flex-col pl-16 min-h-screen items-start justify-center md:max-w-[45%] ">
          <AnimatedHeading
            text={"Elevate"}
            styles={" text-3xl md:text-6xl custom-fonts text-white font-bold uppercase "}
          />
          <AnimatedHeading
            text={"Your Style"}
            styles={"text-3xl md:text-6xl custom-fonts text-white font-bold uppercase md:pb-0 pb-5"}
          />

          <h4 className="text-3xl custom-fonts text-white font-normal uppercase md:pb-0 pb-5">
            with Exquisite Imported Garments
          </h4>
          <p className="montserat-fonts text-base text-white font-normal">
            Discover high-quality, handpicked fashion pieces from around the
            world, brought directly to New York City
          </p>
          <button className="px-3 custom-button py-2 montserat-fonts text-base rounded-md text-black font-bold mt-4">
            Shop the Collection
          </button>
        </div>
      </div>
    </motion.div>
  );
}
