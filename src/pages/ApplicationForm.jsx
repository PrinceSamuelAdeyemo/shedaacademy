import React, { useState } from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async"

import logo from "../assets/images/logo.svg"


const ApplicationForm = () => {
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

        <div className='flex flex-col gap-4 bg-shedapagebg w-full pt-14 pb-24'>
            <div className='logo flex justify-center items-center w-full'>
                <img src={logo} alt="logo" />
                <a className='navbar-logo-tag flex'><img className='navbar-logo' src="" alt="" />ACADEMY</a>
            </div>
            <div className='formdiv flex flex-col justify-center items-center w-full'>
                <form className='w-[90%] md:w-[75%] lg:w-1/2 bg-white shadow rounded-xl flex flex-col items-center justify-center gap-6 pt-10 pb-5'>
                    <p>Assessement form</p>
                    {firstpage ?
                    <div className='flex flex-col gap-4 w-[90%]'>
                        <p>First Name</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <p>Last Name</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <p>Middle Name</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <p>Email Address</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="email" />
                        <p>Phone Number</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <p>State of residence</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <p>State of origin</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <div className='flex gap-4'>
                            <input className='w-full shadow text-4xl bg-gray-100' type="text" placeholder='V' />
                            <input className='w-full shadow text-4xl bg-gray-100' type="text" placeholder='V' />
                            <input className='w-full shadow text-4xl bg-gray-100' type="text" placeholder='V' />
                        </div>

                        <div className='w-full flex justify-between items-center'>
                            <p>Page 1 of 2</p>
                            <div className=' rounded-xl w-6 h-2 bg-shedared'></div>
                            <button onClick={togglepage} className='mt-4 bg-shedared text-white rounded-xl w-24 h-10'>Next</button>
                        </div>
                        
                    </div> 
                     : 
                     <div className='flex flex-col gap-4 w-[90%]'>
                        <p>Higher certificate/degree</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <p>School obtained</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <p>Program type</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <p>Program</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <p>Duration</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        <p>Fee</p>
                        <input className='w-full shadow text-4xl bg-gray-100' type="text" />
                        
                        <div className='w-full flex justify-between items-center'>
                            <p>Page 2 of 2</p>
                            <div className=' rounded-xl w-6 h-2 bg-shedared'></div>
                            <button className='mt-4 bg-shedared text-white rounded-xl w-24 h-10'>Submit</button>
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