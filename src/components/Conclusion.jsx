import React from 'react'

const Conclusion = () => {
  return (
    <div id='conclusion' className='flex justify-center'>
      <div className='flex flex-col rounded-xl py-8 text-white text-center w-[90%] gap-4 bg-red-500'>
        <h1 className='font-semibold text-2xl'>Take the first step towards a brighter future with Sheda House Academy</h1>
        <p className='font-normal'>Whether you're looking to advance your career, start a new venture, or simply explore your interests, we're here to help you achieve your goals. Enroll today and unlock your potential with Sheda House Academy. Your journey to success starts.</p>
        <div className='flex justify-center gap-4'>
          <button className='bg-white font-semibold text-red-600 rounded-[0.5rem] w-36 h-10'>Apply Now</button>
          <button className='border-2 border-white font-medium rounded-[0.5rem] w-36 h-10'>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default Conclusion