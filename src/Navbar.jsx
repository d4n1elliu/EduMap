{/* import React from "react";*/}

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import EduMapLogo from "./assets/EduMap Logo 300dpi.png"; 

// EduMap Logo different variations
import EduMapLogoBlack from "./assets/EduMapLogoBLACK300dpi.png"; 
import EduMapLogoWhite from "./assets/EduMapLogoWHITE300dpi.png"; 
import EduMapLogoBlue from "./assets/EduMapLogoBLUE300dpi.png"; 

function Navbar() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

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

            {/* Compact navigation with hamburger menu (decluttered) */}
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Open menu"
                    className="p-2 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    {/* Hamburger icon */}
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>

                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40 bg-black/30"
                            onClick={() => setMenuOpen(false)}
                        />
                        {/* Menu Panel */}
                        <div className="absolute right-0 mt-3 w-64 z-50 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
                            <div className="py-2">
                                <NavLink to="/" onClick={() => setMenuOpen(false)} className="block px-5 py-3 hover:bg-slate-800">Home</NavLink>
                                <NavLink to="/course-questionnaire" onClick={() => setMenuOpen(false)} className="block px-5 py-3 hover:bg-slate-800">Questionnaire</NavLink>
                                <NavLink to="/buddy-system" onClick={() => setMenuOpen(false)} className="block px-5 py-3 hover:bg-slate-800">BuddySystem</NavLink>
                                <NavLink to="/EventsAndNetworkingMap" onClick={() => setMenuOpen(false)} className="block px-5 py-3 hover:bg-slate-800">EventsMap & Forum</NavLink>
                                <NavLink to="/about" onClick={() => setMenuOpen(false)} className="block px-5 py-3 hover:bg-slate-800">About</NavLink>
                                <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="block px-5 py-3 hover:bg-slate-800">Contact Us</NavLink>
                                <NavLink to="/faq" onClick={() => setMenuOpen(false)} className="block px-5 py-3 hover:bg-slate-800">FAQ</NavLink>
                                <NavLink to="/terms" onClick={() => setMenuOpen(false)} className="block px-5 py-3 hover:bg-slate-800">Terms & Service</NavLink>
                                <div className="border-t border-slate-700 my-2" />
                                {token ? (
                                    <button onClick={() => { setMenuOpen(false); handleLogout(); }} className="w-full text-left px-5 py-3 hover:bg-slate-800">Logout</button>
                                ) : (
                                    <>
                                        <NavLink to="/login" onClick={() => setMenuOpen(false)} className="block px-5 py-3 hover:bg-slate-800">Login</NavLink>
                                        <NavLink to="/signup" onClick={() => setMenuOpen(false)} className="block px-5 py-3 hover:bg-slate-800">Sign Up</NavLink>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;