import React, { useState } from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async"
import "../assets/styles/all.css"

import logo from "../assets/images/logo.svg"


const ForgotPassword = () => {
    const [firstpage, SetFirstpage] = useState(true)

    const togglepage = () => {
        SetFirstpage(!firstpage);
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

        <div id='redimage' className='flex flex-col gap-4 bg-shedared w-full pt-14 pb-24'>
            <div className='logo flex justify-center items-center w-full'>
                <img src={logo} alt="logo" />
                <a className='navbar-logo-tag flex text-white'><img className='navbar-logo' src="" alt="" />ACADEMY</a>
            </div>
            <div className='formdiv flex flex-col justify-center items-center w-full'>
                <form className='w-[90%] md:w-[75%] lg:w-1/2 bg-shedapagebg shadow rounded-xl flex flex-col items-center justify-center gap-6 pt-10 pb-5'>
                    <p className='font-semibold'>Sign in</p>
                    <p>Enter the email address you used to  create an account, and you will receive a link to reset your password.</p>
                    <div>
                        <p>Email Address</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        
                    </div>

                    <button className='text-white bg-shedared w-[15%] h-[2.5rem] rounded-xl'>Submit</button>
                    <a href="" className='text-shedared font-semibold underline'>Submit</a>
                    
                    
                </form>
            </div>
        </div>
    </HelmetProvider>
  )
}

export default ForgotPassword