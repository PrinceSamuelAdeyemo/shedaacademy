//React imports
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"

//Components
import Navbar from './components/Navbar';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';

//Pages
import Homepage from './pages/Homepage'
import CourseInfo from './pages/CourseInfo'
import AboutUS from './pages/AboutUS';

//Styling
import "../src/assets/styles/all.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/homepage' element={<Homepage />} />
        <Route path='/course/:course_name' element={<CourseInfo />} />
        <Route path='/aboutus' element={<AboutUS />} />
      </Routes>
      {/* <Conclusion /> */}
      <Footer />
    </Router>
    

  )
}

export default App
