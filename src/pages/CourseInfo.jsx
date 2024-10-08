//React import
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

//Pages
import Conclusion from '../components/Conclusion'
import Info from '../components/Info'

//Images
import CourseinfoVid from "../assets/images/Frame 103.svg"
import Course_Courselist from '../components/Course_Courselist'

// API Endpoints
import { base_URL } from '../utils/base_api'
import { programs_api } from '../utils/homepage/programs'

const CourseInfo = () => {
    const navigate = useNavigate()
    const { course_name } = useParams()
    const { course_code } = useParams()
    const [ programDetails, setProgramDetails ] = useState()


    const getProgramDetails = () => {
        programs_api.get('program.detail.php', {
            params: {
                code: `${course_code}`
            }
        })
        .then(response => {
            if (response.data["status"] === true){
                let data = response.data["data"]
                setProgramDetails(data)
                console.log(data)
            }
            
        })
    }

    useEffect(() => {
        getProgramDetails()
    }, [])

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
                    <h1 className='w-3/4 font-semibold text-3xl'>{programDetails?`${programDetails.program_title}` :'' }</h1>
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
                    {
                        programDetails ?
                         <img src={`${base_URL}${programDetails.cover_image}`} alt={`${programDetails.program_title} cover image`} /> 
                        :
                        <img src={CourseinfoVid} alt='Picture of Sheda House' />
                    }
                    

                    <div>
                        <p className='font-medium text-2xl'>About</p>
                        <p>{programDetails?`${programDetails.description}` :'' }</p>
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
                            <div className='flex justify-center w-[90%]'>
                                {
                                    (programDetails && programDetails.payment_type == "Installment" ) ? 
                                    <h1 className='font-bold text-5xl'>{programDetails?`${programDetails.price}` :'' }</h1>
                                    :
                                    <h1></h1>
                                }
                                
                                <div className='flex flex-col justify-end p-0'>
                                    <p className='w-full m-0 text-sheda-gray font-semibold text-[0.9rem]'>/twice</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className='w-full text-center flex flex-col gap-3 justify-center items-center py-4 bg-white rounded-2xl'>
                            <p className='font-medium text-[1rem] text-shedagray'>One-off</p>
                            <div className='flex justify-center w-[90%] '>
                                {
                                    (programDetails && programDetails.payment_type == "Full" ) ? 
                                    <h1 className='font-bold text-5xl'>{programDetails?`${programDetails.price}` :'' }</h1>
                                    :
                                    <h1></h1>
                                }
                                <div className='flex flex-col justify-end p-0'>
                                    <p className='w-full m-0 text-sheda-gray font-semibold text-[0.9rem]'>/{programDetails?`${programDetails.duration}` :'' }</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <Info />
                    <Conclusion program_code={course_code} />

                </div>
            </div>
            
 
        </div>
    </HelmetProvider>

    
    
  )
}

export default CourseInfo