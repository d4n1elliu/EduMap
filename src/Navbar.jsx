import React from "react";

function Navbar() {
    return (
        <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 w-full h-16 shadow-md z-50">
            {/* Smaller EduMap in Navbar*/}
            <h1 className="text-2xl font-bold">EduMap</h1>

            {/* White nav links*/}
            <ul className="flex space-x-6 text-white font-medium">
                <li><a href="#home" className="hover:text-orange-400">Course Questionnaire</a></li>
                <li><a href="#features" className="hover:text-orange-400">Job Prospects</a></li>
                <li><a href="#about" className="hover:text-orange-400">Buddy Program</a></li>
                <li><a href="#contact" className="hover:text-orange-400">Contact US</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;