//React import
import React from 'react'
import { useParams } from 'react-router-dom'

const CourseInfo = () => {
    const { course_name } = useParams()
  return (
    <div className='container'>
        <div>
            <h1>{ course_name }</h1>
            <div id='table-of-content'>
                <p>Overview</p>
                <p>Requirements</p>
                <p>Course Outline</p>
                <p>Pricing</p>
                <p>Take Test</p>
            </div>
        </div>

        <div>
            <div id='info'>
                <p>info</p>
                <div>
                    <p>After payment of the application fee, a short assessment will be taken and reviewed before proceeding to the application form.</p>
                </div>
            </div>
            

            <img src="" alt="" />

            <div>
                <p>About</p>
                <p>Html CSS (Project) Conditional Statements. Javascript PHP functions and control structures PHP loops, PHP arrays Introduction to MySQL and usage of XAMPP, CRUD</p>
            </div>
            <div id='requirements'>
                <p>Requirements</p>
                <ul>
                    <li>A laptop or a desktop</li>
                    <li>Access to internet and data</li>
                    <li>Commitment of at least 20 hours a week</li>
                </ul>
            </div>

            <div id='course-outline'>
                <h1>Course Outline</h1>
                <div>

                </div>
                <div>

                </div>
            </div>

            <div id='pricing'>
                <h1>Pricing</h1>
                <div>
                    <p>Installment</p>
                    <p><h1>₦60K</h1>/quarter (every 3 months)</p>
                </div>
                <div>
                    <p>One-off</p>
                    <p><h1>₦240K</h1>/1 Year</p>
                </div>
            </div>

            <div id='info'>
                <p>info</p>
                <div>
                    <p>After payment of the application fee, a short assessment will be taken and reviewed before proceeding to the application form.</p>
                </div>
            </div>


        </div>
    </div>
    
  )
}

export default CourseInfo