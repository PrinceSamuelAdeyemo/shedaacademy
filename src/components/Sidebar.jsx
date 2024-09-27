import React from 'react'
import { FaBell, FaHome } from 'react-icons/fa'
//import {  } from 'react-icons/ai'

// Icons
import logo from "../assets/images/logo.svg"
import home_icon from "../assets/icons/custom-icons/home_icon.png"

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-shedapagebg gap-4 h-[100vh]'>
        <div className='flex items-center px-2 h-[5rem]'>
            <img src={logo} alt="logo" />
            <a className='navbar-logo-tag flex text-shedared font-semibold' href='/'><img className='navbar-logo' src="" alt="" />ACADEMY</a>
          </div> 
        <div className='flex justify-center'>
            <ul className='flex flex-col justify-between gap-2 w-[90%] h-[87vh]'>
              <div className='flex flex-col gap-3'>
              <li className='flex rounded-md font-normal text-gray-500 text-[1.1rem] h-12 px-2 hover:bg-shedared hover:text-white active:bg-shedared active:text-white'><a href='/home/notifications' className='flex gap-2 items-center w-full'><FaBell /> Notifications</a></li>
              <li className='flex rounded-md font-normal text-gray-500 text-[1.1rem] h-12 px-2 hover:bg-shedared hover:text-white active:bg-shedared active:text-white'><a href='/home' className='flex gap-2 items-center w-full'><FaHome /> Home</a></li>
                <li className='flex rounded-md font-normal text-gray-500 text-[1.1rem] h-12 px-2 hover:bg-shedared hover:text-white active:bg-shedared active:text-white'><a href='/home/students' className='flex gap-2 items-center w-full'><FaBell /> Students</a></li>
                <li className='flex rounded-md font-normal text-gray-500 text-[1.1rem] h-12 px-2 hover:bg-shedared hover:text-white active:bg-shedared active:text-white'><a href='/home/programs' className='flex gap-2 items-center w-full'><FaHome /> Programs</a></li>
                <li className='flex rounded-md font-normal text-gray-500 text-[1.1rem] h-12 px-2 hover:bg-shedared hover:text-white active:bg-shedared active:text-white'><a href='/home/applicants' className='flex gap-2 items-center w-full'><FaBell /> Applicants</a></li>
                <li className='flex rounded-md font-normal text-gray-500 text-[1.1rem] h-12 px-2 hover:bg-shedared hover:text-white active:bg-shedared active:text-white'><a href='/home/instructors' className='flex gap-2 items-center w-full'><FaBell /> Instructors</a></li>
              </div>
              <div className='flex flex-col gap-3'>
              <li className='flex rounded-md font-normal text-gray-500 text-[1.1rem] h-12 px-2 hover:bg-shedared hover:text-white active:bg-shedared active:text-white'><a href='/home/settings' className='flex gap-2 items-center w-full'><FaHome /> Settings</a></li>
              <li className='flex gap-2 items-center rounded-md font-normal text-gray-500 text-[1.1rem] h-10 px-2 hover:bg-shedared hover:text-white'><FaBell /> Sign out</li>
              </div>

            </ul>
        </div>
    </div>
  )
}

export default Sidebar