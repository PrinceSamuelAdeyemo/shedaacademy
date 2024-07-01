import React from 'react'
import Course_Subcourse from './Course_Subcourse'

const Course_Courselist = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div id='course-title' className='flex'>
            <div className='flex gap-2 items-center w-11/12'>
                <div className='w-5 h-5 rounded-full bg-shedagray'></div>
                <p>Introduction to HTML and CSS</p>
            </div>
            <div className='w-1/12'>
                <p>^</p>
            </div>
        </div>

        <div className='bg-shedagray h-[1px]'></div>

        <div id='course-subtitle' className='flex flex-col justify-center items-center gap-2'>
            <Course_Subcourse sub_coursename = "What is HTML"/>
            <Course_Subcourse sub_coursename = "HTML Tags"/>
        </div>
        
        
        
    </div>
  )
}

export default Course_Courselist