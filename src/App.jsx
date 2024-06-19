import { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

/* 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 */

import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (

    <Homepage />

  )
}

export default App
