import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from "react-helmet-async";

// Components
import Assessments from '../components/homepage/Assessments';

// Icon
import logo from "../assets/images/logo.svg"

// API endpoints
import { programs_api } from '../utils/homepage/programs';

const AssessmentForm = () => {
    // URL logic and data
    const { program_code } = useParams()
    const navigate = useNavigate()

    const [assessmentQuestions, setAssessmentQuestions] = useState()
    const [assessments, setAssessments] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const [program_title, setProgram_title] = useState('')

    const getAssessmentQuestions = () => {
        programs_api.get('assessment.php', {
            params: {
                code: program_code
            }
        })
        .then((response) => {
            console.log(response, response.data["data"].length)
            if (response.data["status"] === true){
                let data = response.data["data"]
                console.log(data);
                setAssessmentQuestions(data)
            }
        })
    }

    const getCourseName = () => {
        programs_api.get('program.detail.php', {
            params: {
                code: program_code
            }
        })
        .then((response) => {
            setProgram_title(response.data["data"]["program_title"])
        })
    }

    const validateAllInputs = () => {
        let validated = false;
        for (let eachAssessmentQuestion in assessments){
            if ((assessments[eachAssessmentQuestion] === undefined) || (assessments[eachAssessmentQuestion].length < 1) || (assessments[eachAssessmentQuestion].trim().length < 1)){
                validated = false
                setErrorMessage("Kindly fill all assessment questions to proceed.")
                console.log(validated)
                return validated
            }
            else{
                validated = true
                console.log(validated)
                setErrorMessage("")
            }
        }
        if (validated === true){
            console.log(validated)
            return validated
        }
    }

    const goToApplicationForm = (event) => {
        event.preventDefault()
        
        let validated = validateAllInputs()
        console.log(validated)
        if (!validated){
            setErrorMessage("Kindly fill all assessment questions to proceed.")
        }
        else{
            // Save the assessment to locally storage first.
            let course_session_data = {program_code: program_code, program_title: program_title}
            sessionStorage.setItem('course_session_data', JSON.stringify(course_session_data))
            sessionStorage.setItem('assessmentform', JSON.stringify(assessments))
            navigate('/applicationform')
        }
    }


    useEffect(() => {
        window.scrollTo(0, 0)
        getCourseName()
        getAssessmentQuestions()
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
                <a className='navbar-logo-tag flex font-semibold'><img className='navbar-logo' src="" alt="" />ACADEMY</a>
            </div>
            <div className='formdiv flex flex-col justify-center items-center w-full'>
                <form onSubmit={goToApplicationForm} className='w-[90%] md:w-[75%] lg:w-1/2 bg-white shadow rounded-xl flex flex-col items-center justify-center gap-6 pt-10 pb-5'>
                    <p className="font-semibold">Assessment form</p>
                    <p className='text-shedared'>{errorMessage}</p>
                    <div className='flex flex-col gap-4 w-[90%]'>
                        {
                            assessmentQuestions?.map((assessmentQuestion, index) => (
                                <Assessments key={index} assessments={assessments} setAssessments={setAssessments} question={assessmentQuestion["question"]} setErrorMessage={setErrorMessage} />
                            ))
                        }

                        {/* 
                        <p>Hours available for study in a day</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <p>Tell us why you are choosing tech/art</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <p>Tell us why you are choosing sheda house</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <button className='flex justify-center items-center mt-4 self-end bg-shedared text-white rounded-xl w-24 h-10'>Submit</button>
                         */}
                    </div>
                    
                    <div className='flex justify-end w-[90%]'>
                        <button type="submit" className='text-white bg-shedared px-8 py-1 rounded-md'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </HelmetProvider>
  )
}

export default AssessmentForm