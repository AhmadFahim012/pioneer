import React from "react";
import { MdPlayArrow } from "react-icons/md";
import questionsImage from '../assets/questions.svg'
import AnimatedHeading from "./AnimatedHeading";
import {motion} from 'framer-motion'
export default function WhyChooseUs() {
  return (
    <div className="bg-about-bg  bg-cover bg-center bg-no-repeat p-10">
      <img src={questionsImage} alt="" />
      <AnimatedHeading styles={'text-white custom-fonts tracking-widest font-bold text-2xl mt-8 uppercase'} text={'Why Choose Our Boutique?'}/>
      <div className='border-b-2 border-[#F1A935] h-1 w-36 my-3 mb-5'/>


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 3, y: 0 }}
        transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <MdPlayArrow className="text-[#F1A935]" size={25} />
        <div className="flex-col">
          <h4 className="text-white custom-fonts font-bold text-xl  uppercase tracking-widest">Unique and Curated Collections</h4>
          <p className="text-white montserat-fonts font-light text-xl">Handpicked pieces from top fashion destinations.</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <MdPlayArrow className="text-[#F1A935]" size={25} />
        <div className="flex-col">
          <h4 className="text-white custom-fonts font-bold text-xl  uppercase tracking-widest">Quality Assurance</h4>
          <p className="text-white montserat-fonts font-light text-xl">Sourced from trusted suppliers and designers.</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <MdPlayArrow className="text-[#F1A935]" size={25} />
        <div className="flex-col">
          <h4 className="text-white custom-fonts font-bold text-xl uppercase tracking-widest">Personalized Customer Service</h4>
          <p className="text-white montserat-fonts font-light text-xl">Fashion experts ready to assist you.</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <MdPlayArrow className="text-[#F1A935]" size={25} />
        <div className="flex-col">
          <h4 className="text-white custom-fonts font-bold text-xl  uppercase tracking-widest">Exclusive Access</h4>
          <p className="text-white montserat-fonts font-light text-xl">Stay ahead of trends with early access to new collections.</p>
        </div>
      </div>
     </motion.div>
    </div>

  );
}
