import React from 'react'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const AddNewProgram = () => {
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


        <div className='flex lg:gap-8 xl:gap-20 w-full'>
            <div className='flex flex-col gap-4 xl:gap-6 lg:w-1/2'>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>Title</p>
                    <input type="text" className='h-12 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px]' />
                </div>
                <div className='flex gap-2 lg:gap-10 w-full'>
                    <div className='flex flex-col gap-2 flex-grow'>
                        <p className='font-semibold'>Price</p>
                        <input type="text" className='h-12 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px]' />
                    </div>
                    <div className='flex flex-col gap-2 lg:w-[25%]'>
                        <p className='font-semibold'>Pricing type</p>
                        <select name="" id="" className='h-12 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px] px-1 font-medium'>
                            <option value="">Installment</option>
                            <option value="">One Time Payment</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>Instructors</p>
                    <input type="text" className='h-12 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px]' />
                </div>
                <div className='flex gap-2 lg:gap-10 w-full'>
                    <div className='flex flex-col gap-2 flex-grow'>
                        <p className='font-semibold'>Duration</p>
                        <input type="text" className='h-12 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px]' />
                    </div>
                    <div className='flex flex-col gap-2 lg:w-[25%]'>
                        <p className='font-semibold'>Status</p>
                        <select name="" id="" className='h-12 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px] px-1'>
                            <option value="">Active</option>
                            <option value="">Inactive</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>Description</p>
                    <textarea name="" id="" className='bg-shedapagebg rounded-lg w-full h-[15rem]'></textarea>
                </div>
            </div>
            <div className='flex flex-col lg:w-1/2 justify-between'>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-center'>Cover</p>
                    <div className='w-full h-[16rem] bg-shedapagebg rounded-lg border-[1px]'>

                    </div>
                </div>
                <div className='flex gap-2 lg:gap-4'>
                    <button className='w-1/2 h-10 rounded-lg border-[2px] border-shedared text-shedared'>Preview</button>
                    <button className='w-1/2 h-10 rounded-lg bg-shedared text-white'>Next</button>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default AddNewProgram