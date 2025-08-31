import React from "react";
import { NavLink } from "react-router-dom"; 

function Navbar() {
    return (
        <nav className="bg-orange-600 text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 w-full h-16 shadow-md z-50">

            <h1 className="text-blue-300 text-3xl font-bold">
                <NavLink to="/">EduMap</NavLink>
            </h1>

            <ul className="flex space-x-6 text-white font-medium">
                <li>
                    <NavLink to="/course-questionnaire"
                        className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-400"}>
                        Course Questionnaire
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/job-prospects"
                        className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-400"}>
                        Job Prospects
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/buddy-system"
                        className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-400"}>
                        Buddy Program
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;