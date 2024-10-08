import React from 'react'
import { useNavigate  } from 'react-router-dom'

// API endpoints
import { base_URL } from '../../utils/base_api'
const ProgramDisplay = ({ program, icon_pic }) => {
    const navigate = useNavigate()

    const toProgramInfo = (event) => {
        navigate(`/course/${program.program_code}/Frontend Development`)
      }

  return (
    <div className='flex justify-center bg-white rounded-xl py-4 w-[80%]'>
        <div className='flex flex-col w-[90%] gap-4 md:flex-row md:w-[95%]'>
            <div className='flex flex-col gap-4 w-full lg:w-[40%]'>
            <p className='flex justify-center items-center rounded-xl bg-shedaicon-purple w-12 h-12'><i><span><img className='' src={icon_pic} alt="" /></span></i></p>
            <div className='flex flex-col gap-4 justify-end h-full'>
                <p className='border-2 rounded-2xl bg-grey-900 text-gray-500 w-20 text-center'>Physical</p>
                <p className='font-bold'>{program.program_title}</p>
                <p className='font-medium text-gray-900'>Become a Front End Web Developer in 4 months</p>
                <button onClick = {toProgramInfo} className='px-10 border-2 border-gray-50 text-shedared text-left font-medium flex justify-between rounded-2xl h-10 ps-2'>Learn more <i className='flex fa fa-arrow-right self-center'><span></span></i></button>
            </div>
            </div>
            <div className='skill-img-div w-full lg:w-[60%]'>
            <img className='w-full h-[30vh] md:h-[40vh] object-cover' src={`${base_URL}${program.cover_image}`} alt={`${program.program_title} course pic`} />
            </div>
        </div>
    </div>
  )
}

export default ProgramDisplay