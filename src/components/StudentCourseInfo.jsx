import React from 'react'

import { FaEye, FaPen } from 'react-icons/fa'

const StudentCourseInfo = () => {
  return (
    <div className='flex gap-2 md:gap-4 lg:gap-6 xl:gap-8 border-[1px] rounded-lg p-1 mb-4'>
        <div className='w-[20%] bg-shedared'>

        </div>
        <div className='flex flex-col lg:flex-row px-3 py-2 w-full'>
            <div className='flex flex-col gap-3 justify-between w-full'>
                <p className='text-lg font-semibold'>Frontend Development</p>
                <div className='flex items-center gap-3'>
                    <p className='text-shedagray'>Price:</p>
                    <p className='font-semibold text-lg'>230K</p>
                    <div className='flex gap-1 items-center bg-shedalightblue rounded-xl px-1'>
                        <div className='w-2 h-2 rounded-full bg-shedadeepblue'></div>
                        <p className='text-shedagray text-sm'>Installment Payment</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p className='text-shedagray'>Duration:</p>
                    <p className='font-semibold'>6 Months</p>
                </div>
                <div className='flex gap-2'>
                    <p className='text-shedagray'>Instructors:</p>
                    <p className='font-semibold'>Chibuke, Chibuke</p>
                </div>
                <div className='flex gap-3'>
                    <p className='text-shedagray'>Status:</p>
                    <p className='font-semibold'>Student</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 justify-between items-end lg:w-[20%] h-full'>
                <div className='flex flex-col gap-2 items-end'>
                    <p className='flex gap-2 items-center text-shedagray'><FaEye /> View Description</p>
                    <div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedalightred to-shedalightred2 text-shedanewred rounded-md text-center font-medium'>Unpaid</div>
                </div>
                <button className='text-white bg-shedared px-2 py-2 rounded-lg opacity-10' disabled={true}>Download Certificate</button>
            </div>
            
        </div>
    </div>
  )
}

export default StudentCourseInfo