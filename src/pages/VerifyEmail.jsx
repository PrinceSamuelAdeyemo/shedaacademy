import React, { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from "react-helmet-async"
import "../assets/styles/all.css"

import logo from "../assets/images/logo.svg"

import auth_api from '../utils/homepage/auth';


const VerifyEmail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id')
    const otp = queryParams.get('otp')

    const [errorMessage, setErrorMessage] = useState('')

    const password1Ref = useRef(null)
    const password2Ref = useRef(null)

    const proceedToDashboard = (event) => {
        event.preventDefault();
        let filled = true
        let passwordInputArray =  [password1Ref.current.value, password2Ref.current.value]
        for (let i = 0; i < passwordInputArray.length; i++){
            if (/^\S*$/.test(passwordInputArray[i])){
            }
            else{
                filled = false
            }
        }
        if (filled === true){
            try {
                auth_api.post('verify.email.password.php', {
                    "application_id": id,
                    "OTP": otp,
                    "password": password1Ref.current.value,
                    "confirm_password": password2Ref.current.value
                })
                .then((response) => {
                    
                    if (response.data['status'] === false && response.data["message"] == "Password do not match"){
                        setErrorMessage("Passwords do not match, kindly retry.")
                        password1Ref.current.value = ''
                        password2Ref.current.value = ''
                    }
                    else if (response.data['status'] === false){
                        setErrorMessage("Passwords do not match the required conditions")
                    }
                    else if (response.data['status'] === true){
                        setErrorMessage("")
                        navigate('/login')
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
                <form onSubmit={proceedToDashboard} className='w-[90%] md:w-[75%] lg:w-[40%] bg-shedapagebg shadow rounded-xl flex flex-col items-center justify-center gap-6 pt-10 pb-5 px-10'>
                    <p className='font-semibold'>Set New Password</p>
                    <p>Proceed with your account setup by setting a new password.</p>
                    <div className="w-full">
                        <p><span className='text-shedared me-2'>*</span>Password must match</p>
                        <p><span className='text-shedared me-2'>*</span>Password must be at least 8 characters</p>
                        <p><span className='text-shedared me-2'>*</span>Password must contain at least 1 number</p>
                        <p><span className='text-shedared me-2'>*</span>Password must contain at least 1 special character</p>
                    </div>
                    <p>{errorMessage}</p>
                    <div className='w-full'>
                        <p>Password</p>
                        <input ref={password1Ref} className='w-full shadow text-4xl bg-gray-100' type="text" />
                    </div>
                    <div className='w-full'>
                        <p>Confirm Password</p>
                        <input ref={password2Ref} className='w-full shadow text-4xl bg-gray-100' type="text" />
                    </div>

                    <button type="submit" className='text-white bg-shedared w-[15%] h-[2.5rem] rounded-xl'>Submit</button>
                    
                </form>
            </div>
        </div>
    </HelmetProvider>
  )
}

export default VerifyEmail