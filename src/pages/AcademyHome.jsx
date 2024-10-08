import React, { useEffect, useRef, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'


import AcademySummary from '../components/AcademySummary'
import GrowthDistributionChart from '../components/charts/GrowthDistributionChart'
import StudentDistributionChart from '../components/charts/StudentDistributionChart'
import FinanceDistributionChart from '../components/charts/FinanceDistributionChart'
import AcademyDistributionChart from '../components/charts/AcademyDistributionChart'

import new_applicant_icon from '../assets/icons/custom-icons/solar_user-hands-linear.svg'
import new_student_icon from '../assets/icons/custom-icons/solar_user-id-linear.svg'
import new_program_icon from '../assets/icons/custom-icons/solar_folder-with-files-linear.svg'



const AcademyHome = () => {

  // Growth Distribution Chart
  const program_student_growth = [
        {"course": "Frontend Development", "count": 60},
        {"course": "Backend Development", "count": 90},
        {"course": "Product Design", "count": 100},
        {"course": "Social media management", "count": 90},
        {"course": "Devops", "count": 100},
        {"course": "Blockchain", "count": 155}
  ]



  return (
    <div className='flex justify-center'>
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

        <div className='flex flex-col px-3 py-4 gap-5 border-[1px] rounded-lg'>
          <p className='text-shedagray'>Quick Actions</p>
          <div className='flex flex-col gap-2 lg:flex-row lg:gap-6'>
            <div className='flex flex-col justify-between rounded-lg text-white p-2 bg-shedanormalyellow lg:h-[7rem] lg:w-[20%]'>
              <p><img src={new_applicant_icon} alt="New Applicant" /></p>
              <p>Create new applicant</p>
            </div>
            <div className='flex flex-col justify-between rounded-lg text-white p-2 bg-shedanormalblue lg:h-[7rem] lg:w-[20%]'>
              <p><img src={new_student_icon} alt="New Student" /></p>
              <p>Create new student</p>
            </div>
            <div className='flex flex-col justify-between rounded-lg text-white p-2 bg-shedanormalpurple lg:h-[7rem] lg:w-[20%]'>
              <p><img src={new_program_icon} alt="New Program" /></p>
              <p>Create new program</p>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center h-[5rem] w-full'>
          <p className='text-black text-[1.5rem] font-semibold lg:pl-10'>Overview</p>
          <select name="period" id="" className='border-[1px] h-10 text-shedagray'>
            <option value="current-week">This week</option>
            <option value="current-month">This month</option>
            <option value="current-year">This year</option>
          </select>
        </div>

        <AcademySummary />

        <div id='charts' className='flex flex-col gap-4 mt-4'>
          <div className='flex flex-col gap-6 h-[96vh] items-center lg:flex-row lg:h-[48vh]'>
            <div className='rounded-lg border-[1px] p-4 w-full lg:w-[65%] h-[50%] lg:h-full'>
              <GrowthDistributionChart />
            </div>
            <div className='rounded-lg border-[1px] p-4 w-full lg:w-[35%] h-[46%] lg:h-full'>
              <StudentDistributionChart />
            </div>
          </div>
          <div className='rounded-lg border-[1px] p-4 w-full h-[48vh]'>
            <FinanceDistributionChart />
          </div>
          <div className='rounded-lg border-[1px] p-4 w-full h-[48vh]'>
            <AcademyDistributionChart />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AcademyHome