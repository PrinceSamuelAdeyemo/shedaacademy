//React imports
import React from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

//Components
import FAQ from '../components/FAQ';
import Review from '../components/Review';
import Conclusion from '../components/Conclusion';

//Styling
import "../assets/styles/homepage.css"
import "../assets/styles/all.css"

//Images
import CoursePicBGPurple from "../assets/images/Frame 72 green.svg"
import CoursePicBGGreen from "../assets/images/Frame 72 purple.svg"
import CoursePicBGYellow from "../assets/images/Frame 72 yellowbg.svg"
import uiux_mentor from "../assets/images/uiux_mentor.png"
import logo from "../assets/images/logo.svg"

//Icons
import Instagrampurple from "../assets/icons/custom-icons/fa6-brands_instagram.svg"
import Instagramgreen from "../assets/icons/custom-icons/Frame 75.svg"
import Instagramyellow from "../assets/icons/custom-icons/Frame 75 yellow.svg"

import lv1 from "../assets/images/Vector 18.svg"
import lv2 from "../assets/images/Group 6.svg"
import lv3 from "../assets/images/Group 7.svg"
import lv4 from "../assets/images/Vector 17.svg"
import lv5 from "../assets/images/Vector 19.svg"
import lv6 from "../assets/images/Vector 16.svg"

import lv7 from "../assets/images/Rectangle 6.svg"

import img1 from "../assets/images/Ellipse 4.png"
// Intro side


