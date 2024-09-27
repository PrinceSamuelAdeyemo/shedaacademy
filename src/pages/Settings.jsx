import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import AcademySummary from '../components/AcademySummary'

const Settings = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col gap-1 w-[97%]'>

        <div className='flex items-center justify-between h-[5rem] shadow-black w-full'>
          <div className='flex gap-4'>
            <FaAngleLeft />
            <FaAngleRight />
          </div>
          <div className='w-[15%]'>
            <img src="" alt="" />
            <div>
              <p className='font-semibold text-lg'>Mr Tim</p>
              <p className='text-sm'>mrtim@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='w-full bg-gray-100 h-[1px]'></div>

        <div className='flex'>
            <div className='flex flex-col gap-10 w-full lg:w-1/2'>
                
                <div className='flex flex-col gap-6 w-[90%]'>
                    <p className='font-normal text-shedagray text-lg'>Security</p>
                    <div className='flex flex-col gap-3 flex-grow'>
                        <p className='font-semibold'>Old Password</p>
                        <input type="text" className='h-14 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px]' />
                    </div>
                    <div className='flex flex-col gap-3 flex-grow'>
                        <p className='font-semibold'>Enter New Password</p>
                        <input type="text" className='h-14 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px]' />
                    </div>
                    <div className='flex flex-col gap-3 flex-grow'>
                        <p className='font-semibold'>Confirm New Password</p>
                        <input type="text" className='h-14 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px]' />
                    </div>
                    <button className='text-white bg-shedared h-12 rounded-lg'>Update Password</button>
                </div>
                <div className='flex flex-col gap-6 w-[90%]'>
                    <p className='font-normal text-shedagray text-lg'>Create New Manager</p>
                    <div className='flex flex-col gap-3 flex-grow'>
                        <p className='font-semibold'>Email Address</p>
                        <input type="text" className='h-14 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px]' />
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name="manager-type" id="" className='h-5 w-5' />
                            <p>Admin</p>
                        </div>
                        
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name="manager-type" id="" className='h-5 w-5' />
                            <p>Instructor</p>
                        </div>
                    </div>
                    
                    <button className='text-white bg-shedared h-12 rounded-lg'>Send Access</button>
                </div>
            </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Settings