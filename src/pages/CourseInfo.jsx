//React import
import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

//Pages
import Conclusion from '../components/Conclusion'
import Info from '../components/Info'

//Images
import CourseinfoVid from "../assets/images/Frame 103.svg"
import Course_Courselist from '../components/Course_Courselist'

const CourseInfo = () => {
    const { course_name } = useParams()
  return (
  
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

        <div className='w-screen flex flex-col gap-10 justify-center items-center bg-shedapagebg overflow-x-hidden pt-16 pb-10 md:gap-14 lg:gap-10 lg:flex-row'>
            <div className='flex flex-col gap-4 w-[25%] justify-center items-center justify-self-start self-start'>
                <div className='flex flex-col gap-4 w-[70%] md:w-[30%]'>
                    <h1 className='w-3/4 font-semibold text-3xl'>{ course_name }</h1>
                    <div id='table-of-content' className='flex flex-col gap-6'>
                        <p className='font-medium text-2xl'>Overview</p>
                        <ul className='flex flex-col gap-4 font-medium text-gray-500'>
                            <li>Requirements</li>
                            <li>Course Outline</li>
                            <li>Pricing</li>
                            <li>Take Test</li>
                        </ul>
                        
                    </div>
                </div>
            </div>

            <div className='flex justify-center w-full'>
                <div className='flex flex-col gap-10 lg:gap-20 w-[85%]'>
                    
                    <Info />

                    <img src={CourseinfoVid} alt="Video of sheda house" />

                    <div>
                        <p className='font-medium text-2xl'>About</p>
                        <p>Html CSS (Project) Conditional Statements. Javascript PHP functions and control structures PHP loops, PHP arrays Introduction to MySQL and usage of XAMPP, CRUD</p>
                    </div>
                    <div id='requirements' className=''>
                        <p className='font-medium text-2xl'>Requirements</p>
                        <ul className='list-disc list-inside'>
                            <li>A laptop or a desktop</li>
                            <li>Access to internet and data</li>
                            <li>Commitment of at least 20 hours a week</li>
                        </ul>
                    </div>

                    <div id='course-outline' className='flex flex-col gap-10'>
                        <h1 className='font-medium text-2xl'>Course Outline</h1>
                        <Course_Courselist />
                        <Course_Courselist />
                        <Course_Courselist />
                    </div>

                    <div id='pricing' className='flex flex-col gap-4'>
                        <h1 className='font-medium text-2xl'>Pricing</h1>
                        <div className='w-full text-center flex flex-col gap-3 justify-center items-center py-4 bg-white rounded-2xl'>
                            <p className='font-medium text-[1rem] text-shedagray'>Installment</p>
                            <div className='flex justify-center w-[90%] bg-red-500'>
                                <h1 className='font-bold text-5xl'>₦60K</h1>
                                <div className='flex flex-col justify-end p-0'>
                                    <p className='w-full m-0 text-sheda-gray font-semibold text-[0.9rem]'>/quarter (every 3 months)</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className='w-full text-center flex flex-col gap-3 justify-center items-center py-4 bg-white rounded-2xl'>
                            <p className='font-medium text-[1rem] text-shedagray'>One-off</p>
                            <div className='flex justify-center w-[90%] bg-red-500'>
                                <h1 className='font-bold text-5xl'>₦240K</h1>
                                <div className='flex flex-col justify-end p-0'>
                                    <p className='w-full m-0 text-sheda-gray font-semibold text-[0.9rem]'>/1 Year</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <Info />
                    <Conclusion />

                </div>
            </div>
            
 
        </div>
    </HelmetProvider>

    
    
  )
}

export default CourseInfo