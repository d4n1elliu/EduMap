import React from "react";
import { NavLink } from "react-router-dom"; 

function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-slate-600 via-slate-500 via-orange-300 to-orange-400 text-white px-6 py-5 flex justify-between items-center fixed top-0 left-0 right-0 w-full h-24 shadow-md z-50"> 
        {/* Navbar Background Styling */}

            <h1 className="text-blue-400 text-3xl font-bold">
                <NavLink to="/">EduMap</NavLink>
            </h1>

            <ul className="flex space-x-10 text-white font-medium">

                <li>
                <NavLink to="/login"
                    className={({ isActive }) => isActive ? "text-white-400" : "hover:text-blue-400"}>
                    Login
                </NavLink>
                </li>

                <li>
                <NavLink to="/course-questionnaire"
                    className={({ isActive }) => isActive ? "text-white-400" : "hover:text-blue-400"}>
                    Course Questionnaire
                </NavLink>
                </li>

                <li>
                <NavLink to="/job-prospects"
                    className={({ isActive }) => isActive ? "text-white-400" : "hover:text-blue-400"}>
                    Job Prospects
                </NavLink>
                </li>

                <li>
                <NavLink to="/buddy-system"
                    className={({ isActive }) => isActive ? "text-white-400" : "hover:text-blue-400"}>
                    Buddy Program
                </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;