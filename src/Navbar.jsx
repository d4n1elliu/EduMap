import React from "react";

function Navbar() {
    return (
        <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">EduMap</h1>
            <ul className="flex space-x-6">
                <li><a href="#home" className="hover:text-orange-400">Course Questionnaire</a></li>
                <li><a href="#features" className="hover:text-orange-400">Job Prospects</a></li>
                <li><a href="#about" className="hover:text-orange-400">Buddy Program</a></li>
                <li><a href="#contact" className="hover:text-orange-400">Contact US</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;