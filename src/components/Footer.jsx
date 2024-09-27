import React from 'react'

//Icons
import Facebooklogo from "../assets/icons/custom-icons/fa6-brands_x-facebook.svg"
import Xlogo from "../assets/icons/custom-icons/fa6-brands_x-twitter.svg"
import Instagramlogo from "../assets/icons/custom-icons/fa6-brands_x-instagram.svg"
import Emaillogo from "../assets/icons/custom-icons/fa6-brands_x-email.svg"


const Footer = () => {
  return (
    <footer className='flex flex-col items-center w-screen bg-black gap-[5%] text-white pt-4 lg:pt-8 pb-2 md:gap-32 h-[100vh] md:h-[40vh] lg:min-h-[58vh]'>
      <div className='flex flex-col gap-3 w-[90%] md:flex-row'>
        <div id='connect' className='flex flex-col md:w-[25%]'>
          <p className='font-medium'>Connect with us</p>
          <div className='flex flex-row gap-3'>
            <p><i><span><img src={Xlogo} alt="" /></span></i></p>
            <p><i><span><img src={Facebooklogo} alt="" /></span></i></p>
            <p><i><span><img src={Instagramlogo} alt="" /></span></i></p>
            <p><i><span><img src={Emaillogo} alt="" /></span></i></p>
          </div>
        </div>
        <div className='address flex flex-col w-[40%] md:w-[25%]'>
          <p className='font-medium'>Our Address</p>
          <p className='text-[80%] lg:text-[100%] sm:w-[80%]'>No 5, Orogun, along UI Ojoo road, Ibadan, Oyo State Nigeria</p>
        </div>
        <div className='link flex flex-col md:w-[25%]'>
          <p className='font-medium'>Quick links</p>
          <ul className='text-[80%] lg:text-[100%]'>
            <li>Home</li>
            <li>Contact us</li>
            <li>About us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className='resource flex flex-col md:w-[25%]'>
          <p className='font-medium'>Resources</p>
          <ul className='text-[80%] lg:text-[100%]'>
            <li>Terms and condition</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>About us</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col w-[90%]'>
        <p className='text-center'>&copy; 2024 Shedahouse.com || All rights reserved</p>
        <div className='w-full bg-gray-500 h-[1px]'></div>
      </div>
        
    </footer>
  )
}

export default Footer