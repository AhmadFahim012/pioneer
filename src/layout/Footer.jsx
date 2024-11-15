import React from 'react'
import logo from '/logo.svg'
export default function Footer() {
  return (
    <div className="bg-footer-bg  bg-cover bg-no-repeat py-16 px-10"> 
        <div className='grid grid-cols-1 md:gap-0 gap-10  md:grid-cols-5 '>
          
            <div >
                <h3 className='text-white montserat-fonts font-bold text-lg pb-1'>Company Information</h3>
                <ul>
                    <li className='flex-col flex'>
                        <a href="/" className='text-white montserat-fonts text-base'>About Us</a>
                        <a href="/" className='text-white montserat-fonts text-base'>Careers</a>
                        <a href="/" className='text-white montserat-fonts text-base'>Press</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='text-white montserat-fonts font-bold text-lg pb-1' >Customer Service</h3>
                <ul>
                    <li className='flex-col flex'>
                        <a href="/" className='text-white montserat-fonts text-base'>Shipping & Returns</a>
                        <a href="/" className='text-white montserat-fonts text-base'>FAQs</a>
                        <a href="/" className='text-white montserat-fonts text-base'>Size Guide</a>
                    </li>
                </ul>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <h3 className='text-white montserat-fonts font-bold text-lg'>Connect with Us</h3>
                <ul>
                    <li className='flex-col flex'>
                        <a href="/" className='text-white montserat-fonts text-base'>Facebook</a>
                        <a href="/" className='text-white montserat-fonts text-base'>Instagram</a>
                        <a href="/" className='text-white montserat-fonts text-base'>Twitter</a>
                        <a href="/" className='text-white montserat-fonts text-base'>+923444440</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='text-white montserat-fonts font-bold text-lg'>Address</h3>
                <ul>
                    <li className='flex-col flex'>
                        <p href="/" className='text-white montserat-fonts text-base'>Headoffice</p>
                        <p href="/" className='text-white montserat-fonts text-base'>818 East 16th st Brooklyn NY 11230</p>
                        <p href="/" className='text-white montserat-fonts text-base'>Pakistan</p>
                        <p href="/" className='text-white montserat-fonts text-base'>Shop 2 Spinzar Plaza 
                        Jhangirabad KPK Peshawar</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
