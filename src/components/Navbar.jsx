import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-row align-middle justify-center w-screen h-14'>
        <div className='flex flex-row items-center justify-between w-[90%]'>
        <a className='navbar-logo-tag'><img className='navbar-logo' src="" alt="" />ACADEMY</a>
        
        <div className='navbar-menu'>
            <div className='navbar-menu-line rounded-xl h-1 w-7 bg-gray-600 mb-1 mt-1'></div>
            <div className='navbar-menu-line rounded-xl h-1 w-7 bg-gray-600 mb-1'></div>
            <div className='navbar-menu-line rounded-xl h-1 w-7 bg-gray-600 mb-1'></div>
        </div>
        </div>
          
    </nav>
  )
}

export default Navbar