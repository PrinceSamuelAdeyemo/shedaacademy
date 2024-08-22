import React from 'react'


import lv1 from "../assets/images/Vector 18.svg"
import lv2 from "../assets/images/Group 6.svg"
import lv3 from "../assets/images/Group 7.svg"
import lv4 from "../assets/images/Vector 17.svg"
import lv5 from "../assets/images/Vector 19.svg"


const Conclusion = () => {
  return (
    <div id='conclusion' className='flex justify-center items-center md:h-[45vh] md:w-full'>
    {/* <div id='conclusion' className='flex justify-center items-center md:h-[45vh] md:w-[90vw]'> */}
      <div className='flex flex-col items-center justify-center relative rounded-xl py-8 font-semibold text-white text-center px-4 sm:px-0 md:h-full w-[90%] gap-4 bg-shedared'>
        <h1 className='font-semibold text-2xl md:w-[50%]'>Take the first step towards a brighter future with Sheda House Academy</h1>
        <p className='font-normal md:w-[65%]'>Whether you're looking to advance your career, start a new venture, or simply explore your interests,  Your journey to success starts.</p>
        <div className='flex flex-col md:flex-row justify-center gap-4'>
          <button className='bg-white font-semibold text-shedared rounded-[0.5rem] w-36 h-10'>Apply Now</button>
          <button className='border-2 border-white font-medium rounded-[0.5rem] w-36 h-10'>Learn more</button>
        </div>

        <div className='items-end w-[30%] absolute bottom-0 flex self-start '>
          <div id='lv1' className='h-full w-full'><img src={lv2} className='w-full h-full opacity-40' /></div>
          <div id='lv2' className=''></div>
          <div id='lv3' className=''></div>
        </div>
        <div className='items-end w-[30%] absolute bottom-0 flex self-end '>
          <div id='lv1' className='h-full w-full'><img src={lv3} className='w-full h-full opacity-40 ' /></div>
          <div id='lv2' className=''></div>
          <div id='lv3' className=''></div>
        </div>
{/* 
        <div className="hidden absolute lg:flex lg:items-end lg:leftside lg:h-full lg:w-64 lg:self-start">
          <div id='lv1' className='h-64 w-64'><img src={lv1} className='bg-none opacity-20 w-full h-full' /></div>
          <div id='lv2' className=''></div>
          <div id='lv3' className=''></div>
        </div>
        <div className="hidden absolute lg:flex lg:items-end lg:rightside lg:h-full lg:w-64 lg:self-end">
        <div id='lv1' className='h-64 w-64'><img src={lv3} className='bg-none opacity-20 w-full h-full' /></div>
          <div id='lv5' className=''></div>
          <div id='lv6' className=''></div>
        </div> */}
      </div>

      
    </div>
  )
}

export default Conclusion