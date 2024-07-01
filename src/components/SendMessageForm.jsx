import React from 'react'

const SendMessageForm = () => {
  return (
    <div className='flex w-full justify-center'>
      <div className='bg-white flex flex-col gap-4 rounded-[2rem] w-[100%]'>
        <p className='text-center text-2xl'>Send us a message</p>
        <form action="" className='flex flex-col items-center gap-6 bg-white'>
          <div className='flex flex-col gap-2 w-[90%]'>
            <label htmlFor="name" className='text-[1.2rem]'>Name</label>
            <input id='name' type="text" className='shadow text-4xl bg-gray-100' />
          </div>

          <div className='flex flex-col w-[90%] gap-2'>
            <label htmlFor="phone-number" className='text-[1.2rem]'>Phone Number</label>
            <input id='phone-number' type="text" className='shadow text-4xl bg-gray-100' />
          </div>
          
          <div className='flex flex-col w-[90%] gap-2'>
            <label htmlFor="email" className='text-[1.2rem]'>Email Address</label>
            <input id='email' type="text" className='shadow text-4xl bg-gray-100' />
          </div>

          <div className='flex flex-col w-[90%] gap-2'>
            <label htmlFor="reason" className='text-[1.2rem]'>Reason for reaching out</label>
            <input id='reason' type="text" className='shadow text-4xl bg-gray-100' />
          </div>

          <div className='flex flex-col w-[90%] gap-2'>
            <label htmlFor="message" className='text-[0.8rem]'>Message</label>
            <textarea name="message" id="message" className='h-10' />
          </div>

          <button className='bg-shedared text-white text-[1.2rem] h-10  w-[100%]'>Send Message</button>
          
        </form>
      </div>
     
    </div>
  )
}

export default SendMessageForm