import React, { useRef } from "react";
import about1 from '../assets/about-1.png'
import about2 from '../assets/about-2.png'
import { useInView, motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
export default function About() {

  const containerRef = useRef(null);
  const isInView = useInView(containerRef); 

  return (
   
    <div ref={containerRef} className="bg-about-bg  bg-cover bg-no-repeat bg-center p-10">
          <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 3, y: 0 }}
        transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 p-4 gap-20">
        <div className="m-auto ">
          <AnimatedHeading text={'About Us'} styles={'custom-fonts text-2xl leading-5 text-white'}/>
    <div className="w-28 h-1 bg-[#F1A935] mt-2"/>

          <h5 className="custom-fonts text-3xl text-white pt-4">A Global Fashion Experience in the Heart of NYC</h5>
          <p className="montserat-fonts text-base font-normal text-white pt-5 pb-4">
            We are a premier retailer of imported garments, offering a curated
            selection of the finest fashion from international designers. Our
            collection showcases the latest trends, traditional crafts, and
            high-quality fabrics that speak to the style-conscious shopper.
            Based in New York City, we bring the world’s fashion capitals to
            your doorstep.
          </p>
          <button className="px-4 custom-button py-3 monstserat-fonts text-black font-bold rounded-md">Learn more</button>
        </div>
        <div className="relative ">
       
        <motion.img
        src={about1}
        alt=""
        className="w-[90%] relative left-0"
        initial={{ x: -100, opacity: 0 }} // Starts from off-screen to the left
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Slides in when in view
        transition={{ duration: 1, ease: 'easeOut' }}
      />
     <motion.img
        src={about2}
        alt=""
        className="w-[30%] absolute bottom-0 -left-10 z-10"
        initial={{ x: 100, opacity: 0 }} // Starts from off-screen to the right
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Slides in when in view
        transition={{ duration:1, ease: 'easeOut' }}
      />
</div>
      </div>
      </motion.div>
    </div>
  );
}
