import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
//import './App.css'
import CourseQuestionnaire from './pages/CourseQuestionnaire';
import BuddySystem from './pages/BuddySystem';
import JobProspects from './pages/EventsAndNetworkingMap';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register";
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';

function App() {
  return (
    <>
      <Navbar/>
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/course-questionnaire" element={<CourseQuestionnaire />} />
          <Route path="/buddy-system" element={<BuddySystem />} />
          <Route path="/EventsAndNetworkingMap" element={<JobProspects />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </>
  )
}

export default App
