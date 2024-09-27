import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import new_applicant_icon from '../assets/icons/custom-icons/solar_user-hands-linear.svg'


import AcademySummary from '../components/AcademySummary'

const Notifications = () => {
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
            <div className='flex flex-col w-full lg:w-1/2 rounded-lg border-[0.1px] border-shedagray'>
                <div className='flex gap-2 py-3 px-2 border-t-[0.1px] border-shedagray'>
                  <img className='bg-shedanormalyellow text-shedanormalyellow rounded-full' src={new_applicant_icon} alt="" />
                  <p className='text-shedagray'><span className='font-bold text-black'>James Abdul</span> just applied for <span className='font-bold text-gray'>Frontend Program</span></p>
                </div>
                <div className='flex gap-2 py-3 px-2 border-t-[0.1px] border-shedagray'>
                  <img className='bg-shedanormalyellow text-shedanormalyellow rounded-full' src={new_applicant_icon} alt="" />
                  <p className='text-shedagray'><span className='font-bold text-black'>James Abdul</span> just applied for <span className='font-bold text-gray'>Frontend Program</span></p>
                </div>
                <div className='flex gap-2 py-3 px-2 border-t-[0.1px] border-shedagray'>
                  <img className='bg-shedanormalyellow text-shedanormalyellow rounded-full' src={new_applicant_icon} alt="" />
                  <p className='text-shedagray'><span className='font-bold text-black'>James Abdul</span> just applied for <span className='font-bold text-gray'>Frontend Program</span></p>
                </div>
                <div className='flex gap-2 py-3 px-2 border-t-[0.1px] border-shedagray'>
                  <img className='bg-shedanormalyellow text-shedanormalyellow rounded-full' src={new_applicant_icon} alt="" />
                  <p className='text-shedagray'><span className='font-bold text-black'>James Abdul</span> just applied for <span className='font-bold text-gray'>Frontend Program</span></p>
                </div>
                <div className='flex gap-2 py-3 px-2 border-t-[0.1px] border-shedagray'>
                  <img className='bg-shedanormalyellow text-shedanormalyellow rounded-full' src={new_applicant_icon} alt="" />
                  <p className='text-shedagray'><span className='font-bold text-black'>James Abdul</span> just applied for <span className='font-bold text-gray'>Frontend Program</span></p>
                </div>
                <div className='flex gap-2 py-3 px-2 border-t-[0.1px] border-shedagray'>
                  <img className='bg-shedanormalyellow text-shedanormalyellow rounded-full' src={new_applicant_icon} alt="" />
                  <p className='text-shedagray'><span className='font-bold text-black'>James Abdul</span> just applied for <span className='font-bold text-gray'>Frontend Program</span></p>
                </div>
                <div className='flex gap-2 py-3 px-2 border-t-[0.1px] border-shedagray'>
                  <img className='bg-shedanormalyellow text-shedanormalyellow rounded-full' src={new_applicant_icon} alt="" />
                  <p className='text-shedagray'><span className='font-bold text-black'>James Abdul</span> just applied for <span className='font-bold text-gray'>Frontend Program</span></p>
                </div>

            </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Notifications