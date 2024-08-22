import React, {useState} from 'react'
import logo from "../assets/images/logo.svg"
import { useNavigate } from "react-router-dom"



import lv1 from "../assets/images/Vector 18.svg"
import lv2 from "../assets/images/Group 6.svg"
import lv3 from "../assets/images/Group 7.svg"
import lv4 from "../assets/images/Vector 17.svg"
import lv5 from "../assets/images/Vector 19.svg"



const Navbar = () => {

  const [nav_open, SetNav_open] = useState(false);
  const [twist, setTwist] = useState(false)
  
  const navigate = useNavigate();

  const goToHome = () => {
      navigate('/');
  };
  const nav_function = () =>{
    //(nav_open === false) ? SetNav_open(!nav_open) : SetNav_open(false);
    SetNav_open(!nav_open)
    setTwist(!twist)
  }

  const nav_menu = {
    
  }
  const nav_style = {
    display: nav_open ? "flex" : "none",
    flexDirection: "column",
    backgroundColor: "#B30608",
  }

  return (
    <nav className='flex flex-row align-middle w-screen justify-center h-14 bg-shedapagebg relative sm:h-20'>
        <div className='flex w-[95%] lg:w-[90%] justify-between items-center '>
          <div className='items-center flex' onClick={goToHome}>
            <img src={logo} alt="logo" />
            <a className='navbar-logo-tag flex text-shedared font-semibold'><img className='navbar-logo' src="" alt="" />ACADEMY</a>
          </div> 
          <div className='hidden lg:flex lg:justify-between items-center'>
            <ul className='lg:flex lg:gap-10'>
              <li><a href="/">Home</a></li>
              <li><a href="/aboutus">About US</a></li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className='hidden lg:flex'>
            <ul className='lg:flex lg:justify-between lg:gap-10 items-center'>
            <li className="border-2 rounded-xl border-shedared bg-white text-shedared font-semibold h-14 min-w-[5rem] flex items-center justify-center">Signup</li>
            <li className='border-2 rounded-xl border-shedared bg-shedared text-white font-semibold h-14 min-w-[10rem] flex items-center justify-center'><a href="/assessmentform">Take Assessment</a></li>
            </ul>
          </div>
          <div className='lg:hidden z-20' onClick={nav_function}>
            <div className={twist ? "bar1": "bar"}></div>
            <div className={twist ? "hidden" : "bar"}></div>
            <div className={twist ? "bar2": "bar"}></div>
              {/* <div className='{} rounded-xl h-1 w-7 bg-gray-600 mb-1 mt-1'></div>
              <div className='bar rounded-xl h-1 w-7 bg-gray-600 mb-1'></div>
              <div className='bar rounded-xl h-1 w-7 bg-gray-600 mb-1'></div> */}
          </div>
          {/* <div id='mobilenavtags' className='hidden lg:hidden absolute left-0 md:top-20 h-[93vh] w-screen top-14 z-20' style={nav_style}>
            <ul className={nav_open ? "flex flex-col gap-6 items-center justify-center text-center pt-6 lg:hidden" : "hidden"}>
              <li className='font-semibold text-white'><a href="/">Home</a></li>
              <li className='font-semibold text-white'><a href="/aboutus">About US</a></li>
              <li className='font-semibold text-white'>Testimonials</li>
              <li className='font-semibold text-white'>FAQ</li>
              <li className='border-4 rounded-xl border-shedared bg-white text-shedared font-semibold h-14 w-[90%] text-center flex items-center justify-center self-center justify-self-center'>Signup</li>
              <li className='border-4 rounded-xl border-shedared bg-white text-shedared font-semibold h-14 w-[90%] text-center flex items-center justify-center'><a href="/assessmentform">Take Assessment</a></li>
            </ul>
          </div> */}
          <div id='mobilenavtags' className={twist ? 'flex flex-col bg-shedared lg:hidden absolute left-0 md:top-20 h-[93vh] w-screen top-14 z-20' : "hidden"}>
            <ul className={nav_open ? "flex flex-col gap-6 items-center justify-center text-center pt-6 lg:hidden" : "hidden"}>
              <li className='font-semibold text-white'><a href="/">Home</a></li>
              <li className='font-semibold text-white'><a href="/aboutus">About US</a></li>
              <li className='font-semibold text-white'>Testimonials</li>
              <li className='font-semibold text-white'>FAQ</li>
              <li className='border-4 rounded-xl border-shedared bg-white text-shedared font-semibold h-14 w-[90%] text-center flex items-center justify-center self-center justify-self-center'><a href="">Signup</a></li>
              <li className='border-4 rounded-xl border-shedared bg-white text-shedared font-semibold h-14 w-[90%] text-center flex items-center justify-center'><a href="/assessmentform">Take Assessment</a></li>
            </ul>
          </div>

        </div>
          
    </nav>
  )
}

export default Navbar