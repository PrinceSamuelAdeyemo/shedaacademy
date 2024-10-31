import React, { useEffect, useRef, useState } from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async"

import logo from "../assets/images/logo.svg"

import { base_URL } from '../utils/base_api'
import { programs_api } from '../utils/homepage/programs'

const ApplicationForm = () => {
    const [firstpage, SetFirstpage] = useState(true)
    const [programDetails, setProgramDetails] = useState({})

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const middleNameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneNumberRef = useRef(null)
    const residentialStateRef = useRef(null)
    const originStateRef = useRef(null)
    const higherCertificateRef = useRef(null)
    const schoolObtainedRef = useRef(null)
    const programTypeRef = useRef(null)
    const programRef = useRef(null)
    const durationRef = useRef(null)
    const feeRef  = useRef(null)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [residentialState, setResidentialState] = useState('')
    const [originState, setOriginState] = useState('')
    const [higherCertificate, setHigherCertificate] = useState('')
    const [schoolObtained, setSchoolObtained] = useState('')
    const [programType, setProgramType] = useState('')
    const [program, setProgram] = useState('')
    const [duration, setDuration] = useState('')
    const [fee, setFee] = useState('')

    const togglePage = () => {
        SetFirstpage(!firstpage);
    }
    
    const getProgramDetails = () => {
        programs_api.get('program.detail.php', {
            params: {
                code: JSON.parse(sessionStorage.course_session_data)["program_code"],
            }
        })
        .then((response) => {
            console.log(response)
            setProgramDetails(response.data["data"])
        })
    }

    const applyForCourse = () => {
        event.preventDefault()
        base_URL.post('auth/application.signup.php', {
            "email": "",
            "program_code": JSON.parse(sessionStorage.course_session_data)["program_code"],
            "program": JSON.parse(sessionStorage.course_session_data)["program_title"],
            "first_name": "",
            "last_name": "",
            "middle_name": "",
            "phone_number": "",
            "date_birth": "",
            "state_origin": "",
            "state_residence": "",
            "highest_degree": "",
            "assessment_answers": JSON.parse(sessionStorage.assessmentform)
        })
    }

    useEffect(() => {
        window.scroll(0,0)
        console.log(sessionStorage.course_session_data)
        getProgramDetails()
        console.log(programDetails)
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

        <div className='flex flex-col gap-4 bg-shedapagebg w-full pt-14 pb-24'>
            <div className='logo flex justify-center items-center w-full'>
                <img src={logo} alt="logo" />
                <a className='navbar-logo-tag flex font-semibold' href='/'><img className='navbar-logo' src="" alt="" />ACADEMY</a>
            </div>
            <div className='formdiv flex flex-col justify-center items-center w-full'>
                <form onSubmit={applyForCourse} className='w-[90%] md:w-[75%] lg:w-1/2 bg-white shadow rounded-xl flex flex-col items-center justify-center gap-6 pt-10 pb-5'>
                    <p>Application form</p>
                    {firstpage ?
                    <div className={`${firstpage ? 'flex' : 'hidden'} flex-col gap-4 w-[90%]`}>
                        <label htmlFor='first_name'>First Name</label>
                        <input id='first_name' ref={firstNameRef} value={firstName} onChange={(e) => setFirstName(firstNameRef.current.value)} className='w-full shadow text-4xl bg-gray-100' type="text" required />
                        <label htmlFor='last_name'>Last Name</label>
                        <input id='last_name' ref={lastNameRef} value={lastName} onChange={(e) => setLastName(lastNameRef.current.value)} className='w-full shadow text-4xl bg-gray-100' type="text" required />
                        <label htmlFor='middle_name'>Middle Name</label>
                        <input id='middle_name' ref={middleNameRef} className='w-full shadow text-4xl bg-gray-100' type="text" required />
                        <label htmlFor='email'>Email Address</label>
                        <input id='email' ref={emailRef} value={email} onChange={(e) => setEmail(emailRef.current.value)} className='w-full shadow text-4xl bg-gray-100' type="email" required />
                        <label htmlFor='phone_number'>Phone Number</label>
                        <input id='phone_number' ref={phoneNumberRef} value={phoneNumber} onChange={(e) => setPhoneNumber(phoneNumberRef.current.value)} className='w-full shadow text-4xl bg-gray-100' type="text" required />
                        <label htmlFor='residential_state'>State of residence</label>
                        <input id='residential_state' ref={residentialStateRef} value={residentialState} onChange={(e) => setResidentialState(residentialStateRef.current.value)} className='w-full shadow text-4xl bg-gray-100' type="text" required />
                        <label htmlFor='origin_state'>State of origin</label>
                        <input id='origin_state' ref={originStateRef} value={originState} onChange={(e) => setOriginState(originStateRef.current.value)} className='w-full shadow text-4xl bg-gray-100' type="text" required />
                        <div className='flex gap-4'>
                            <input className='w-full shadow text-4xl bg-gray-100' type="text" placeholder='V' />
                            <input className='w-full shadow text-4xl bg-gray-100' type="text" placeholder='V' />
                            <input className='w-full shadow text-4xl bg-gray-100' type="text" placeholder='V' />
                        </div>

                        <div className='w-full flex justify-between items-center'>
                            <p>Page 1 of 2</p>
                            <div className=' rounded-xl w-6 h-2 bg-shedared'></div>
                            <button type='button' onClick={togglePage} className='mt-4 bg-shedared text-white rounded-xl w-24 h-10'>Next</button>
                        </div>
                        
                    </div> 
                     : 
                     <div className={`${firstpage ? 'hidden' : 'flex'} flex-col gap-4 w-[90%]`}>
                        <label htmlFor='higher_certificate'>Higher certificate/degree</label>
                        <input id='higher_certificate' ref={higherCertificateRef} value={higherCertificate} onChange={(e) => setHigherCertificate(higherCertificateRef.current.value)} className='w-full shadow text-4xl bg-gray-100' type="text" required />
                        <label htmlFor='school_obtained'>School obtained</label>
                        <input id='school_obtained' ref={schoolObtainedRef} value={schoolObtained} onChange={(e) => setSchoolObtained(schoolObtainedRef.current.value)} className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <label htmlFor='program_type'>Program type</label>
                        <input id='program_type' ref={programTypeRef} value={programType} onChange={(e) => setProgramType(programTypeRef.current.value)} className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <label htmlFor='program'>Program</label>
                        <input id='program' ref={programRef} value={JSON.parse(sessionStorage.course_session_data)["program_title"]} className='w-full shadow text-4xl bg-gray-100' type="text" readOnly />
                        <label htmlFor='duration'>Duration</label>
                        <input id='duration' ref={durationRef} value={programDetails["duration"]} className='w-full shadow text-4xl bg-gray-100' type="text" readOnly />
                        <label htmlFor='fee'>Fee</label>
                        <input id='fee' ref={feeRef} value={programDetails["price"]} className='w-full shadow text-4xl bg-gray-100' type="text" readOnly />
                        
                        <div className='w-full flex justify-between items-center'>
                            <p>Page 2 of 2</p>
                            <div className=' rounded-xl w-6 h-2 bg-shedared'></div>
                            <div className='flex gap-4'>
                                <button type='button' onClick={togglePage} className='mt-4 bg-shedared text-white rounded-xl w-24 h-10'>Previous</button>
                                <button type='submit' className='mt-4 bg-shedared text-white rounded-xl w-24 h-10'>Submit</button>
                            </div>
                            
                        </div>
                        
                    </div> 
                     }
                    
                    
                </form>
            </div>
        </div>
    </HelmetProvider>
  )
}

export default ApplicationForm