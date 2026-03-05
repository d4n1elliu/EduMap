import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from './ProfileBackground.jsx';
import Footer from './Footer';
import studentImg from "../assets/student.png";

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile'); // 'profile', 'projects', 'bookings', 'settings'
  const [selectedSlots, setSelectedSlots] = useState([]);

  // Dynamic projects array
  const projects = [
    {
      title: "Miniature Boat Build",
      description:
        "Built a miniature boat for a local contest, focusing on stability, design, and speed. Learned teamwork and problem-solving while constructing the boat from scratch.",
      images: [
        "src/assets/boatrace.png",
      ],
    },
    {
      title: "Robotics Challenge",
      description:
        "Designed a small robot to navigate a maze for a competition. Improved programming skills and mechanical design abilities.",
      images: [
        "src/assets/taskbot.png",
      ],
    },
    {
      title: "Art Installation",
      description:
        "Created a collaborative art installation for a local exhibition, focusing on sustainability and community involvement.",
      images: [
        "src/assets/abstract.png",
      ],
    },
  ];

  // Timetable data
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  const sampleEvents = [
    { day: 'Monday', time: '10:00 AM', title: 'Study Group', type: 'event', color: 'bg-blue-200' },
    { day: 'Wednesday', time: '2:00 PM', title: 'Mentor Session', type: 'booking', color: 'bg-green-200' },
    { day: 'Friday', time: '4:00 PM', title: 'Project Meeting', type: 'event', color: 'bg-purple-200' }
  ];

  // Time slot selected function
  const handleSlotClick = (day, time) => {
    const slotId = `${day}-${time}`;
    setSelectedSlots(prev =>
      prev.includes(slotId)
        ? prev.filter(id => id !== slotId)
        : [...prev, slotId]
    );
  };

  // Event slot selected
  const getEventForSlot = (day, time) => {
    return sampleEvents.find(event => event.day === day && event.time === time);
  };

  // Checking if slot has been selected or not
  const isSlotSelected = (day, time) => {
    return selectedSlots.includes(`${day}-${time}`);
  };

  // Rendering profile 
  const renderProfileContent = () => (
    <div className="flex flex-col gap-6">
      {/* Header with Edit Icon */}
      <div className="flex items-center gap-4 relative">
        <div className="relative">
          <img
            src={studentImg}
            alt="Student avatar"
            className="w-25 h-30 rounded-full border-2 border-blue-400"
          />
          <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center hover:bg-blue-600 transition-colors">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Student Name</h1>
          <p className="text-gray-600">Interests/Course Name & Major</p>
          <p className="text-gray-500">Highschool/University Name</p>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 p-4 rounded-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">About Me</h2>
        <p className="text-gray-600 text-sm">
          Description about yourself, goals, and what you're passionate about.
        </p>
      </div>

      {/* Questionnaire Results */}
      <div className="bg-gray-50 p-4 rounded-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">Questionnaire Results</h2>
        <p className="text-gray-500 text-sm mb-3">
          Visual representation of your preferences and choices
        </p>

        {/* Progress Bars */}
        <div className="mb-4">
          <p className="text-gray-800 font-semibold">Location Preference</p>
          <p className="text-gray-500 text-sm mb-1">
            You alongside <b>79%</b> of others had a preference to study in the city
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-orange-400 h-2 rounded-full" style={{ width: "79%" }}></div>
          </div>
          <p className="text-right text-sm text-gray-600 mt-1">79%</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-800 font-semibold">Type of Support</p>
          <p className="text-gray-500 text-sm mb-1">
            You alongside <b>65%</b> of international students had a preference for 'Visa and Work Guidance'
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-400 h-2 rounded-full" style={{ width: "65%" }}></div>
          </div>
          <p className="text-right text-sm text-gray-600 mt-1">65%</p>
        </div>

        {/* New Topics of Interest Progress Bar */}
        <div className="mb-4">
          <p className="text-gray-800 font-semibold">Topics of Interest</p>
          <p className="text-gray-500 text-sm mb-1">
            You alongside <b>15%</b> of others had a preference to study Engineering and Technology
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-400 h-2 rounded-full" style={{ width: "15%" }}></div>
          </div>
          <p className="text-right text-sm text-gray-600 mt-1">15%</p>
        </div>
      </div>

      {/* Booked Mentor Sessions */}
      <div className="bg-gray-50 p-4 rounded-xl shadow-sm flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Booked Mentor Sessions</h2>
        <p className="text-gray-500 text-sm">None have been booked as of right now.</p>
        <button 
          onClick={() => navigate('/buddy-system')}
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          > 
          Join the Buddy System
        </button>
      </div>
    </div>
  );

  const renderProjectsContent = () => (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">My Projects</h1>

      {/* Projects Section */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <p className="font-semibold text-gray-800 text-lg mb-2">{project.title}</p>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            <div className="flex gap-4 flex-wrap">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="w-48 h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add New Project Button */}
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg self-start">
        + Add New Project
      </button>
    </div>
  );

  const renderBookingsContent = () => (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Weekly Timetable</h1>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
          <span>🔍</span>
          Find Events
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
          <span>👨‍🏫</span>
          Book Mentor Sessions
        </button>
      </div>

      {/* Timetable Container */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        {/* Days Header */}
        <div className="grid grid-cols-8 gap-2 mb-4">
          <div className="p-4"></div> {/* Empty corner */}
          {days.map(day => (
            <div key={day} className="p-4 text-center font-semibold text-gray-700 bg-gray-50 rounded-lg">
              {day}
            </div>
          ))}
        </div>

        {/* Time Slots */}
        <div className="space-y-2">
          {timeSlots.map(time => (
            <div key={time} className="grid grid-cols-8 gap-2">
              {/* Time Label */}
              <div className="p-3 text-sm font-medium text-gray-500 bg-gray-50 rounded-lg flex items-center justify-center">
                {time}
              </div>

              {/* Day Columns */}
              {days.map(day => {
                const event = getEventForSlot(day, time);
                const isSelected = isSlotSelected(day, time);

                return (
                  <div
                    key={`${day}-${time}`}
                    onClick={() => handleSlotClick(day, time)}
                    className={`p-3 border-2 rounded-lg cursor-pointer transition-all min-h-16 ${event
                        ? `${event.color} border-transparent hover:opacity-90`
                        : isSelected
                          ? 'bg-blue-100 border-blue-400'
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                  >
                    {event && (
                      <div className="text-xs font-medium text-gray-800">
                        {event.title}
                        <div className="text-xs text-gray-600 mt-1">
                          {event.type === 'booking' ? 'Mentor Session' : 'Event'}
                        </div>
                      </div>
                    )}
                    {!event && isSelected && (
                      <div className="text-xs text-blue-600 font-medium">
                        Selected
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">Legend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-200 rounded"></div>
              <span className="text-sm text-gray-600">Study Events</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-200 rounded"></div>
              <span className="text-sm text-gray-600">Mentor Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-200 rounded"></div>
              <span className="text-sm text-gray-600">Project Meetings</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-100 border-2 border-blue-400 rounded"></div>
              <span className="text-sm text-gray-600">Selected Slots</span>
            </div>
          </div>
        </div>

        {/* Selected Slots Summary */}
        {selectedSlots.length > 0 && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">
              {selectedSlots.length} time slot(s) selected
            </h3>
            <div className="text-sm text-blue-600">
              Click on slots to select/deselect them for scheduling
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions Footer */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          Export Schedule
        </button>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          Set Availability
        </button>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          Sync Calendar
        </button>
      </div>
    </div>
  );

  const renderSettingsContent = () => (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Account Settings</h1>

      {/* Profile Settings */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-xl">👤</span> Profile Information
        </h2>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              defaultValue="Student Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              defaultValue="student@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg">
            Update Profile
          </button>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-xl">🔒</span> Security
        </h2>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Current Password</label>
            <input
              type="password"
              placeholder="Enter current password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg">
            Change Password
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-xl">🔔</span> Notifications
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive updates via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Mentor Messages</p>
              <p className="text-sm text-gray-600">Get notified when mentors message you</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Session Reminders</p>
              <p className="text-sm text-gray-600">Reminders for booked sessions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-xl">🛡️</span> Privacy
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Profile Visibility</p>
              <p className="text-sm text-gray-600">Allow others to see your profile</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Project Sharing</p>
              <p className="text-sm text-gray-600">Allow mentors to view your projects</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Account Actions */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-xl">⚙️</span> Account Actions
        </h2>
        <div className="space-y-3">
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
            <span>📥</span>
            Export My Data
          </button>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
            <span>🚫</span>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Background>
      <div className="flex justify-center p-6">
        <div className="relative w-3/4 max-w-7x1 flex">

          {/* Book-style Tabs - Positioned absolutely on the left, closer to content */}
          <div className="absolute right-359 top-20 h-full flex flex-col items-end space-y-2 z-10">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center py-3 rounded-l-lg transition-all transform hover:scale-105 ${activeTab === 'profile'
                  ? 'w-48 h-15 bg-red-500 text-white shadow-lg -mr-1 justify-left pl-6 pr-4'
                  : 'w-30 h-15 bg-gray-200 text-gray-700 hover:bg-gray-300 justify-end pr-4'
                }`}
            >
              <span className="font-medium">Profile</span>
              <span className="text-lg ml-2">👤</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center py-3 rounded-l-lg transition-all transform hover:scale-105 ${activeTab === 'projects'
                  ? 'w-48 h-15 bg-blue-500 text-white shadow-lg -mr-1 justify-left pl-6 pr-4'
                  : 'w-30 h-15 bg-gray-200 text-gray-700 hover:bg-gray-300 justify-end pr-4'
                }`}
            >
              <span className="font-medium">Projects</span>
              <span className="text-lg ml-2">💼</span>
            </button>

            <button
              onClick={() => setActiveTab('bookings')}
              className={`flex items-center py-3 rounded-l-lg transition-all transform hover:scale-105 ${activeTab === 'bookings'
                  ? 'w-48 h-15 bg-orange-500 text-white shadow-lg -mr-1 justify-left pl-6 pr-4'
                  : 'w-30 h-15 bg-gray-200 text-gray-700 hover:bg-gray-300 justify-end pr-4'
                }`}
            >
              <span className="font-medium">Planner</span>
              <span className="text-lg ml-2">📅</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center py-3 rounded-l-lg transition-all transform hover:scale-105 ${activeTab === 'settings'
                  ? 'w-48 h-15 bg-purple-500 text-white shadow-lg -mr-1 justify-left pl-6 pr-4'
                  : 'w-30 h-15 bg-gray-200 text-gray-700 hover:bg-gray-300 justify-end pr-4'
                }`}
            >
              <span className="font-medium">Settings</span>
              <span className="text-lg ml-2">⚙️</span>
            </button>
          </div>

          {/* Main Content Container */}
          <div className="bg-white shadow-lg rounded-2xl w-full flex p-6 gap-8 ml-12">

            {/* Main Content Area - Reduced width to accommodate larger right sidebar */}
            <div className="w-2/3">
              {activeTab === 'profile' && renderProfileContent()}
              {activeTab === 'projects' && renderProjectsContent()}
              {activeTab === 'bookings' && renderBookingsContent()}
              {activeTab === 'settings' && renderSettingsContent()}
            </div>

            {/* Right Sidebar - Mentors and Buddies - Doubled width */}
            <div className="w-1/3 flex flex-col gap-6">
              {/* Mentors Section */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="text-2xl">👩‍🏫</span> Mentors Connected With
                </h2>
                <div className="space-y-4">
                  {[{ name: "Mentor Jacob", time: "15h", specialty: "Computer Science" },
                  { name: "Mentor Germaine", time: "10h", specialty: "Engineering" },
                  { name: "Mentor Oxob", time: "3h", specialty: "Robotics" }]
                    .map((mentor, index) => (
                      <div key={index} className="bg-blue-100 rounded-xl p-4 flex items-center gap-4 hover:bg-blue-200 transition-colors">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-semibold">{mentor.name.split(' ')[1][0]}</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800 text-lg">{mentor.name}</p>
                          <p className="text-sm text-gray-600 mb-1">{mentor.specialty}</p>
                          <p className="text-sm text-gray-600">
                            Mentored: <b>{mentor.time}</b>
                          </p>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded-lg">
                          Message
                        </button>
                      </div>
                    ))}
                </div>

                {/* Find More Mentors */}
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <Link 
                    to="/buddy-system"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
                    <span role="img" aria-label="search">🔍</span>
                    Find More Mentors
                  </Link>
                </div>
              </div>

              {/* Buddies Section */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="text-2xl">👥</span> Buddies Connected With
                </h2>
                <div className="space-y-4">
                  {[
                    { name: "Buddy Pepper", course: "Computer Science", status: "Online" },
                    { name: "Buddy Killua", course: "Mechanical Engineering", status: "Offline" },
                    { name: "Buddy Alex", course: "Electrical Engineering", status: "Online" }
                  ].map((buddy, index) => (
                    <div key={index} className="bg-blue-100 rounded-xl p-4 flex items-center gap-4 hover:bg-blue-200 transition-colors">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-semibold">{buddy.name.split(' ')[1][0]}</span>
                        </div>
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${buddy.status === 'Online' ? 'bg-green-500' : 'bg-gray-400'
                          }`}></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 text-lg">{buddy.name}</p>
                        <p className="text-sm text-gray-600">{buddy.course}</p>
                        <p className={`text-xs ${buddy.status === 'Online' ? 'text-green-600' : 'text-gray-500'}`}>
                          {buddy.status}
                        </p>
                      </div>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded-lg">
                        Chat
                      </button>
                    </div>
                  ))}
                </div>

                {/* Connect with More Buddies */}
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
                    <span>➕</span>
                    Connect with More Buddies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Background>
  );
}