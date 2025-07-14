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
import Location  from './pages/Location';
import GuestCount from './pages/GuestCount'
import Theme from './pages/Theme'
import Budget from './pages/Budget'
import PlanSummary from './pages/PlanningSummary'
import Vendors from './pages/Vendors'
import MessagePage from './pages/MessagePage'
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
            <Route path="/start/location" element={<Location />} />
            <Route path="/start/guest-count" element={<GuestCount />} />
            <Route path="/start/theme" element={<Theme/>} />
            <Route path="/start/budget" element={<Budget/>} />
                <Route path="/planning-summary" element={<PlanSummary />} />
                <Route path="/vendors" element={<Vendors/>} /> 
                <Route path="/message" element={<MessagePage />} />

        <Route path='/services' element={<Services />}/>
    
      </Routes>
    </div>
  ) 
}

export default App