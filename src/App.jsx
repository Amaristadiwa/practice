import React from 'react'
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Navbar from './pages/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        {/* <Route path='/contact' element={<Contact />}/> */}
      </Routes>
    </div>
  ) 
}

export default App