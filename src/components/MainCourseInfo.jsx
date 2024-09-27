import React from 'react'

import { FaEye, FaPen } from 'react-icons/fa'

const MainCourseInfo = () => {
  return (
    <div className='flex gap-2 md:gap-4 lg:gap-6 xl:gap-8 border-[1px] p-1'>
        <div className='w-[20%] bg-shedared'>

        </div>
        <div className='flex flex-col gap-2 px-3 w-full'>
            <div className='flex justify-between w-full'>
                <p className='text-lg font-semibold'>Frontend Development</p>
                <div className='flex gap-3 justify-between'>
                    <p className='flex gap-2 items-center text-shedagray'><FaEye /> View Assessment</p>
                    <p className='flex gap-2 items-center justify-center text-shedagray rounded bg-shedapagebg px-2'><FaPen /> Edit Program</p>
                </div>
            </div>
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
                <p className='text-shedagray'>Stats:</p>
                <div className='flex gap-4'>
                    <div className='flex gap-2'>
                        <p className='text-gray-400'>Applicants:</p>
                        <p>1000</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-gray-400'>Students:</p>
                        <p>600</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-gray-400'>Graduates</p>
                        <p>10</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainCourseInfo