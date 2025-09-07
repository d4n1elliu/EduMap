import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
//import './App.css'
import CourseQuestionnaire from './pages/CourseQuestionnaire';
import BuddySystem from './pages/BuddySystem';
import JobProspects from './pages/JobProspects';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Navbar/>
      <div className="pt-24 flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/course-questionnaire" element={<CourseQuestionnaire />} />
          <Route path="/buddy-system" element={<BuddySystem />} />
          <Route path="/job-prospects" element={<JobProspects />} />
        </Routes>
      </div>
    </>
  )
}

export default App
