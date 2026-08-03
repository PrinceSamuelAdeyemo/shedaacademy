import React, { useRef, useState } from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useLocation, useNavigate } from 'react-router-dom'

import "../assets/styles/all.css"

import auth_api from '../utils/homepage/auth'
import logo from "../assets/images/logo.svg"


const SetPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    const email = location.state?.email;
    const otpRef = useRef(null);
    const password1Ref = useRef(null);
    const password2Ref = useRef(null);

    const resetPassword = (event) => {
        event.preventDefault();
        if (password1Ref.current.value !== password2Ref.current.value){
            setErrorMessage("Password does not match!")
        }
        else{
            setErrorMessage("")
            auth_api.post('reset.password.callback.php', {
                'email': email,
                'OTP': otpRef.current.value,
                'password': password1Ref.current.value,
                'confirm_password': password2Ref.current.value
            })
            .then((response) => {
                if (response.data["status"] === true){
                    setErrorMessage("Redirecting to login page")
                    navigate('/login');
                }
                else{
                    setErrorMessage("An error occurred")
                }
            })
        }
    }

    const requestOTP = () => {
        auth_api.post('reset.password.php', {
            email
        })
        .then((response) => {
            if (response.data["status"] === true){
                setErrorMessage("An OTP has been sent to your email address, kindly check while we redirect you to the next page....")
            }
            else{
                setErrorMessage("An error occurred!")
            }
        })
    }

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

        <div id='redimage' className='flex flex-col gap-4 w-full pt-14 pb-24 h-[120vh] bg-sign_in_img bg-[length:100%_100%] bg-no-repeat bg-clip-border'>
            <div className='logo flex justify-center items-center w-full'>
                <img src={logo} alt="logo" />
                <a className='navbar-logo-tag flex text-white' href='/'><img className='navbar-logo' src="" alt="" />ACADEMY</a>
            </div>
            <div className='formdiv flex flex-col justify-center items-center w-full'>
                <form method='POST' onSubmit={resetPassword} className='w-[90%] md:w-[75%] lg:w-[40%] bg-shedapagebg shadow rounded-xl flex flex-col items-center justify-center gap-6 pt-10 pb-5 px-10'>
                    <p className='font-semibold'>Set New Password</p>
                    <p>{errorMessage}</p>
                    <p>Enter the otp received in your email address, and proceed to setting your new password.</p>
                    <div className='flex flex-col gap-4 w-full'>
                        <input className='w-full shadow text-2xl bg-gray-100' type="text" value={email} />
                        <input ref={otpRef} className='w-full shadow text-2xl bg-gray-100' type="text" placeholder='OTP' required />
                        <input ref={password1Ref} className='w-full shadow text-2xl bg-gray-100' type="text" placeholder='Enter Password' required />
                        <input ref={password2Ref} className='w-full shadow text-2xl bg-gray-100' type="text" placeholder='Confirm New Password' required />
                    </div>

                    <button className='text-white bg-shedared w-[15%] h-[2.5rem] rounded-xl'>Submit</button>
                    <button onClick={requestOTP} type='button' className='outline-none border-none underline'>Request for a new OTP</button>
                    
                    
                </form>
            </div>
        </div>
    </HelmetProvider>
  )
}

export default SetPassword