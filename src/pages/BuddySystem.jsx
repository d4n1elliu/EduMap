import { useState } from 'react';
import Footer from './Footer';

export default function BuddySystem() {
    const [activeTab, setActiveTab] = useState('mentors');
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [showBooking, setShowBooking] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        gender: 'all',
        university: 'all',
        courses: []
    });

    {/*Data for mentors*/}
    const mentors = [
        {
            id: 1,
            name: "Emma Janice",
            studies: "3rd Year, Computer Science",
            university: "University of Technology Sydney",
            skills: ["HTML", "Java", "JavaScript", "Python", "ReactJS"],
            rating: 4,
            reviews: 3,
            about: "Passionate computer science student with experience in web development and programming. I love helping others learn and grow in their coding journey.",
            image: "👩‍💻"
        },
        {
            id: 2,
            name: "Alex Chen",
            studies: "4th Year, Business",
            university: "University of Sydney",
            skills: ["Marketing", "Finance", "Strategy", "Leadership"],
            rating: 5,
            reviews: 7,
            about: "Business student with internship experience at top consulting firms. I specialize in helping students develop professional skills and career planning.",
            image: "👨‍💼"
        },
        {
            id: 3,
            name: "Sarah Williams",
            studies: "3rd Year, Law and Business",
            university: "University of New South Wales",
            skills: ["Contract Law", "Criminal Law", "Legal Research", "Marketing"],
            rating: 4,
            reviews: 5,
            about: "Law student passionate about justice and helping others understand legal concepts. I enjoy mentoring first-year students.",
            image: "👩‍⚖️"
        },
        {
            id: 4,
            name: "Michael Rodriguez",
            studies: "4th, Information Technology",
            university: "University of Technology Sydney",
            skills: ["Cybersecurity", "Networking", "Database", "Cloud Computing"],
            rating: 5,
            reviews: 8,
            about: "IT professional with focus on cybersecurity. I help students understand complex technical concepts and prepare for industry.",
            image: "👨‍💻"
        },
        {
            id: 5,
            name: "Danny Lim",
            studies: "5th/Final Year, Engineering",
            university: "University of Technology Sydney",
            skills: ["Cybersecurity", "Networking", "Database", "Cloud Computing"],
            rating: 5,
            reviews: 8,
            about: "IT professional with focus on cybersecurity. I help students understand complex technical concepts and prepare for industry.",
            image: "👨‍💼"
        },
        {
            id: 6,
            name: "Brenden Yung",
            studies: "4th, Information Technology and Business",
            university: "University of New South Wales",
            skills: ["Cybersecurity", "Networking", "Database", "Cloud Computing"],
            rating: 5,
            reviews: 8,
            about: "IT professional with focus on cybersecurity. I help students understand complex technical concepts and prepare for industry.",
            image: "👨‍💻"
        },
        {
            id: 7,
            name: "Jennie Patel",
            studies: "3rd Year, Engineering",
            university: "Macquarie University",
            skills: ["Mechanical Design", "CAD", "Robotics", "Problem-Solving"],
            rating: 4,
            reviews: 7,
            about: "Aspiring engineer passionate about robotics and design thinking. I enjoy mentoring students on building real-world engineering projects.",
            image: "👨‍💼"
        },
        {
            id: 8,
            name: "James O'Connor",
            studies: "3rd Year, Communication",
            university: "University of Sydney",
            skills: ["Public Speaking", "Media Writing", "Marketing", "Teamwork"],
            rating: 3,
            reviews: 4,
            about: "Communication student with experience in media projects. I like helping peers gain confidence in speaking and presenting ideas.",
            image: "👨‍🎓"
        },
        {
            id: 9,
            name: "Hannah Kim",
            studies: "5th Year, Law",
            university: "University of New South Wales",
            skills: ["Legal Research", "Contract Law", "Critical Thinking", "Mooting"],
            rating: 5,
            reviews: 10,
            about: "Law student with a focus on contract law. I enjoy guiding others in building strong analytical skills and preparing for mooting competitions.",
            image: "👩‍⚖️"
        },
        {
            id: 10,
            name: "Carlos Martinez",
            studies: "3rd Year, International Studies",
            university: "Western University",
            skills: ["Global Politics", "Cultural Awareness", "Foreign Policy", "Research"],
            rating: 4,
            reviews: 5,
            about: "International Studies student interested in cultural exchange and policy-making. I mentor students on adapting to diverse environments.",
            image: "👨‍🎓"
        },
        {
            id: 11,
            name: "Emily Zhang",
            studies: "4th Year, Health Sciences",
            university: "University of Sydney",
            skills: ["Anatomy", "Research", "Healthcare Systems", "Community Outreach"],
            rating: 5,
            reviews: 7,
            about: "Health sciences student passionate about improving community well-being. I mentor students who want to pursue careers in healthcare.",
            image: "👩‍⚕️"
        },
        {
            id: 12, 
            name: "Sung Jing Woo",
            studies: "3rd Year, Information Techology",
            university: "University of Technology Sydney",
            skills: ["C#", ".Net", "Python", "Linux"],
            rating: 5, 
            reviews: 9,
            about: "Passionate software developer with expertise in C#, .NET, Python, and Linux. Dedicated to creating innovative solutions and mentoring others in technology and career development.",
            image: "👨‍💻"
        },
        {
            id: 13, 
            name: "Johnny Zhang",
            studies: "3rd Year, International Studies & Business",
            university: "Macquarie University",
            skills: ["Marketing", "Japanese", "Teamwork", "Advertising"],
            rating: 5, 
            reviews: 8,
            about: "Enthusiastic International Studies and Business student with a strong interest in global markets, cross-cultural communication and advertising. I enjoy mentoring peers on developing language skills, teamwork strategies and marketing projects that connect cultures and businesses.",
            image: "👨‍💼"
        },
    ];

    {/* Saved IDs mentors*/}
    const [savedMentors, setSavedMentors] = useState([1, 3]); 
    const [bookedSessions, setBookedSessions] = useState([
        {
            id: 1,
            mentorId: 1,
            mentorName: "Emma Janice",
            studies: "Computer Science",
            sessionTime: "10:00 AM 17/08/2024",
            status: "Confirmed"
        },
        {
            id: 2,
            mentorId: 3,
            mentorName: "Sarah Williams",
            studies: "Law",
            sessionTime: "2:00 PM 20/08/2024",
            status: "Confirmed"
        }
    ]);

    const [messages] = useState([
        { mentorId: 1, mentorName: "Emma Janice", lastMessage: "Hi! Looking forward to our session tomorrow." },
        { mentorId: 3, mentorName: "Sarah Williams", lastMessage: "Thanks for the great study tips!" }
    ]);

    const handleFilterChange = (filterType, value) => {
        if (filterType === 'courses') {
            const newCourses = filters.courses.includes(value)
                ? filters.courses.filter(c => c !== value)
                : [...filters.courses, value];
            setFilters({ ...filters, courses: newCourses });
        } else {
            setFilters({ ...filters, [filterType]: value });
        }
    };

    const toggleSavedMentor = (mentorId) => {
        if (savedMentors.includes(mentorId)) {
            setSavedMentors(savedMentors.filter(id => id !== mentorId));
        } else {
            setSavedMentors([...savedMentors, mentorId]);
        }
    };

    const filteredMentors = mentors.filter(mentor => {
        const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            mentor.studies.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGender = filters.gender === 'all' || mentor.gender === filters.gender;
        const matchesUniversity = filters.university === 'all' || mentor.university === filters.university;
        const matchesCourses = filters.courses.length === 0 || 
                              filters.courses.some(course => 
                                  mentor.studies.toLowerCase().includes(course.toLowerCase())
                              );
        
        return matchesSearch && matchesGender && matchesUniversity && matchesCourses;
    });

    const renderMentorsTab = () => (
        <div className="flex gap-6">
            {/* Filters Sidebar */}
            <div className="w-64 bg-white rounded-lg border border-gray-200 p-4 h-fit">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-semibold">Filter</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                        {['all', 'female', 'male'].map(gender => (
                            <label key={gender} className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value={gender}
                                    checked={filters.gender === gender}
                                    onChange={(e) => handleFilterChange('gender', e.target.value)}
                                    className="mr-2"
                                />
                                <span className="capitalize">{gender}</span>
                            </label>
                        ))}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">University</label>
                        {['all', 'University of New South Wales', 'University of Sydney', 'University of Technology Sydney', 'Macquarie University', 'Western University'].map(uni => (
                            <label key={uni} className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    name="university"
                                    value={uni}
                                    checked={filters.university === uni}
                                    onChange={(e) => handleFilterChange('university', e.target.value)}
                                    className="mr-2"
                                />
                                <span className="text-sm">{uni === 'all' ? 'All' : uni}</span>
                            </label>
                        ))}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Courses</label>
                        {['IT', 'Computer Science', 'Business', 'Law', 'Sciences', 'Engineering', 'Communication', 'Architecture', 'Health', 'Mathematics', 'International Studies', 'Education'].map(course => (
                            <label key={course} className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    checked={filters.courses.includes(course)}
                                    onChange={(e) => handleFilterChange('courses', course)}
                                    className="mr-2"
                                />
                                <span className="text-sm">{course}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mentors Grid */}
            <div className="flex-1">
                <div className="mb-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredMentors.map(mentor => (
                        <div key={mentor.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                            <div className="text-center mb-3">
                                <div className="text-4xl mb-2">{mentor.image}</div>
                                <h3 className="font-semibold text-gray-800">{mentor.name}</h3>
                                <p className="text-sm text-gray-600">{mentor.studies}</p>
                                <p className="text-xs text-gray-500">{mentor.university}</p>
                            </div>
                            
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`w-4 h-4 ${i < mentor.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="ml-1 text-sm text-gray-600">{mentor.reviews} reviews</span>
                                </div>
                                <button
                                    onClick={() => toggleSavedMentor(mentor.id)}
                                    className={`p-2 rounded-full ${savedMentors.includes(mentor.id) ? 'text-yellow-500' : 'text-gray-400'} hover:bg-gray-100`}
                                >
                                    <svg className="w-5 h-5" fill={savedMentors.includes(mentor.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-1 mb-3">
                                {mentor.skills.slice(0, 3).map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <button
                                    onClick={() => {
                                        setSelectedMentor(mentor);
                                        setShowBooking(true);
                                    }}
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    View Profile
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderSavedMentorsTab = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentors.filter(mentor => savedMentors.includes(mentor.id)).map(mentor => (
                <div key={mentor.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex flex-col h-full">
                    <div className="text-center mb-3">
                        <div className="text-4xl mb-2">{mentor.image}</div>
                        <h3 className="font-semibold text-gray-800">{mentor.name}</h3>
                        <p className="text-sm text-gray-600">{mentor.studies}</p>
                        <p className="text-xs text-gray-500">{mentor.university}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-4 h-4 ${i < mentor.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <button
                            onClick={() => toggleSavedMentor(mentor.id)}
                            className="text-yellow-500 p-2 rounded-full hover:bg-gray-100"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-auto">
                        <button
                            onClick={() => {
                                setSelectedMentor(mentor);
                                setShowBooking(true);
                            }}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Book Session
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderBookingsTab = () => (
        <div className="space-y-4">
            {bookedSessions.map(session => {
                const mentor = mentors.find(m => m.id === session.mentorId);
                return (
                    <div key={session.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="text-3xl">{mentor?.image}</div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">{session.mentorName}</h3>
                                    <p className="text-sm text-gray-600">{session.studies}</p>
                                    <p className="text-sm text-gray-500">Session Time: {session.sessionTime}</p>
                                    <p className="text-sm text-green-600">{session.status}</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col space-y-2">
                                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                                    Message
                                </button>
                                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm">
                                    Reschedule
                                </button>
                                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );

    const renderMentorProfile = () => (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <button
                onClick={() => setShowBooking(false)}
                className="text-blue-600 hover:text-blue-800 mb-4 flex items-center"
            >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Mentors
            </button>

            <div className="flex items-start space-x-6">
                <div className="text-center">
                    <div className="text-6xl mb-4">{selectedMentor.image}</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedMentor.name}</h2>
                    <p className="text-gray-600 mb-2">{selectedMentor.studies}</p>
                    <p className="text-gray-500 mb-3">{selectedMentor.university}</p>
                    
                    <div className="flex items-center justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-5 h-5 ${i < selectedMentor.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <span className="ml-2 text-gray-600">{selectedMentor.reviews} Reviews</span>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {selectedMentor.skills.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex-1">
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">About {selectedMentor.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{selectedMentor.about}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Book a Session</h3>
                        <p className="text-gray-600 mb-4">Choose your preferred date and time for a mentor session.</p>
                        
                        {/* Simple Calendar Placeholder */}
                        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                            <div className="text-center text-lg font-semibold text-gray-800 mb-3">August 2024</div>
                            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                                    <div key={day} className="py-2 text-gray-500">{day}</div>
                                ))}
                                {[...Array(31)].map((_, i) => (
                                    <div key={i} className={`py-2 cursor-pointer hover:bg-blue-100 rounded ${i === 16 ? 'bg-blue-500 text-white' : ''}`}>
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Time Slots */}
                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-700 mb-2">Available Time Slots:</p>
                            <div className="flex flex-wrap gap-2">
                                {['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'].map(time => (
                                    <button
                                        key={time}
                                        className={`px-3 py-2 rounded-lg border ${
                                            time === '10:00 AM' 
                                                ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                                : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                            BOOK SESSION
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderMessages = () => (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="bg-green-600 text-white p-4 rounded-t-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="font-semibold">Messages</span>
                    </div>
                    <button
                        onClick={() => setShowMessages(false)}
                        className="text-white hover:text-gray-200"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            
            <div className="p-4">
                {messages.map(message => (
                    <div key={message.mentorId} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-medium text-gray-800">{message.mentorName}</h4>
                            <p className="text-sm text-gray-600 truncate">{message.lastMessage}</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full max-w-6xl px-6 pt-4 mx-auto flex-1">
                {/* Header */}
                <main className="flex-1">
                    <section className="text-center mb-8">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-3">Buddy Program</h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">Connect with peers, mentors and study partners who share your goals.</p>
                    </section>

                    {/* Navigation Tabs */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
                        <div className="flex border-b border-gray-200">
                            {[
                                { id: 'mentors', label: 'Mentors' },
                                { id: 'saved', label: 'Saved Mentors' },
                                { id: 'bookings', label: 'My Bookings' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                                        activeTab === tab.id
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="p-6">
                            {activeTab === 'mentors' && renderMentorsTab()}
                            {activeTab === 'saved' && renderSavedMentorsTab()}
                            {activeTab === 'bookings' && renderBookingsTab()}
                        </div>
                    </div>

                    {/* Messages Panel */}
                    {showMessages && renderMessages()}

                    {/* Messages Toggle Button */}
                    <button
                        onClick={() => setShowMessages(!showMessages)}
                        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </button>

                    {/* Profile / Booking Modal */}
                    {showBooking && selectedMentor && (
                    <div className="fixed inset-0 z-50 bg-black/40 flex items-start md:items-center justify-center p-4">
                        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                            <div className="flex items-center justify-between px-6 py-4 border-b">
                                <h3 className="text-lg font-semibold">Mentor Profile</h3>
                                <button
                                type="button"
                                onClick={() => setShowBooking(false)}
                                className="p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                aria-label="Close profile"
                                > ✕ </button>
                            </div>
                            <div className="p-6">
                                {renderMentorProfile()} {/* re-use your existing renderer */}
                            </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
            
            <Footer/>
        </div>
    );
}