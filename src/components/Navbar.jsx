import React, {useState} from 'react'
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  const [nav_open, SetNav_open] = useState(false);
  const [twist, setTwist] = useState(false)
  
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
        <div className='flex w-[95%] lg:w-[95%] justify-between items-center '>
          <div className='items-center flex'>
            <img src={logo} alt="logo" />
            <a className='navbar-logo-tag flex'><img className='navbar-logo' src="" alt="" />ACADEMY</a>
          </div> 
          <div className='hidden lg:flex lg:justify-between items-center'>
            <ul className='lg:flex lg:gap-10'>
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
          <div className='hidden lg:flex'>
            <ul className='lg:flex lg:gap-10 lg:justify-between items-center'>
              <li className='border-2 border-shedared h-14 text-center'>Signup</li>
              <li className='bg-shedared text-white text-center h-14 w-20'>Login</li>
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
          <div id='mobilenavtags' className='hidden lg:hidden absolute h-[93vh] w-screen top-14 z-10' style={nav_style}>
            <ul className={nav_open ? "flex flex-col gap-6 items-center justify-center text-center pt-6" : "hidden"}>
              <li className='font-semibold'>Home</li>
              <li className='font-semibold'>About</li>
              <li className='border-4 rounded-xl border-shedared bg-white text-shedared font-semibold h-14 w-[90%] text-center flex items-center justify-center'>Signup</li>
              <li className='border-4 rounded-xl border-shedared bg-white text-shedared font-semibold h-14 w-[90%] text-center flex items-center justify-center'>Login</li>
            </ul>
          </div>
        </div>
          
    </nav>
  )
}

export default Navbar