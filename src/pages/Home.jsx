import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-300">
      <div className="w-full px-6 pt-28 flex-1">
        <main className="flex-1 max-w-6xl mx-auto">
            <section className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-4">Welcome to EduMap</h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Navigate your education journey with tailored tools: explore courses, discover job prospects and connect with peers.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <NavLink to="/course-questionnaire" className="block rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="text-2xl font-semibold text-blue-800 mb-2">Course Questionnaire</div>
                <p className="text-gray-600">Get personalised course suggestions based on your interests and goals.</p>
              </NavLink>

              <NavLink to="/job-prospects" className="block rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="text-2xl font-semibold text-blue-800 mb-2">Job Prospects</div>
                <p className="text-gray-600">See career paths, current skills in demand and industries hiring now.</p>
              </NavLink>

              <NavLink to="/buddy-system" className="block rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="text-2xl font-semibold text-blue-800 mb-2">Buddy Program</div>
                <p className="text-gray-600">Find study partners and mentors to stay motivated and succeed.</p>
              </NavLink>
            </section>
          </main>
          </div>
          <Footer/>
    </div>
  );
}

export default Home;


