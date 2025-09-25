import React from "react";
import { NavLink } from "react-router-dom";
import EduMapLogo from "./assets/EduMap Logo 300dpi.png"; 

function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-slate-600 via-slate-500 via-orange-300 to-orange-400 text-white px-6 py-5 flex justify-between items-center fixed top-0 left-0 right-0 w-full h-24 shadow-md z-50"> 
        {/* Navbar Background Styling */}

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

            {/* Login & SignUp button */}
            <ul className="flex space-x-10 text-white font-medium">
                <li>
                <NavLink to="/signup"
                    className={({ isActive }) => isActive ? "text-white-400" : "hover:text-blue-400"}>
                    Sign Up
                </NavLink>
                </li>

                <li>
                <NavLink to="/login"
                    className={({ isActive }) => isActive ? "text-white-400" : "hover:text-blue-400"}>
                    Login
                </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;