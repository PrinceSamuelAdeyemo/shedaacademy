//React imports
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"

//Components
import Navbar from './components/Navbar';
import Conclusion from './components/Conclusion';

//Pages
import Homepage from './pages/Homepage'
import CourseInfo from './pages/CourseInfo'
import AboutUS from './pages/AboutUS';
import AssessmentForm from './pages/AssessmentForm';
import ApplicationForm from './pages/ApplicationForm';
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import ApplicationSuccess from './pages/ApplicationSuccess';

import AdminHomePage from './layouts/AdminHomePage';
import AcademyHome from './pages/AcademyHome';
import Notifications from './pages/Notifications';
import Students from './pages/Students';
import AdminStudentView from './pages/AdminStudentView';
import AdminApplicantView from './pages/AdminApplicantView';
import Programs from './pages/Programs'
import Applicants from './pages/Applicants';
import Instructors from './pages/Instructors';
import AddNewProgram from './pages/AddNewProgram';
import Settings from './pages/Settings';

//Styling
import "../src/assets/styles/all.css"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/homepage' element={<Homepage />} />
          <Route path='/course/:course_code/:course_name' element={<CourseInfo />} />
          <Route path='/aboutus' element={<AboutUS />} />
          <Route path='/:program_code/assessmentform' element={<AssessmentForm />} />
          <Route path='/applicationform' element={<ApplicationForm />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/applicationsuccessful' element={<ApplicationSuccess />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
        </Route>
       
        <Route path='/home' element={<AdminHomePage />} >
         <Route path='/home' element={<AcademyHome />} />
         <Route path='/home/notifications' element={<Notifications />} />
         <Route path='/home/students' element={<Students />} />
         <Route path='/home/studentview/:student_id' element={<AdminStudentView />} />
         <Route path='/home/programs' element={<Programs />} />
         <Route path='/home/applicants' element={<Applicants />} />
         <Route path='/home/applicantview/:applicant_id' element={<AdminApplicantView />} />
         <Route path='/home/newprogram' element={<AddNewProgram />} />
         <Route path='/home/instructors' element={<Instructors />} />
         <Route path='/home/settings' element={<Settings />} />
        </Route>
      </Routes>
    </Router>
    

  )
}

export default App
