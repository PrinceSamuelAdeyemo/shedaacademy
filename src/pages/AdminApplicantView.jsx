import React from 'react'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import graduate_icon from '../assets/icons/custom-icons/graduate_icon.svg'
import grant_icon from '../assets/icons/custom-icons/grant_icon.svg'
import expel_icon from '../assets/icons/custom-icons/expel_icon.svg'

import ApplicantCourseInfo from '../components/ApplicantCourseInfo'
import AcademyStudentPaymentInfo from '../components/AcademyStudentPaymentInfo'

const AdminApplicantView = () => {
  return (
    <div className='flex justify-center pb-24'>
      <div className='flex flex-col gap-1 w-[97%]'>

        <div className='flex items-center justify-between h-[5rem] shadow-black w-full'>
          <div className='flex gap-4'>
            <FaAngleLeft />
            <FaAngleRight />
          </div>
          <div className='lg:w-[15%]'>
            <img src="" alt="" />
            <div>
              <p className='font-semibold text-lg'>Mr Tim</p>
              <p className='text-sm'>mrtim@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='w-full bg-gray-100 h-[1px]'></div>

        <div className='flex flex-col px-3 py-4 gap-5 border-[1px] rounded-lg mb-4'>
          <p className='text-shedagray'>Quick Actions</p>
          <div className='flex flex-col gap-2 lg:flex-row lg:gap-6'>
            <div className='flex flex-col border-2 border-shedanormalpurple relative justify-between rounded-lg text-white p-2 lg:h-[7rem] lg:w-[15%]'>
              <div className='absolute rounded-lg w-full h-full top-0 left-0 bg-shedanormalpurple opacity-5 -z-10'></div> {/* Div needed for some cover-ups */}
              <p><img src={graduate_icon} alt="New Applicant" /></p>
              <p className='text-shedanormalpurple text-xl font-semibold'>Accept Applicant</p>
            </div>
            <div className='flex flex-col border-2 border-shedared relative justify-between rounded-lg text-white p-2 lg:h-[7rem] lg:w-[15%]'>
              <div className='absolute rounded-lg w-full h-full top-0 left-0 bg-shedared opacity-5 -z-10'></div> {/* Div needed for some cover-ups */}
              <p><img src={expel_icon} alt="New Applicant" /></p>
              <p className='text-shedared text-xl font-semibold'>Reject Applicant</p>
            </div>
            <div className='flex flex-col border-2 border-shedalightgreen relative justify-between rounded-lg text-white p-2 lg:h-[7rem] lg:w-[15%]'>
              <div className='absolute rounded-lg w-full h-full top-0 left-0 bg-shedalightgreen opacity-5 -z-10'></div> {/* Div needed for some cover-ups */}
              <p><img src={grant_icon} alt="New Applicant" /></p>
              <p className='text-shedalightgreen text-xl font-semibold'>Grant Discount</p>
            </div>
          </div>
        </div>

        <div className='flex px-3 py-4 gap-5 border-[1px] rounded-lg mb-4'>
          <div className='rounded-full opacity-20 w-32 h-32 bg-shedagray'>
          </div>
          <div className='flex flex-col gap-6'>
            <p className='text-[2rem] font-semibold pt-2'>Timothy Ayodele</p>
            <div className='flex gap-8'>
              <div className='flex gap-3'>
                <p className='text-shedagray'>Application ID:</p>
                <p className='text-black font-semibold'>X0124794</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-shedagray'>Date of application:</p>
                <p className='text-black font-semibold'>18th January - 18th June</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 px-3 py-4 border-[1px] rounded-lg mb-4'>
          <p className='text-lg font-semibold'>Applied Course</p>
          <div>
            <ApplicantCourseInfo />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminApplicantView