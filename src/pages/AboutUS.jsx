import React from 'react'

//Components
import FAQ from '../components/FAQ'
import Conclusion from '../components/Conclusion'
import SendMessageForm from '../components/SendMessageForm'


//Images
import CourseinfoVid from "../assets/images/Frame 103.svg"

const AboutUS = () => {
  return (
    <div className='flex flex-col gap-24 items-center pb-10'>
      <div className='flex flex-col items-center bg-shedared text-white pt-8 pb-10'>
        <div id='aboutus' className='flex flex-col w-[90%] gap-6'>
          <p className='font-semibold text-4xl'>About us</p>
          <p>At Sheda House, we believe in the transformative power of creativity and technology. Located at the heart of Ibadan, Nigeria, Sheda House is more than just a creative hub - it's a dynamic community where innovation thrives, ideas flourish, and connections are made.</p>
          <p> Our mission is simple: to provide a platform where individuals from all walks of life can come together to learn, create, and innovate.</p>
          <p>Whether you're a student eager to expand your skills, a community member looking to engage with like-minded individuals, or a client seeking cutting-edge solutions, Sheda House welcomes you with open arms.</p>
        </div>

        <div id='' className='flex flex-col gap-4 w-[90%] mt-4 mb-24'>
          <div className='flex flex-wrap gap-3'>
            <div className='flex flex-col text-center'>
              <p className='font-bold text-4xl'>40+</p>
              <p className='font-medium text-[1rem]'>Applications developed</p>
            </div>
            <div className='flex flex-col text-center'>
              <p className='font-bold text-4xl'>80+</p>
              <p className='font-medium text-[1rem]'>Websites builts</p>
            </div>
            <div className='flex flex-col text-center'>
              <p className='font-bold text-4xl'>40K+</p>
              <p className='font-medium text-[1rem]'>Customers served</p>
            </div>
          </div>
          <button className='bg-white text-shedared text-xl font-semibold w-40 h-10 rounded-xl'>Learn more</button>
        </div>

        <div className='w-full flex justify-center h-[80vh]'>
          <img className='w-[90%] object-cover' src={CourseinfoVid} alt="Video of sheda house" />
        </div>
      </div>

      <SendMessageForm />

      <div className='faq-group flex flex-col items-center gap-10 w-[90%]'>
        <FAQ />
        <FAQ />
        <FAQ />
      </div>
      

      <Conclusion />
        
    </div>
  )
}

export default AboutUS