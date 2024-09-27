import React, { useState } from 'react'
import "../assets/styles/homepage.css"
import "../assets/icons/fontawesome-icons/css/all.css"

const FAQ = () => {
  const [faqopen, SetFaqopen] = useState(false);

  var toggleFaq = () => {
    SetFaqopen(!faqopen);
  }

  return (
    <div className='flex flex-col gap-4 faq-question w-[90%]'>
      <div className=''>
        <div onClick={toggleFaq} className='flex justify-between'>
            <p className='font-semibold'>How can I hire Sheda House for software design and development services?</p>
            <div>
              <div className={faqopen? 'w-4 bg-shedagray h-1 faqva3': 'w-4 bg-shedagray h-1 faqva1'}></div>
              <div className={faqopen? 'w-4 bg-shedagray h-1 faqva4': 'w-4 bg-shedagray h-1 faqva2'}></div>
            </div>
        </div>
        
        <div className='bg-shedagray h-[1px]'></div>
      </div>
        

        <div className={faqopen? "flex" : "hidden"}>
            <p>If you're interested in hiring our software design and development agency, simply reach out to us via email or phone. Our team will work closely with you to understand your needs and develop a custom solution tailored to your requirements.</p>
        </div>
    </div>
  )
}

export default FAQ