const Homepage = () => {
  const navigate = useNavigate()

  const tofrontend = (event) => {
    navigate("/course/Frontend Development")
  }
  const goToAssessment= (event) => {
    navigate("/assessmentform")
  }

  return (
    <div className="w-screen overflow-x-hidden">
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

      <div className='flex flex-col gap-10 justify-center items-center pb-10 bg-shedapagebg w-screen overflow-x-hidden md:gap-14 lg:gap-20'>

        <div id='intro-div' className='flex flex-col justify-center items-center rounded-2xl bg-shedared h-[70vh] w-[90%] relative'>
          <div className='flex flex-col items-center gap-8 w-[95%] sm:w-[60%] md:w-[50%] lg:w-[90%]'>
          <div className='flex gap-0 lg:gap-2 items-center justify-between px-1 md:px-2 outline-white border-2 border-white rounded-xl h-8 xl:h-12 w-[80%] sm:w-[65%] md:max-w-[70%] lg:max-w-[35%] xl:w-[27%]'>
              <p className='bg-white text-gray-500 rounded-md text-[70%] w-[30%] md:text-[70%] xl:text-lg lg:w-24 text-center font-bold'>Trusted by</p>
              <p className='text-white font-bold text-[90%] md:text-sm text-center'>400+ Students</p>
              <div className='flex items-center z-10 relative w-[20%] md:w-[25%] lg:w-[20%] h-full'>
                <img className='absolute h-5 lg:h-2/3' src={img1} alt="" />
                <img className='absolute h-5 lg:h-2/3 left-3 md:left-3 lg:left-4' src={img1} alt="" />
                <img className='absolute h-5 lg:h-2/3 left-6 md:left-6 lg:left-8' src={img1} alt="" />
              </div>
            </div>
            <div className='text-white text-center flex flex-col gap-4 md:w-[50vw] md:gap-8 xl:w-[40vw] z-10'>
              <h1 className='fontBlack font-bold text-4xl lg:text-6xl'>Take Your Career To The Next Level</h1>
              <p>Sheda House Is a Creative Hub Located At The Heart Of Ibadan. We Are A Team of Creatives. Join Sheda House to interact, play, learn, create and discover.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 w-[90%] lg:flex-row md:w-[100%] lg:w-[65%] xl:w-[40%]'>
              <button className='bg-white text-[15px] text-shedared font-bold rounded-[0.5rem] w-full lg:w-1/2  h-[6vh] px-10 z-10' onClick = {goToAssessment}>Take assessment</button>
              <button className='text-white text-[15px] border-2 border-white rounded-[0.5rem] w-full lg:w-1/2  h-[6vh] z-10'>Download our brochure</button>
            </div>
          </div>


          <div className='flex h-full w-full absolute lg:flex lg:h-full lg:w-8/12 opacity-1 bg-none border-none'>
            <div className='relative h-full w-full'>
              <div className='absolute top-[25%] -left-12 md:top-0 md:-right-10 lg:-left-64 xl:left-0 xl:top-[0%]'><img src={lv7} alt="" /></div>
              <div className='absolute top-[25%] left-12 md:top-0 md:-right-96 lg:-left-32 xl:left-[15%] xl:top-[0%]'><img src={lv7} alt="" /></div>
              <div className='hidden lg:block absolute lg:-right-64 xl:left-[40%] xl:top-[0%]'><img src={lv7} alt="" /></div>
            </div>
          </div>
          <div className="flex items-end w-32 self-start h-full absolute lg:flex lg:items-end lg:leftside lg:h-full lg:w-64 lg:self-start">
            <div id='lv1' className='absolute left-1'><img src={lv6} className='bg-none object-cover lg:h-[40vh] rounded-xl w-14 rotate-0 opacity-[0.5]' /></div>
            <div id='lv1' className='absolute left-24'><img src={lv6} className='bg-none object-cover lg:h-[50vh] rounded-xl w-14 rotate-0 opacity-[0.5]' /></div>
            <div id='lv1' className='overflow-hidden relative h-[50vh] w-[18vw]'><img src={lv5} className='absolute -left-7 rotate_270 -bottom-10 w-[40vw] opacity-[0.6]' /></div>
            <div id='lv1' className='absolute left-36'><img src={lv6} className='bg-none object-cover lg:h-[35vh] rounded-xl w-16 rotate-0 opacity-[0.5]' /></div>
          </div>
          <div className="flex items-end w-32 self-end h-full absolute lg:flex lg:flex-row-reverse lg:items-end lg:rightside lg:h-full lg:w-64 lg:self-end">
            <div id='lv1' className='absolute left-1'><img src={lv6} className='bg-none object-cover lg:h-[40vh] rounded-xl w-14 rotate-0 opacity-[0.5]' /></div>
            <div id='lv1' className='absolute left-24'><img src={lv6} className='bg-none object-cover lg:h-[50vh] rounded-xl w-14 rotate-0 opacity-[0.5]' /></div>
            <div id='lv1' className='overflow-hidden relative h-[50vh] w-[18vw]'><img src={lv5} className='absolute -left-7 rotate_270 -bottom-10 w-[40vw] opacity-[0.6]' /></div>
            <div id='lv1' className='absolute left-36'><img src={lv6} className='bg-none object-cover lg:h-[35vh] rounded-xl w-16 rotate-0 opacity-[0.5]' /></div>
          </div>
          
        </div>
          
        <div id='howitworks' className='flex flex-col gap-4 w-[90%]'>
          <p className='text-center text-4xl mb-4 font-semibold'>How It Works</p>
          <div className='flex flex-col gap-4 md:flex-row'>
            <div className='flex gap-2 rounded-xl bg-white p-3 md:text-[1rem] lg:min-h-[10rem]'>
              <div className='text-center'>
                  <p className='bg-shedaorange w-6 h-6 rounded-full'>1</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Take assessment</p>
                <p>The assessment helps us to know if you qualify for the academy and recommend courses that are a good fit for you</p>
              </div>
            </div>
            <div className='flex gap-2 rounded-xl bg-white p-3 md:text-[1rem] lg:min-h-[10rem]'>
              <div className='text-center'>
                  <p className='bg-shedaorange w-6 h-6 rounded-full'>2</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Receive and review your results</p>
                <p>The assessment helps us to know if you qualify for the academy and recommend courses that are a good fit for you</p>
              </div>
            </div>
            <div className='flex gap-2 rounded-xl bg-white p-3 md:text-[1rem] lg:min-h-[10rem]'>
              <div className='text-center'>
                  <p className='bg-shedaorange w-6 h-6 rounded-full'>3</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Pay your tuition fee and lessons start</p>
                <p>The assessment helps us to know if you qualify for the academy and recommend courses that are a good fit for you</p>
              </div>
            </div>
          </div>
          
        </div>

        <div className=' w-[90%]'>
          <h1 className='text-center font-semibold text-3xl'>Courses We Offer</h1>
        </div>
        <div id='courses-offering' className='flex flex-col justify-center items-center gap-4 w-[90%] lg:gap-8'>

          <div className='flex justify-center bg-white rounded-xl py-4 w-[80%]'>
            <div className='flex flex-col w-[90%] gap-4 md:flex-row md:w-[95%]'>
              <div className='flex flex-col gap-4 w-full lg:w-[40%]'>
                <p className='flex justify-center items-center rounded-xl bg-shedaicon-purple w-12 h-12'><i><span><img className='' src={Instagrampurple} alt="" /></span></i></p>
                <div className='flex flex-col gap-4 justify-end h-full'>
                  <p className='border-2 rounded-2xl bg-grey-900 text-gray-500 w-20 text-center'>Physical</p>
                  <p className='font-bold'>Front End Web Development (Virtual)</p>
                  <p className='font-medium text-gray-900'>Become a Front End Web Developer in 4 months</p>
                  <button onClick = {tofrontend} className='px-10 border-2 border-gray-50 text-shedared text-left font-medium flex justify-between rounded-2xl h-10 ps-2'>Learn more <i className='flex fa fa-arrow-right self-center'><span></span></i></button>
                </div>
              </div>
              <div className='skill-img-div w-full lg:w-[60%]'>
                <img className='w-full h-[30vh] md:h-[40vh] object-cover' src={CoursePicBGPurple} alt="" />
              </div>
            </div>
          </div>

          <div className='flex justify-center bg-white rounded-xl py-4 w-[80%]'>
            <div className='flex flex-col w-[90%] gap-4 md:flex-row md:w-[95%]'>
              <div className='flex flex-col gap-4 w-full lg:w-[40%]'>
                <p className='flex justify-center items-center rounded-xl bg-shedaicon-green w-12 h-12'><i><span><img className='' src={Instagramgreen} alt="" /></span></i></p>
                <div className='flex flex-col gap-4 justify-end h-full'>
                  <p className='border-2 rounded-2xl bg-grey-900 text-gray-500 w-20 text-center'>Physical</p>
                  <p className='font-bold'>Back-end Web Development (Virtual)</p>
                  <p className='font-medium text-gray-900'>Html CSS (Project) Conditional Statements. Javascript PHP functions and control structures PHP loops, PHP arrays Introduction to MySQL and usage of XAMPP, CRUD</p>
                  <button onClick = {tofrontend} className='px-10 border-2 border-gray-50 text-shedared text-left font-medium flex justify-between rounded-2xl h-10 ps-2'>Learn more <i className='flex fa fa-arrow-right self-center'><span></span></i></button>
                </div>
              </div>
              <div className='skill-img-div w-full lg:w-[60%]'>
                <img className='w-full h-[30vh] md:h-[40vh] object-cover' src={CoursePicBGGreen} alt="" />
              </div>
            </div>
          </div>

          <div className='flex justify-center bg-white rounded-xl py-4 w-[80%]'>
            <div className='flex flex-col w-[90%] gap-4 md:flex-row md:w-[95%]'>
              <div className='flex flex-col gap-4 w-full lg:w-[40%]'>
                <p className='flex justify-center items-center rounded-xl bg-shedaicon-purple w-12 h-12'><i><span><img className='' src={Instagramyellow} alt="" /></span></i></p>
                <div className='flex flex-col gap-4 justify-end h-full'>
                  <p className='border-2 rounded-2xl bg-grey-900 text-gray-500 w-20 text-center'>Physical</p>
                  <p className='font-bold'>Front End Web Development (Virtual)</p>
                  <p className='font-medium text-gray-900'>Become a Front End Web Developer in 4 months</p>
                  <button onClick = {tofrontend} className='px-10 border-2 border-gray-50 text-shedared text-left font-medium flex justify-between rounded-2xl h-10 ps-2'>Learn more <i className='flex fa fa-arrow-right self-center'><span></span></i></button>
                </div>
              </div>
              <div className='skill-img-div w-full lg:w-[60%]'>
                <img className='w-full h-[30vh] md:h-[40vh] object-cover' src={CoursePicBGYellow} alt="" />
              </div>
            </div>
          </div>

          <div className='flex justify-center bg-white rounded-xl py-4 w-[80%]'>
            <div className='flex flex-col w-[90%] gap-4 md:flex-row md:w-[95%]'>
              <div className='flex flex-col gap-4 w-full lg:w-[40%]'>
                <p className='flex justify-center items-center rounded-xl bg-shedaicon-purple w-12 h-12'><i><span><img className='' src={Instagrampurple} alt="" /></span></i></p>
                <div className='flex flex-col gap-4 justify-end h-full'>
                  <p className='border-2 rounded-2xl bg-grey-900 text-gray-500 w-20 text-center'>Physical</p>
                  <p className='font-bold'>Front End Web Development (Virtual)</p>
                  <p className='font-medium text-gray-900'>Become a Front End Web Developer in 4 months</p>
                  <button onClick = {tofrontend} className='px-10 border-2 border-gray-50 text-shedared text-left font-medium flex justify-between rounded-2xl h-10 ps-2'>Learn more <i className='flex fa fa-arrow-right self-center'><span></span></i></button>
                </div>
              </div>
              <div className='skill-img-div w-full lg:w-[60%]'>
                <img className='w-full h-[30vh] md:h-[40vh] object-cover' src={CoursePicBGPurple} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div id='' className='flex flex-col gap-4 w-[90%] md:w-[70%] md:flex-row-reverse'>
          <div className='flex flex-col gap-10 md:w-1/2 justify-center'>
            <h1 className='text-2xl font-semibold'>Project based learning and hands on practical to build a portfolio of live projects </h1>
            <p className='font-normal text-gray-500 md:flex'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. </p>
            <p className='font-semibold text-xl md:flex'>Mr. Ben (UI/UX Mentor)</p>
          </div>
          
          <div className='flex flex-col gap-5 md:w-1/2'>
            <img src={uiux_mentor} alt="Mr Ben, UI/UX Mentor" className='md:h-[50vh] md:object-contain' />
            <p className='font-normal text-gray-500 md:hidden'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. </p>
            <p className='font-semibold text-xl md:hidden'>Mr. Ben (UI/UX Mentor)</p>
          </div>
        </div>

        <div id='review' className='flex flex-col gap-3 w-[90%] md:w-[70%]'>
          <h1 className='text-3xl font-semibold text-center'>Reviews</h1>
          <p className='text-center font-medium'>Hear what our previous students have to say</p>
          <div className='flex flex-col gap-6 md:flex-row lg:h-[50vh]'>
            <Review />
            <Review />
            <Review />
          </div>
        </div>

        <div id='faq' className='flex flex-col gap-10 w-[90%] mb-4 md:w-[70%]'>
          <h1 className='font-semibold text-3xl'>Frequently Asked Questions (FAQs)</h1>
          <div className='faq-groupset'>
            <div className='faq-group flex flex-col gap-10 items-center'>
                <FAQ />
                <FAQ />
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