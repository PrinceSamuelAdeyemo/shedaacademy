import React, { useState } from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async"
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

import logo from "../assets/images/logo.svg"
import correct from "../assets/images/Frame 129.png"

const ApplicationSuccess = () => {
    const navigate = useNavigate()
    const [firstpage, SetFirstpage] = useState(true)

    const togglepage = () => {
        SetFirstpage(!firstpage);
    }

    const toHome = () => {
        navigate("/")
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

        <div className='flex flex-col gap-4 bg-shedapagebg w-full pt-14 pb-24'>
            <div className='logo flex justify-center items-center w-full'>
                <img src={logo} alt="logo" />
                <a className='navbar-logo-tag flex font-semibold'><img className='navbar-logo' src="" alt="" />ACADEMY</a>
            </div>
            <div className='formdiv flex flex-col justify-center items-center w-full'>
                <div className='w-[90%] md:w-[75%] lg:w-1/2 bg-white shadow rounded-xl flex flex-col items-center justify-center gap-6 pt-10 pb-5'>
                    <p className='font-semibold'>Academy Application</p>
                    <img src={correct} alt="" />
                    <p className='font-semibold text-shedared'>Application Received</p>
                    <div className='flex gap-1'>
                        <div className='w-3 h-3 rounded-[50%] bg-shedared'></div>
                        <div className='w-3 h-3 rounded-[50%] bg-shedared'></div>
                    </div>
                    <button className='bg-shedared text-white font-semibold w-[8rem] h-[2rem] rounded-xl'>Back to Home</button>
                </div>
                
            </div>
        </div>
    </HelmetProvider>
  )
}

export default ApplicationSuccess