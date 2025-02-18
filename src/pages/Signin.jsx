import React, { useRef, useState } from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useNavigate } from 'react-router-dom'

import logo from "../assets/images/logo.svg"
import "../assets/styles/all.css"

import BGImg from "../assets/images/Sheda Academy - Sign in form.png"

import auth_api from '../utils/homepage/auth'

const Signin = () => {
    const navigate = useNavigate()
    const [firstpage, SetFirstpage] = useState(true)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const loginToDashboard = (event) => {
        event.preventDefault()
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
        if (/^\S*$/.test(emailRef.current.value) && /^\S*$/.test(passwordRef.current.value)){
            try {
                auth_api.post('login', {
                    "email": emailRef.current.value,
                    "password": passwordRef.current.value
                })
                .then((response) => {
                    console.log(response)
                    if (response.data["status"] === true){
                        if (response.data["data"]["applicant_id"]){
                            let applicant_id = response.data["data"]["applicant_id"]
                            localStorage.setItem('user', JSON.stringify({"applicant_id": applicant_id}))
                            navigate('/academy')
                        }
                    }
                })
            } catch (error) {
                
            }
        }
    }

  return (
    <HelmetProvider>
        <Helmet>
            <title></title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
            <link href="fontawesome-icons\css\all.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />


            <link rel="stylesheet" href="index.css" type="text/css" />
            <link rel="stylesheet" href="output.css" type="text/css" />

            <script src="landingpage.js"></script>
        </Helmet>

        <div id='redimage' className="flex flex-col gap-4 pt-14 pb-24 w-full h-[120vh] bg-sign_in_img bg-[length:100%_100%] bg-no-repeat bg-clip-border">
            <div className='logo flex justify-center items-center w-full'>
                <img src={logo} alt="logo" />
                <a className='navbar-logo-tag flex text-white' href='/'><img className='navbar-logo' src="" alt="" />ACADEMY</a>
            </div>
            <div className='formdiv flex flex-col justify-center items-center w-full'>
                <form onSubmit={loginToDashboard} className='w-[90%] md:w-[75%] lg:w-[40%] bg-shedapagebg shadow rounded-xl flex flex-col items-center justify-center gap-6 pt-10 pb-5 px-10'>
                    <p className='font-semibold w-full text-center'>Sign in</p>
                    <div className='w-full'>
                        <p>Email Address</p>
                        <input ref={emailRef} className='w-full shadow text-4xl bg-gray-100' type="email" required />
                        <p>Password</p>
                        <input ref={passwordRef} className='w-full shadow text-4xl bg-gray-100' type="password" required />
                    </div>

                    <button type='submit' className='text-white bg-shedared !w-fit px-2 h-[2.5rem] rounded-xl'>Login</button>
                    <a href="/forgotpassword" className='text-shedared font-semibold underline'>Forgot password</a>
                    
                    
                </form>
            </div>
        </div>
    </HelmetProvider>
  )
}

export default Signin