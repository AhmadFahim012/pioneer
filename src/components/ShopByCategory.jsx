import React from 'react'
import image1 from '../assets/category1.svg'
import image2 from '../assets/category2.svg'
import image3 from '../assets/category3.svg'
import image4 from '../assets/category4.svg'
import image5 from '../assets/category5.svg'

import { motion } from "framer-motion";

export default function ShopByCategory() {
    const array = [
        {
            image:image1,
            text:'Dresses',
        },
        {
            image:image2,
            text:'Tops',
        },
        {
            image:image3,
            text:'	Outerwear',
        },
        {
            image:image4,
            text:'Accessories',
        },
        {
            image:image5,
            text:'Shoes',
        },
    ]
  return (
 
    <div className='bg-category-bg bg-center bg-cover bg-no-repeat p-12'>
        <div className='flex flex-col items-center justify-center'>
        <h3 className='custom-fonts text-center md:text-start font-bold text-2xl text-black uppercase tracking-widest'>Shop by Category</h3>
        <div className='border-b-2 border-[#F1A935] h-1 w-36 my-3 mb-5'/>
        </div>
        <div className='flex-col md:flex-row md:flex justify-evenly items-center mt-5 md:max-w-6xl m-auto'>
           {array.map((item, index) => (
           <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           key={index}
         >
           <div  className='flex md:mt-0 mt-10 flex-col justify-center items-center'>
                <img src={item.image} alt="" />
                <p className='pt-4 montserat-fonts text-black text-xl'>{item.text}</p>
            </div>
           </motion.div>
           ))}
        </div>
     
    </div>
  )
}
