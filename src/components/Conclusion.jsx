import React from 'react'

const Conclusion = () => {
  return (
    <div id='conclusion' className='flex justify-center items-center md:h-[45vh] md:w-full'>
    {/* <div id='conclusion' className='flex justify-center items-center md:h-[45vh] md:w-[90vw]'> */}
      <div className='flex flex-col items-center justify-center rounded-xl py-8 font-semibold text-white text-center md:h-full w-[90%] gap-4 bg-shedared'>
        <h1 className='font-semibold text-2xl md:w-[50%]'>Take the first step towards a brighter future with Sheda House Academy</h1>
        <p className='font-normal md:w-[65%]'>Whether you're looking to advance your career, start a new venture, or simply explore your interests,  Your journey to success starts.</p>
        <div className='flex flex-col md:flex-row justify-center gap-4'>
          <button className='bg-white font-semibold text-shedared rounded-[0.5rem] w-36 h-10'>Apply Now</button>
          <button className='border-2 border-white font-medium rounded-[0.5rem] w-36 h-10'>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default Conclusion