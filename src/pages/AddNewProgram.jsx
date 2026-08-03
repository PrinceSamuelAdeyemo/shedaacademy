import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import createprograms_api from '../utils/admin/programs/createprogram'

const AddNewProgram = () => {
  const navigate = useNavigate()
  const program_titleRef = useRef(null);
  const program_priceRef = useRef(null)
  const program_pricingtypeRef = useRef(null);
  const program_instructorRef = useRef(null);
  const program_durationRef = useRef(null);
  const program_statusRef = useRef(null);
  const program_descriptionRef = useRef(null);
  const program_coverimageRef = useRef(null);


  const toPage = (page) => {
    navigate(`/${page}`)
  }

  const createNewProgram = (event) => {
    event.preventDefault()
    var instructors_list = []
    instructors_list.push(program_instructorRef.current.value)

    createprograms_api.post('', {
      "program_title": program_titleRef.current.value,
      "description": program_descriptionRef.current.value,
      "cover_image": program_coverimageRef.current.value,
      "price": program_priceRef.current.value,
      "payment_type": program_pricingtypeRef.current.value,
      "duration": program_durationRef.current.value,
      "status": program_statusRef.current.value,
      "instructors": instructors_list
    })
    .then((response => {
      console.log(response)
      console.log(response.data)
      //toPage('home/create-assessmentquestions')
    }))
    .catch((error) => {
      console.log(error)
      
    })
  }


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


        <form onSubmit={() => createNewProgram(event)} className='flex lg:gap-8 xl:gap-20 w-full' encType='multipart/form-data'>
            <div className='flex flex-col gap-4 xl:gap-6 lg:w-1/2'>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>Title</p>
                    <input type="text" ref={program_titleRef} required className='h-12 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px]' />
                </div>
                <div className='flex gap-2 lg:gap-10 w-full'>
                    <div className='flex flex-col gap-2 flex-grow'>
                        <p className='font-semibold'>Price</p>
                        <input type="text" ref={program_priceRef} required className='h-12 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px]' />
                    </div>
                    <div className='flex flex-col gap-2 lg:w-[25%]'>
                        <p className='font-semibold'>Pricing type</p>
                        <select name="" ref={program_pricingtypeRef} required id="" className='h-12 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px] px-1 font-medium'>
                            <option value="installment">Installment</option>
                            <option value="full">One Time Payment</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>Instructors</p>
                    <input type="text" ref={program_instructorRef} className='h-12 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px]' />
                </div>
                <div className='flex gap-2 lg:gap-10 w-full'>
                    <div className='flex flex-col gap-2 flex-grow'>
                        <p className='font-semibold'>Duration</p>
                        <input type="text" ref={program_durationRef} required className='h-12 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px]' />
                    </div>
                    <div className='flex flex-col gap-2 lg:w-[25%]'>
                        <p className='font-semibold'>Status</p>
                        <select name="" ref={program_statusRef} required id="" className='h-12 w-full rounded-lg bg-shedapagebg border-[1px] hover:border-[1px] px-1'>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>Description</p>
                    <textarea ref={program_descriptionRef} required name="" id="" className='bg-shedapagebg rounded-lg w-full h-[15rem]'></textarea>
                </div>
            </div>
            <div className='flex flex-col lg:w-1/2 justify-between'>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-center'>Cover</p>
                    <div className='relative w-full h-[16rem] bg-shedapagebg rounded-lg border-[1px]' onClick={() => program_coverimageRef.current.click()}>
                      <input type='file' accept='image/*' ref={program_coverimageRef} alt="Program Image" className="absolute -z-10" />
                    </div>
                </div>
                <div className='flex gap-2 lg:gap-4'>
                    <button type="button" className='w-1/2 h-10 rounded-lg border-[2px] border-shedared text-shedared'>Preview</button>
                    <button type="submit" className='w-1/2 h-10 rounded-lg bg-shedared text-white'>Next</button>
                </div>
            </div>
        </form>
        
      </div>
    </div>
  )
}

export default AddNewProgram