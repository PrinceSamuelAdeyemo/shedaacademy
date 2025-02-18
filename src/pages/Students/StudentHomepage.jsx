import React, { useEffect, useRef, useState } from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async"

import logo from '../../assets/images/logo.svg'
import { FaEye, FaPen } from 'react-icons/fa'

import StudentCourseInfo from '../../components/StudentCourseInfo'

import profile_api from '../../utils/students/profile'
import { programs_api } from '../../utils/homepage/programs'

const StudentHomepage = () => {
    const user_session = localStorage.getItem('user')
    const [applicantInfo, setApplicantInfo] = useState()
    const [programs, setPrograms] = useState([])
    
    const applicantProfile = () => {
        try {
            profile_api.get('aprofile.php', {
                params: {
                    applicant_id: JSON.parse(user_session)["applicant_id"]
                }
            })
            .then((response) => {
                if (response.data["status"] === true){
                    for (let i = 0; i < response.data["data"].length; i++){
                        getCourse(response.data["data"][i]["program_code"])
                    }
                    setApplicantInfo(response.data["data"])
                }
            })
        } catch (error) {
            
        }
    }

    const getCourse = (course_code) => {
        console.log(course_code)
        try {
            programs_api.get('program.detail', {
                params: {
                    code: course_code
                }
            })
            .then((response) => {
                console.log(response)
                if (response.data["status"] === true){
                    console.log(response)
                    setPrograms(response.data["data"])
                }
                console.log(programs.length)
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        applicantProfile()
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

        <div className='flex flex-col items-center gap-4 bg-shedapagebg w-full min-h-screen'>
            <div className='logo flex justify-center items-center w-full h-[20vh]'>
                <img src={logo} alt="logo" />
                <a className='navbar-logo-tag flex font-bold text-shedared' href='/'><img className='navbar-logo' src="" alt="" /><p className='text-2xl'>ACADEMY</p></a>
            </div>

            <div className='flex flex-col justify-center items-center w-[80%] '>
                <div className='flex flex-col lg:flex-row px-3 py-4 gap-5 border-[1px] rounded-lg mb-4 w-full bg-white'>
                    <div className='rounded-full opacity-20 w-32 h-32 bg-shedagray'>
                    </div>
                    <div className='flex flex-col gap-6'>
                        {
                            applicantInfo?
                            <p className='text-[2rem] font-semibold pt-2'>{applicantInfo[0]["first_name"]} {applicantInfo[0]["last_name"]}</p>
                            :
                            <p></p>
                        }
                        
                        <div className='flex flex-col lg:flex-row gap-8'>
                            <div className='flex flex-col lg:flex-row gap-3'>
                                <p className='text-shedagray'>Application ID:</p>
                                <p className='text-black font-semibold'>{JSON.parse(user_session)["applicant_id"]}</p>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-3'>
                                <p className='text-shedagray'>Date of application:</p>
                                <p className='text-black font-semibold'>18th January - 18th June <span className='text-shedagray'>(6 months)</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-full'>
                    <p className='font-bold lg:px-4'>Applied Course</p>
                    <div className='flex gap-2 md:gap-4 lg:gap-6 xl:gap-8 border-[1px] rounded-lg p-1 mb-4'>
                        <div className='lg:w-[20%] bg-shedared'>

                        </div>
                        <div className='flex flex-col lg:flex-row px-3 py-2 w-full'>
                            <div className='flex flex-col gap-3 justify-between w-full'>
                                <p className='text-lg font-semibold'>{programs["program_title"]}</p>
                                <div className='flex items-center gap-3'>
                                    <p className='text-shedagray'>Price:</p>
                                    <p className='font-semibold text-lg'>{programs["price"]}</p>
                                    <div className='flex gap-1 items-center bg-shedalightblue rounded-xl px-1'>
                                        <div className='w-2 h-2 rounded-full bg-shedadeepblue'></div>
                                        <p className='text-shedagray text-sm'>{programs["payment_type"]} Payment</p>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <p className='text-shedagray'>Duration:</p>
                                    <p className='font-semibold'>{programs["duration"]}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <p className='text-shedagray'>Instructors:</p>
                                    <p className='font-semibold'>^Chibuke, Chibuke^</p>
                                </div>
                                <div className='flex gap-3'>
                                    <p className='text-shedagray'>Status:</p>
                                    <p className='font-semibold'>Applicant</p>
                                </div>
                            </div>
                                <div className='flex flex-col gap-3 justify-between items-end lg:w-[20%] h-full'>
                                    <div className='flex flex-col gap-2 items-end'>
                                        <p className='flex gap-2 items-center text-shedagray'><FaEye /> View Assessment</p>
                                    </div>
                                </div>
                                
                            
                            
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </HelmetProvider>
  )
}

export default StudentHomepage