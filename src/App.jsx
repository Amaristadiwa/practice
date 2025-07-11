import React from 'react'
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Navbar from './pages/Navbar'
import './index.css'
import StartPlanning from './pages/StartPlanning';
import ChooseYourRole from './pages/ChooseYourRole';
import CoupleNames from "./pages/CouplesName";
import WeddingDate from './pages/WeddingDate';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/start-planning' element={<StartPlanning />}/>
         <Route path="/choose-role" element={<ChooseYourRole />} />
           <Route path="/start/couple-names" element={<CoupleNames />} />
                 <Route path="/start/wedding-date" element={<WeddingDate />} />

        <Route path='/services' element={<Services />}/>
    
      </Routes>
    </div>
  ) 
}

export default App