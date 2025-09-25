import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import UNSW from '../assets/unsw.png';
import UTS from '../assets/uts.png';
import USYD from '../assets/usyd.png';
import Macquarie from '../assets/macquarie.png';
import Western from '../assets/western_university.png';
import ANU from '../assets/ANU logo.png'
import Monash from '../assets/Monash logo.png'
import UOA from '../assets/UOA logo.png'
import UOM from '../assets/UOM logo.png'
import UQ from  '../assets/UQ logo.png'
import UWA from '../assets/UWA logo.png'

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-400 via-blue-100 via-orange-100 to-orange-400">
      <div className="w-full px-6 pt-28 flex-1">
        <main className="flex-1 max-w-6xl mx-auto">
            <section className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-4">Welcome to EduMap</h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Navigate your education journey with tailored tools: explore courses, discover job prospects and connect with peers.
              </p>
            </section>

            <section className="mt-10 flex justify-center items-center gap-10">
               <img src={UNSW} alt="UNSW" className="h-25 w-auto object-contain drop-shadow flex-shrink-0"/>
               <img src={USYD} alt="USYD" className="h-25 w-auto object-contain drop-shadow flex-shrink-0"/>
               <img src={UTS} alt="UTS" className="h-20 w-auto object-contain drop-shadow flex-shrink-0"/>
               <img src={Macquarie} alt="Macquarie University" className="h-20 w-auto object-contain drop-shadow flex-shrink-0"/>
               <img src={Western} alt="Western Sydney University" className="h-25 w-auto object-contain drop-shadow flex-shrink-0" />
               <img src={ANU} alt="ANU" className="h-25 w-auto object-contain drop-shadow flex-shrink-0"/>
               <img src={Monash} alt="Monash" className="h-25 w-auto object-contain drop-shadow flex-shrink-0"/>
               <img src={UOA} alt="UOA" className="h-25 w-auto object-contain drop-shadow flex-shrink-0"/>
               <img src={UOM} alt="UOM" className="h-25 w-auto object-contain drop-shadow flex-shrink-0"/>
               <img src={UQ} alt="UQ" className="h-25 w-auto object-contain drop-shadow flex-shrink-0"/>
               <img src={UWA} alt="UWA" className="h-25 w-auto object-contain drop-shadow flex-shrink-0"/>
            </section>
          </main>
          </div>
          <Footer/>
    </div>
  );
}

export default Home;