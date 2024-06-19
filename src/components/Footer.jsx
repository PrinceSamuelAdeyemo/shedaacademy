import React from 'react'

//Icons
import Facebooklogo from "../assets/icons/custom-icons/fa6-brands_x-facebook.svg"
import Xlogo from "../assets/icons/custom-icons/fa6-brands_x-twitter.svg"
import Instagramlogo from "../assets/icons/custom-icons/fa6-brands_x-instagram.svg"
import Emaillogo from "../assets/icons/custom-icons/fa6-brands_x-email.svg"


const Footer = () => {
  return (
    <footer className='flex flex-col items-center w-screen bg-black gap-20 text-white pt-8 pb-2'>
      <div className='flex flex-col gap-3 w-[90%]'>
        <div id='connect'>
          <p className='font-medium'>Connect with us</p>
          <div className='flex flex-row gap-3'>
            <p><i><span><img src={Xlogo} alt="" /></span></i></p>
            <p><i><span><img src={Facebooklogo} alt="" /></span></i></p>
            <p><i><span><img src={Instagramlogo} alt="" /></span></i></p>
            <p><i><span><img src={Emaillogo} alt="" /></span></i></p>
          </div>
        </div>
        <div className='address'>
          <p className='font-medium'>Our Address</p>
          <p>No 5, Orogun, along UI Ojoo road, Ibadan, Oyo State Nigeria</p>
        </div>
        <div className='link'>
          <p className='font-medium'>Quick links</p>
          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>About us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className='resource'>
          <p className='font-medium'>Resources</p>
          <ul>
            <li>Terms and condition</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>About us</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col w-[90%]'>
        <p className=''>&copy; 2024 Shedahouse.com || All rights reserved</p>
        <div className='w-full bg-gray-500 h-[1px]'></div>
        <p className='text-center'>A product of FireSwitch Technologies Ltd</p>
      </div>
        
    </footer>
  )
}

export default Footer