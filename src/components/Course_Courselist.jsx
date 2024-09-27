import React, { useState } from 'react'
import Course_Subcourse from './Course_Subcourse'

const Course_Courselist = () => {

    const [courseopen, SetCourseOpen] = useState(false);

    var toggleCourse = () => {
        SetCourseOpen(!courseopen);
    }
  return (
    <div className='flex flex-col gap-2'>
        <div id='course-title' className='flex'>
            <div onClick={toggleCourse} className='flex gap-2 items-center w-[95%]'>
                <div className='w-5 h-5 rounded-full bg-shedagray'></div>
                <p>Introduction to HTML and CSS</p>
            </div>
            <div>
                <div className={courseopen? 'w-4 bg-shedagray h-1 faqva3': 'w-4 bg-shedagray h-1 faqva1'}></div>
                <div className={courseopen? 'w-4 bg-shedagray h-1 faqva4': 'w-4 bg-shedagray h-1 faqva2'}></div>
            </div>
        </div>

        <div className='bg-shedagray h-[1px]'></div>

        <div id='course-subtitle' className={courseopen? 'flex flex-col justify-center items-center gap-2': "hidden"}>
            <Course_Subcourse sub_coursename = "What is HTML"/>
            <Course_Subcourse sub_coursename = "HTML Tags"/>
        </div>
        
        
        
    </div>
  )
}

export default Course_Courselist