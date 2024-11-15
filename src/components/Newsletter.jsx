import React from 'react'
import newsletter from '../assets/newsletter.svg'
import { motion } from 'framer-motion'
import AnimatedHeading from './AnimatedHeading'
export default function Newsletter() {
  return (
    <div className="bg-about-bg  bg-cover bg-center bg-no-repeat p-10"> 
    <img src={newsletter} alt="" />
    <AnimatedHeading text={'Newsletter'} styles={'text-white custom-fonts tracking-widest font-bold text-2xl mt-8 uppercase'}/>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 3, y: 0 }}
        transition={{ duration: 0.8 }}
    >
    <div className="w-28 h-1 bg-[#F1A935] mt-2"/>
    <h4 className='text-white custom-fonts tracking-widest font-bold text-xl mt-8 uppercase'> Stay Updated on the Latest Trends</h4>
    <p className='text-white montserat-fonts font-light text-2xl mt-8'>Sign up for our newsletter to receive updates on <br /> new arrivals, exclusive offers, and fashion tips.</p>

    <div className='mt-4 flex gap-2 items-center '>
        <input type="text" placeholder='Email' className='bg-white rounded-md text-black outline-none px-3 py-2' />
        <button className='px-3 py-2 custom-button rounded-md montserat-fonts text-black font-bold text-base'>Subscribe</button>
    </div>
    </motion.div>

    </div>
  )
}
