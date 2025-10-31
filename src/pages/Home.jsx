
import Background from "./Background";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import HeroImg from "../assets/EduMapWelcome.png";
import FindWhatSuitsImg from "../assets/findWhatSuitsYou.png";
import ConnectImg from "../assets/ConnectWithThose.png";

import Raspberry from "../assets/raspberryPi.png";
import CV from "../assets/CV.png";
import Networking from "../assets/networking.png";

function Home() {
  return (
    <Background>
      {/* Main Wrapper Box */}
      <div className="w-full flex flex-col items-center">

        {/* ========= HERO SECTION ========= */}
        <section className="w-full relative">
          <img
            src={HeroImg}
            alt="Students learning together"
            className="w-full h-[600px] object-cover object-[50%_30%]"
          />

          <div className="absolute inset-0 flex flex-col justify-center items-start px-10">
            <h1 className="text-white text-4xl font-semibold mb-4">
              Welcome to EduMap
            </h1>
            <p className="text-white max-w-lg text-sm">
              A place that provides prospective university students support and assists
              you along your education journey.
            </p>

            <Link to="/course-questionnaire" className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-lg text-base font-medium">
              Join Now!
            </Link>
          </div>
        </section>
        
        {/* ========= FIND WHAT SUITS YOU ========= */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2">
          {/* Left Image */}
          <div className="w-full h-[480px] md:h-[520px]">
            <img
              src={FindWhatSuitsImg}
              alt="Find what suits you"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center px-10 py-12 bg-white h-[480px] md:h-[520px]">
            <h2 className="text-3xl font-semibold mb-4">Find out what suits you</h2>
            <p className="text-gray-700 mb-6 max-w-md">
              Discover and realise your interests and skills to share them with others.
            </p>
            <Link to="/course-questionnaire"
              className="block w-full max-w-[300px] text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors"
            >
              Take the Questionnaire
            </Link>
          </div>
        </section>

        {/* ========= CONNECT WITH THOSE ========= */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-10 py-12 bg-[#1c2955] text-white h-[480px] md:h-[520px]">
            <h2 className="text-3xl font-semibold mb-4">
              Connect with those on your path
            </h2>
            <p className="mb-6 max-w-md text-gray-200">
              Find others who are in similar situations and connect with a peer mentor
              who can help you learn what it’s like to be in different fields.
            </p>
            <Link
              to="/buddy-system"
              className="block w-full max-w-[300px] text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors"
            >
              Start Connecting
            </Link>
          </div>

          {/* Right image */}
          <div className="w-full h-[480px] md:h-[520px]">
            <img
              src={ConnectImg}
              alt="connecting"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ========= DISCOVER EVENTS ========= */}
        <section className="w-full bg-gradient-to-r from-blue-500 via-[#EED6C4] to-orange-500 py-16 px-6">

          {/* Title BAR */}
          <div className="w-full flex justify-center mb-10">
            <div className="px-105 py-3 bg-white/20 backdrop-blur-md rounded-2xl shadow-sm">
              <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900">
                Discover Events
              </h2>
            </div>
          </div>

          {/* Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

            {/* CARD 1 */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden w-72 flex flex-col">
              <img src={Raspberry} className="w-full h-40 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-sm mb-1">Raspberry Pi Workshop</h3>
                <p className="font-semibold text-sm text-blue-600">Hosted by Tech Soc</p>

                <div className="mt-auto flex justify-end">
                  <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded">
                    See details…
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden w-72 flex flex-col">
              <img src={CV} className="w-full h-40 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-sm mb-1">Writing a CV Resume</h3>
                <p className="font-semibold text-sm text-blue-600">Hosted by Tech Soc</p>

                <div className="mt-auto flex justify-end">
                  <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded">
                    See details…
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden w-72 flex flex-col">
              <img src={Networking} className="w-full h-40 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-sm mb-1">Industry Networking</h3>
                <p className="font-semibold text-sm text-blue-600">Hosted by UTS UXID</p>

                <div className="mt-auto flex justify-end">
                  <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded">
                    See details…
                  </button>
                </div>
              </div>
            </div>
            </div>
          </section>
        </div>
      <Footer />
    </Background>
  );
}

export default Home;
