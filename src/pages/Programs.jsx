import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import AcademySummary from '../components/AcademySummary'
import MainCourseInfo from '../components/MainCourseInfo'

const Programs = () => {
    const navigate = useNavigate()

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


        <div className='flex justify-between items-center h-[5rem] w-full'>
          <p className='text-black text-[1.5rem] font-semibold pl-10'>Overview</p>
          <select name="period" id="" className='border-[1px] h-10 text-shedagray'>
            <option value="current-week">This week</option>
            <option value="current-month">This month</option>
            <option value="current-year">This year</option>
          </select>
        </div>

        <AcademySummary />

        <div className='flex items-center justify-between w-full mt-6 h-[4rem]'>
          <input type="search" name="" id="" placeholder='Search' className='rounded-md h-2/3 w-[20%] border-[1px] px-2' />
          <div className='flex justify-between w-[50%]'>
            <div className='flex gap-2'>
              <p className='text-shedagray text-lg font-small'>Payment is:</p>
              <select name="status" id="" className='rounded-md text-black bg-shedapagebg'>
                <option value="All">All</option>
                <option value="Installment Payment">Installment Payment</option>
                <option value="One Time Payment">One Time Payment</option>
              </select>
            </div>
            
          </div>
          <button onClick={() => navigate("/home/newprogram")} className='bg-shedared rounded-md text-white p-2 text-[75%] 2xl:text-[100%]'>+ Add new program</button>
        </div>
        
        <div className='flex flex-col gap-4 lg:gap-6 w-full'>
            <MainCourseInfo />
            <MainCourseInfo />
            <MainCourseInfo />
            <MainCourseInfo />
        </div>
      </div>
    </div>
  )
}

export default Programs