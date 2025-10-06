{/* import React from "react";*/}

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import EduMapLogo from "./assets/EduMap Logo 300dpi.png"; 

// EduMap Logo different variations
import EduMapLogoBlack from "./assets/EduMapLogoBLACK300dpi.png"; 
import EduMapLogoWhite from "./assets/EduMapLogoWHITE300dpi.png"; 
import EduMapLogoBlue from "./assets/EduMapLogoBLUE300dpi.png"; 

function Navbar() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
        window.location.reload();
    };
    return (
        <nav className="px-6 py-5 flex justify-between items-center fixed top-0 left-0 right-0 z-50 h-24 flex items-center bg-slate-900 text-white px-6"> 
        {/* Match footer color for cohesion (no translucency) */}

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
                        <NavLink to="/course-questionnaire" className={({ isActive }) => isActive ? "text-green-400" : "text-blue-300 hover:text-blue-200"}>Course Questionnaire</NavLink>
                    </li>
                    <li>
                        <NavLink to="/EventsAndNetworkingMap" className={({ isActive }) => isActive ? "text-green-400" : "text-blue-300 hover:text-blue-200"}>Events & Networking Map</NavLink>
                    </li>
                    <li>
                        <NavLink to="/buddy-system" className={({ isActive }) => isActive ? "text-green-400" : "text-blue-300 hover:text-blue-200"}>Buddy System</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-400" : "text-blue-300 hover:text-blue-200"}>About Us</NavLink>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="ml-5 px-3 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300">Logout</button>
                    </li>
                </ul>
            ) : (

                /* Login & Sign up Menu are visible when users are NOT LOGGED/SIGNED IN Functionality*/
                <ul className="flex space-x-10 text-white font-medium">
                    <li>
                        <NavLink to="/signup"
                            className={({ isActive }) => isActive ? "text-orange-400" : "text-blue-300 hover:text-blue-200"}>
                            Sign Up
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login"
                            className={({ isActive }) => isActive ? "text-orange-400" : "text-blue-300 hover:text-blue-200"}>
                            Login
                        </NavLink>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;