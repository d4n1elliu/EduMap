{/* import React from "react";*/}

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import EduMapLogo from "./assets/EduMap Logo 300dpi.png"; 

function Navbar() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
        window.location.reload();
    };
    return (
        <nav className="bg-gradient-to-r from-slate-600 via-slate-500 via-orange-300 to-orange-400 text-white px-6 py-5 flex justify-between items-center fixed top-0 left-0 right-0 w-full h-24 z-50"> 
        {/* Main navigation <div> container: fixed at the top, gradient background*/}

            <div className="flex items-center space-x-3">
                <img 
                    src={EduMapLogo} 
                    alt="EduMap Logo" 
                    className="h-15 w-auto object-contain"
                />
                <h1 className="text-blue-400 text-2xl font-bold">
                    <NavLink to="/">EduMap</NavLink>
                </h1>
            </div>

            {/* Navigation bar appears when User IS LOGGED/SIGNED IN Functionality*/}
            {token ? (
                <ul className="flex items-center space-x-8 text-white font-medium">
                    <li>
                        <NavLink to="/course-questionnaire" className={({ isActive }) => isActive ? "text-green-500" : "hover:text-blue-700"}>Course Questionnaire</NavLink>
                    </li>
                    <li>
                        <NavLink to="/job-prospects" className={({ isActive }) => isActive ? "text-green-500" : "hover:text-blue-700"}>Job Prospects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/buddy-system" className={({ isActive }) => isActive ? "text-green-500" : "hover:text-blue-700"}>Buddy System</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-500" : "hover:text-blue-700"}>About Us</NavLink>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="ml-5 px-4 py-1 rounded bg-white/20 hover:bg-white/20">Logout</button>
                    </li>
                </ul>
            ) : (

                /* Login & Sign up Menu are visible when users are NOT LOGGED/SIGNED IN Functionality*/
                <ul className="flex space-x-10 text-white font-medium">
                    <li>
                        <NavLink to="/signup"
                            className={({ isActive }) => isActive ? "text-white-400" : "hover:text-blue-200"}>
                            Sign Up
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login"
                            className={({ isActive }) => isActive ? "text-white-400" : "hover:text-blue-200"}>
                            Login
                        </NavLink>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;