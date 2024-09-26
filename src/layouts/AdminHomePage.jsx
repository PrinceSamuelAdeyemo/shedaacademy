import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'

//import {  } from "react-icons/fa"

const AdminHomePage = () => {
  return (
    <div className='flex justify-end gap-2'>
      <div className='fixed left-0 lg:w-[15%]'>
        <Sidebar />
      </div>
        
      <div className='w-full lg:w-[85%]'>
        <Outlet />
      </div>
        
    </div>
    
  )
}

export default AdminHomePage