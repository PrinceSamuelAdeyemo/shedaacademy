//React imports
import React from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async";

//Components
import FAQ from '../components/FAQ';
import Review from '../components/Review';
import Conclusion from '../components/Conclusion';

//Styling
import "../assets/styles/homepage.css"

//Images
import CoursePicBGPurple from "../assets/images/Frame 72 green.svg"
import CoursePicBGGreen from "../assets/images/Frame 72 purple.svg"
import CoursePicBGYellow from "../assets/images/Frame 72 yellowbg.svg"
import uiux_mentor from "../assets/images/uiux_mentor.png"

//Icons
import Instagrampurple from "../assets/icons/custom-icons/fa6-brands_instagram.svg"
import Instagramgreen from "../assets/icons/custom-icons/Frame 75.svg"
import Instagramyellow from "../assets/icons/custom-icons/Frame 75 yellow.svg"

const Homepage = () => {
  return (
    <div className="w-screen overflow-hidden">
    <HelmetProvider>
      <Helmet>
          <title></title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
          <link href="fontawesome-icons\css\all.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


          <link rel="stylesheet" href="index.css" type="text/css" />
          <link rel="stylesheet" href="output.css" type="text/css" />

          <script src="landingpage.js"></script>
      </Helmet>

      <div className='container flex flex-col gap-10 justify-center items-center pb-10 bg-shedapagebg'>

        <div id='intro-div' className='flex flex-col justify-center items-center rounded-2xl h-[60vh] w-[90%]'>
          <div className='flex flex-col items-center gap-8 w-[95%]'>
            <div className='flex items-center justify-between outline-white border-2 border-white rounded-2xl text-white h-12 w-[85%]'>
              <p className='text-black bg-white rounded-[0.5rem] w-24 text-center'>Trusted by</p>
              <p>400+ Students</p>
              <p>imgs</p>
            </div>
            <div className='text-white text-center'>
              <h1 className='fontBlack text-4xl'>Take Your Career To The Next Level</h1>
              <p>Sheda House Is a Creative Hub Located At The Heart Of Ibadan. We Are A Team of Creatives. Join Sheda House to interact, play, learn, create and discover.</p>
            </div>
            <div className='flex flex-col gap-2 w-[100%]'>
              <button className='bg-white text-red-900 rounded-[0.5rem] h-10'>Take assessment</button>
              <button className='text-white border-2 border-white rounded-[0.5rem] h-10'>Download our brochure</button>
            </div>
          </div>
        </div>
          

        <div id='howitworks' className='flex flex-col gap-4 w-[90%]'>
          <p className='text-center text-4xl mb-4'>How It Works</p>
          <div className='flex gap-2 rounded-xl bg-white p-3'>
            <div className='text-center'>
                <p className='bg-shedaorange w-6 h-6 rounded-full'>1</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold'>Take assessment</p>
              <p>The assessment helps us to know if you qualify for the academy and recommend courses that are a good fit for you</p>
            </div>
          </div>
          <div className='flex gap-2 rounded-xl bg-white p-3'>
            <div className='text-center'>
                <p className='bg-shedaorange w-6 h-6 rounded-full'>2</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold'>Receive and review your results</p>
              <p>The assessment helps us to know if you qualify for the academy and recommend courses that are a good fit for you</p>
            </div>
          </div>
          <div className='flex gap-2 rounded-xl bg-white p-3'>
            <div className='text-center'>
                <p className='bg-shedaorange w-6 h-6 rounded-full'>3</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold'>Pay your tuition fee and lessons start</p>
              <p>The assessment helps us to know if you qualify for the academy and recommend courses that are a good fit for you</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className='text-center font-semibold text-3xl'>Courses We Offer</h1>
        </div>
        <div id='courses-offering' className='flex flex-col justify-center items-center gap-4 w-[90%]'>
          
          <div className='flex justify-center bg-white rounded-xl py-4'>
            <div className='flex flex-col w-[90%] gap-4'>
              <p className='flex justify-center items-center rounded-xl bg-shedaicon-purple w-12 h-12'><i><span><img className='' src={Instagrampurple} alt="" /></span></i></p>
              <p className='border-2 rounded-2xl bg-grey-900 text-gray-500 w-20 text-center'>Physical</p>
              <p className='font-bold'>Front End Web Development (Virtual)</p>
              <p className='font-medium text-gray-900'>Become a Front End Web Developer in 4 months</p>
              <button className='border-2 border-gray-50 text-red-500 text-left font-medium rounded-2xl h-10 ps-2'>Learn more <i className='flex self-end'><span></span></i></button>
              <div className='skill-img-div w-full'>
                <img className='w-full' src={CoursePicBGPurple} alt="" />
              </div>
            </div>

          </div>

          <div className='flex justify-center bg-white rounded-xl py-4'>
            <div className='flex flex-col w-[90%] gap-4'>
              <p className='flex justify-center items-center rounded-xl bg-shedaicon-green w-12 h-12'><i><span><img className='' src={Instagramgreen} alt="" /></span></i></p>
              <p className='border-2 rounded-2xl bg-grey-900 text-gray-500 w-20 text-center'>Physical</p>
              <p className='font-bold'>Back-end Web Development (Virtual)</p>
              <p className='font-medium text-gray-900'>Html CSS (Project) Conditional Statements. Javascript PHP functions and control structures PHP loops, PHP arrays Introduction to MySQL and usage of XAMPP, CRUD</p>
              <button className='border-2 border-gray-50 text-red-500 text-left font-medium rounded-2xl h-10 ps-2'>Learn more <i className='flex self-end'><span></span></i></button>
              <div className='skill-img-div w-full'>
                <img className='w-full' src={CoursePicBGGreen} alt="" />
              </div>
            </div>

          </div>
          
          <div className='flex justify-center bg-white rounded-xl py-4'>
            <div className='flex flex-col w-[90%] gap-4'>
              <p className='flex justify-center items-center rounded-xl bg-shedaicon-purple-500 w-12 h-12'><i><span><img className='' src={Instagramyellow} alt="" /></span></i></p>
              <p className='border-2 rounded-2xl bg-grey-900 text-gray-500 w-20 text-center'>Physical</p>
              <p className='font-bold'>Front End Web Development (Virtual)</p>
              <p className='font-medium text-gray-900'>Become a Front End Web Developer in 4 months</p>
              <button className='border-2 border-gray-50 text-red-500 text-left font-medium rounded-2xl h-10 ps-2'>Learn more <i className='flex self-end'><span></span></i></button>
              <div className='skill-img-div w-full'>
                <img className='w-full' src={CoursePicBGYellow} alt="" />
              </div>
            </div>

          </div>

          <div className='flex justify-center bg-white rounded-xl py-4'>
            <div className='flex flex-col w-[90%] gap-4'>
              <p className='flex justify-center items-center rounded-xl bg-shedaicon-purple w-12 h-12'><i><span><img className='' src={Instagrampurple} alt="" /></span></i></p>
              <p className='border-2 rounded-2xl bg-grey-900 text-gray-500 w-20 text-center'>Physical</p>
              <p className='font-bold'>Front End Web Development (Virtual)</p>
              <p className='font-medium text-gray-900'>Become a Front End Web Developer in 4 months</p>
              <button className='border-2 border-gray-50 text-red-500 text-left font-medium rounded-2xl h-10 ps-2'>Learn more <i className='flex self-end'><span></span></i></button>
              <div className='skill-img-div w-full'>
                <img className='w-full' src={CoursePicBGPurple} alt="" />
              </div>
            </div>

          </div>
        </div>
        

        <div id='' className='flex flex-col gap-4 w-[90%]'>
          <h1 className='text-2xl font-semibold'>Project based learning and hands on practical to build a portfolio of live projects </h1>
          <div className='flex flex-col gap-5'>
            <img src={uiux_mentor} alt="Mr Ben, UI/UX Mentor" />
            <p className='font-normal text-gray-500'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. </p>
            <p className='font-semibold text-xl'>Mr. Ben (UI/UX Mentor)</p>
          </div>
        </div>

        <div id='review' className='flex flex-col gap-3 w-[90%]'>
          <h1 className='text-3xl font-semibold text-center'>Reviews</h1>
          <p className='text-center font-medium'>Hear what our previous students have to say</p>
          <div className='flex flex-col gap-6'>
            <Review />
            <Review />
            <Review />
          </div>
          
        </div>

        <div id='faq' className='flex flex-col gap-4 w-[90%] mb-4'>
          <h1 className='font-semibold text-3xl'>Frequently Asked Questions (FAQs)</h1>
          <div className='faq-groupset'>
            <div className='faq-group'>
                <FAQ />
            </div>
          </div>
        </div>
        
        <Conclusion />

      </div>
</HelmetProvider>
    </div>
  )
}

export default Homepage