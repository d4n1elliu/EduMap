import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
//import './App.css'
import CourseQuestionnaire from './pages/CourseQuestionnaire';
import BuddySystem from './pages/BuddySystem';
import JobProspects from './pages/JobProspects';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar/>
      <div className="pt-24 flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course-questionnaire" element={<CourseQuestionnaire />} />
          <Route path="/buddy-system" element={<BuddySystem />} />
          <Route path="/job-prospects" element={<JobProspects />} />
        </Routes>
      </div>
    </>
  )
}

export default App
