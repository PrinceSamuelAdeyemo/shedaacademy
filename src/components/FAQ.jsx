import React from 'react'

const FAQ = () => {
  return (
    <div className='flex flex-col gap-3 faq-question w-[90%]'>
        <div className='flex justify-between'>
            <p className='font-semibold'>How can I hire Sheda House for software design and development services?</p>
            <p>^</p>
        </div>
        
        <div className='bg-shedagray h-[1px]'></div>

        <div className='faq-answer'>
            <p>If you're interested in hiring our software design and development agency, simply reach out to us via email or phone. Our team will work closely with you to understand your needs and develop a custom solution tailored to your requirements.</p>
        </div>
    </div>
  )
}

export default FAQ