import { useState, useEffect } from 'react';
import Footer from './Footer';
import Background from './Background';
import { getMyBookings, bookMentor, confirmBooking, getMentors, getMentorAvailability } from '../api/booking';

export default function BuddySystem() {

    // UseState variables
    const [activeTab, setActiveTab] = useState('mentors');
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [showBooking, setShowBooking] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        gender: 'all',
        //university: 'all',
        courses: []
    });

    // Booking state
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDuration, setSelectedDuration] = useState(60); // minutes
    const [isBooking, setIsBooking] = useState(false);
    const [bookingError, setBookingError] = useState('');
    const [bookingSuccess, setBookingSuccess] = useState('');
    const [mentors, setMentors] = useState([]);

    // Checking for chosen mentor availabilities 
    const [availability, setAvailability] = useState({});
    const [isLoadingAvailability, setIsLoadingAvailability] = useState(false);

    // Real bookings from API
    const [bookedSessions, setBookedSessions] = useState([]);
    const [isLoadingBookings, setIsLoadingBookings] = useState(false);
    const [isLoadingMentors, setIsLoadingMentors] = useState(false);

    // Get auth token
    const token = localStorage.getItem('token');

    // Saved IDs mentors 
    const [savedMentors, setSavedMentors] = useState([1, 3]);

    // Messages data
    const [messages] = useState([
        { mentorId: 1, mentorName: "Emma Janice", lastMessage: "Hi! Looking forward to our session tomorrow." },
        { mentorId: 3, mentorName: "Sarah Williams", lastMessage: "Thanks for the great study tips!" }
    ]);

    // Load bookings from API
    const loadBookings = async () => {
        if (!token) return;

        setIsLoadingBookings(true);
        try {
            const request = await getMyBookings(token);
            setBookedSessions(request.data.data || []);
        } catch (error) {
            console.error('Failed to load bookings:', error);
        } finally {
            setIsLoadingBookings(false);
        }
    };

    // Load mentors from API
    const loadMentors = async () => {
        setIsLoadingMentors(true);
        try {
            const request = await getMentors();
            setMentors(request.data.data || []);
        } catch (error) {
            console.error('Failed to load mentors:', error);
        } finally {
            setIsLoadingMentors(false);
        }
    };

    // Choosing a mentor, open their profile and check their availabilities 
    const selectMentor = async (mentor) => {
        setSelectedMentor(mentor);
        setShowBooking(true);
        setBookingError('');
        setBookingSuccess('');

        setIsLoadingAvailability(true);
        try {
            const res = await getMentorAvailability(mentor.id, token);
            const data = (res && res.data && res.data.data) || {};
            setAvailability(data);

            // Pre-select first available date if present
            const firstKey = Object.keys(data)[0];
            if (firstKey) {
                setSelectedDate(new Date(firstKey));
                setSelectedTime(null);
            }
        } catch (e) {
            console.error('Failed to load availability:', e);
            setAvailability({});
        } finally {
            setIsLoadingAvailability(false);
        }
    };

    // Handle booking creation
    const handleBookMentor = async () => {
        if (!selectedMentor || !selectedDate || !selectedTime || !token) {
            setBookingError('Please select a mentor, date, and time');
            return;
        }

        setIsBooking(true);
        setBookingError('');
        setBookingSuccess('');

        try {
            const [timePart, ampmPart] = selectedTime.split(' ');
            const [hours, minutes] = timePart.split(':');
            const ampm = ampmPart || 'AM';
            let hour24 = parseInt(hours, 10);
            if (ampm === 'PM' && hour24 !== 12) hour24 += 12;
            if (ampm === 'AM' && hour24 === 12) hour24 = 0;

            const bookingDateTime = new Date(selectedDate);
            bookingDateTime.setHours(hour24, parseInt(minutes), 0, 0);

            console.log('Booking request data:', {
                startTime: bookingDateTime.toISOString(),
                durationMinutes: selectedDuration,
                mentorId: selectedMentor.id,
                token: token ? 'Present' : 'Missing'
            });

            const result = await bookMentor({
                startTime: bookingDateTime.toISOString(),
                durationMinutes: selectedDuration,
                mentorId: selectedMentor.id
            }, token);

            console.log('Booking response:', result);

            const successfulBooking = result?.success === true || result?.message === "Success" || result?.data?.message === "Success";
            
            if (successfulBooking) {
                setBookingSuccess('');
                setShowBooking(false);
                setSelectedMentor(null);
                setSelectedDate(null);
                setSelectedTime(null);

                // Show booking success message
                setShowPopup(true);
                // Reload bookings
                await loadBookings();
            } else {
                setBookingError(result?.data?.message || result?.message || 'Failed to create booking');
            }
        } catch (error) {
            console.error('Booking error details:', error);
            console.error('Error response:', error.response?.data);
            console.error('Error status:', error.response?.status);
            setBookingError(`Failed to create booking: ${error.response?.data?.message || error.message}`);
        } finally {
            setIsBooking(false);
        }
    };

    // Handle booking confirmation
    const handleConfirmBooking = async (bookingId) => {
        if (!token) return;

        try {
            const result = await confirmBooking(bookingId, token);
            if (result.success) {
                // Reload bookings to show updated status
                await loadBookings();
            } else {
                console.error('Failed to confirm booking:', result.message);
            }
        } catch (error) {
            console.error('Confirmation error:', error);
        }
    };

    // Load bookings on component mount
    useEffect(() => {
        loadMentors();
    }, [token]);

    useEffect(() => {
        loadBookings();
    }, [activeTab]);

    // Handle filter changes
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

    // Toggle saving/removing mentor
    const toggleSavedMentor = (mentorId) => {
        let next;
        if (savedMentors.includes(mentorId)) {
            next = savedMentors.filter(id => id !== mentorId);
        } else {
            next = [...savedMentors, mentorId];
        }
        setSavedMentors(next);
        // persist for Events map to read
        localStorage.setItem('buddySavedMentors', JSON.stringify(next));
    };

    // Filter mentors based on search and filters
    const filteredMentors = mentors.filter((mentor) => {
        const courseField = mentor.studies || mentor.course || '';
        const matchesSearch =
            (mentor.firstName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            courseField.toString().toLowerCase().includes(searchQuery.toLowerCase());

        const matchesGender = filters.gender === 'all' || mentor.gender === filters.gender;

        //const matchesUniversity = filters.university === 'all' || mentor.university === filters.university;

        const matchesCourses =
            filters.courses.length === 0 ||
            filters.courses.some((course) =>
                courseField.toString().toLowerCase().includes(course.toLowerCase())
            );

        return matchesSearch && matchesGender && matchesCourses;
    });

    // Render Mentors Tab
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

                {/* Filters Form */}
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

                    {/*
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
                    </div> */}

                    {/* Courses Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Courses</label>
                        {['InformationTechnology', 'ComputerScience', 'Business', 'Law', 'Science', 'Engineering', 'Communications', 'Architecture', 'Health', 'Mathematics', 'InternationalStudies', 'Education'].map(course => (
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

                {/* Mentors List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredMentors.map(mentor => (
                        <div key={mentor.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                            <div className="text-center mb-3">
                                <div className="text-4xl mb-2">{mentor.profileEmoji || "👩‍🏫"}</div>
                                <h3 className="font-semibold text-gray-800">{mentor.firstName + " " + mentor.lastName}</h3>

                                <p className="text-sm text-gray-600">{mentor.studies || mentor.course || ''}</p>
                                {/* Need to create backend for this */}
                                <p className="text-xs text-gray-500">{mentor.university}</p>
                            </div>

                            {/* Ratings and Save Button */}
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


                            {/* About Section */}
                            <div className="mt-auto">
                                <button
                                    onClick={() => {
                                        setSelectedMentor(mentor);
                                        //selectMentor(mentor);
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

    // Render Saved Mentors Tab
    const renderSavedMentorsTab = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentors.filter(mentor => savedMentors.includes(mentor.id)).map(mentor => (
                <div key={mentor.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex flex-col h-full">
                    <div className="text-center mb-3">
                        <div className="text-4xl mb-2">{mentor.profileEmoji || "👩‍🏫"}</div>
                        <h3 className="font-semibold text-gray-800">{mentor.firstName} {mentor.lastName}</h3>
                        <p className="text-sm text-gray-600">{mentor.studies}</p>
                        <p className="text-xs text-gray-500">{mentor.university}</p>
                    </div>

                    {/* Ratings and Save Button */}
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

                    {/* Skills tag */}
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

    // Render Bookings Tab
    const renderBookingsTab = () => (
        <div className="space-y-4">
            {isLoadingBookings ? (
                <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <p className="mt-2 text-gray-600">Loading bookings...</p>
                </div>
            ) : bookedSessions.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-600">No bookings found. Book a mentor to get started!</p>
                </div>
            ) : (
                bookedSessions.map(booking => {
                    const mentor = mentors.find(m => m.id === booking.mentorId);
                    return (
                        <div key={booking.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="text-3xl">{mentor.profileEmoji !== null && mentor.profileEmoji !== "" ? mentor.profileEmoji : '👤'}</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{booking.firstName} {booking.lastName}</h3>
                                        <p className="text-sm text-gray-600">{booking.course?.name || 'Course not specified'}</p>
                                        <p className="text-sm text-gray-500">
                                            Session Time: {new Date(booking.startTime).toLocaleString()}
                                        </p>
                                        <p className={`text-sm ${booking.isConfirmed ? 'text-green-600' : 'text-orange-600'}`}>
                                            {booking.isConfirmed ? 'Confirmed' : 'Pending Confirmation'}
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col space-y-2">
                                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                                        Message
                                    </button>
                                    {!booking.isConfirmed && (
                                        <button
                                            onClick={() => handleConfirmBooking(booking.id)}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                                        >
                                            Confirm
                                        </button>
                                    )}
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
                })
            )}
        </div>
    );
    // Render Messages Tab
    const renderMentorProfile = () => (
        <div className="bg-white rounded-lg">
            <button
                onClick={() => setShowBooking(false)}
                className="text-blue-600 hover:text-blue-800 mb-6 flex items-center text-sm font-medium"
            >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Mentors
            </button>

            {/* Mentor Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Mentor Info */}
                <div className="lg:col-span-1">
                    <div className="text-center">
                        <div className="text-7xl mb-6">{selectedMentor.profileEmoji || "👩‍🏫"}</div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedMentor.firstName} {selectedMentor.lastName}</h2>
                        <p className="text-lg text-gray-600 mb-2">{selectedMentor.course || ''}</p>
                        <p className="text-base text-gray-500 mb-6">{selectedMentor.university}</p>

                        {/* Ratings */}
                        <div className="flex items-center justify-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-6 h-6 ${i < selectedMentor.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            <span className="ml-3 text-gray-600 font-medium">{selectedMentor.reviews} Reviews</span>
                        </div>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                            {(selectedMentor?.skills ?? []).length > 0 ? (
                                (selectedMentor.skills ?? []).map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-800 text-sm rounded-full font-medium">
                                        {skill}
                                    </span>
                                ))
                            ) : (
                                <span className="text-sm text-gray-500">No skills listed</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column - About & Booking */}
                <div className="lg:col-span-2">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">About {selectedMentor.firstName} {selectedMentor.lastName}</h3>
                            <p className="text-blue-600 leading-relaxed text-lg">{selectedMentor.about}</p>
                        </div>

                        {/* Booking Section */}
                        <div className="bg-blue-50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">Book a Session</h3>
                            <p className="text-blue-600 mb-6 text-lg">Choose your preferred date and time for a mentor session.</p>

                            {/* Calendar */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                                <div className="text-center text-xl font-semibold text-gray-800 mb-4">August 2024</div>
                                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                                        <div key={`hdr-${i}`} className="py-3 text-gray-500 font-medium">{day}</div>
                                    ))}
                                    {[...Array(31)].map((_, i) => {
                                        const day = i + 1;
                                        const isSelected = selectedDate && selectedDate.getDate() === day;
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => {
                                                    const date = new Date(2024, 7, day); // August 2024
                                                    setSelectedDate(date);
                                                }}
                                                className={`py-3 cursor-pointer hover:bg-blue-50 rounded-lg transition-colors ${isSelected ? 'bg-blue-600 text-white' : ''
                                                    }`}
                                            >
                                                {day}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Time Slots */}
                            <div className="mb-6">
                                <p className="text-base font-medium text-blue-700 mb-4">Available Time Slots:</p>
                                <div className="grid grid-cols-4 gap-3">
                                    {['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'].map(time => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${selectedTime === time
                                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                : 'border-blue-300 hover:border-slate-300 hover:bg-slate-50'
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Duration Selection */}
                            <div className="mb-6">
                                <p className="text-base font-medium text-blue-700 mb-4">Session Duration:</p>
                                <div className="flex gap-3">
                                    {[30, 60, 90, 120, 150, 180].map(duration => (
                                        <button
                                            key={duration}
                                            onClick={() => setSelectedDuration(duration)}
                                            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${selectedDuration === duration
                                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                : 'border-blue-300 hover:border-slate-300 hover:bg-slate-50'
                                                }`}
                                        >
                                            {duration === 30 ? '30 mins' :
                                                duration === 60 ? '1 hr' :
                                                    duration === 90 ? '1 hr 30 mins' :
                                                        duration === 120 ? '2 hrs' :
                                                            duration === 150 ? '2 hrs 30 mins' :
                                                                '3 hrs'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Error/Success Messages */}
                            {bookingError && (
                                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                                    {bookingError}
                                </div>
                            )}
                            {bookingSuccess && (
                                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                                    {bookingSuccess}
                                </div>
                            )}

                            {/* Book Button */}
                            <button
                                onClick={handleBookMentor}
                                disabled={isBooking || !selectedDate || !selectedTime}
                                className={`w-full mt-4 py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${isBooking || !selectedDate || !selectedTime
                                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                                    : 'bg-orange-700 text-white hover:bg-green-800'
                                    }`}
                            >
                                {isBooking ? 'BOOKING...' : 'BOOK SESSION'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Render Messages Panel
    const renderMessages = () => (
        <div className="bg-white rounded-lg border border-blue-200 shadow-sm">
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

            {/* Messages List */}
            <div className="p-4">
                {messages.map(message => (
                    <div key={message.mentorId} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-medium text-blue-800">{message.mentorName}</h4>
                            <p className="text-sm text-blue-600 truncate">{message.lastMessage}</p>
                        </div>
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        // Main Layout
        <Background>
            <div className="w-full max-w-6xl px-20 pt-10 mx-auto flex-1">
                {/* Authentication Check */}
                {!token ? (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Authentication Required</h2>
                        <p className="text-gray-600 mb-6">Please log in to access the Buddy System.</p>
                        <a
                            href="/login"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Go to Login
                        </a>
                    </div>
                ) : (
                    <>
                        {/* Header */}
                        <header className="mx-auto max-w-3xl rounded-lg bg-white shadow-2xl px-5 md:px-8 py-8 md:py-10 shadow text-center mb-12">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4 leading-light whitespace-nowrap">Buddy Program</h1>
                            <p className="text-lg md:text-xl font-bold text-black max-w-3xl mx-auto">
                                Connect with peers, mentors and study partners who share your goals.
                            </p>
                        </header>

                        {/* Navigation Tabs */}
                        <main className="flex-1">
                            <div className="bg-white rounded-lg border border-blue-200 shadow-sm mb-6">
                                <div className="flex border-b border-gray-200">
                                    {[
                                        { id: 'mentors', label: 'Mentors' },
                                        { id: 'saved', label: 'Saved Mentors' },
                                        { id: 'bookings', label: 'My Bookings' }
                                    ].map(tab => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${activeTab === tab.id
                                                ? 'border-slate-500 text-slate-600'
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
                                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
                                    <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
                                        <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
                                            <h3 className="text-xl font-semibold text-gray-800">Mentor Profile</h3>
                                            <button
                                                type="button"
                                                onClick={() => setShowBooking(false)}
                                                className="p-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                                                aria-label="Close profile"
                                            > ✕ </button>
                                        </div>
                                        <div className="p-6">
                                            {renderMentorProfile()}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 
                            <div className="pt-2 pb-8 flex justify-center">
                                <a
                                    href="/EventsAndNetworkingMap"
                                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${bookedSessions.length > 0 ? 'bg-purple-700 text-white hover:bg-orange-600' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                                    aria-disabled={bookedSessions.length === 0}
                                    onClick={(e) => { if (bookedSessions.length === 0) e.preventDefault(); }}
                                >
                                    Proceed to Events & Networking Map
                                </a>
                            </div>
                            */}
                        </main>
                    </>
                )}
            </div>

            {/* Pop Up Goes in here*/}
            {showPopup && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-2xl text-center max-w-md">
                    <h2 className="text-2xl font-bold text-green-600 mb-2">
                        🎉 Booking Confirmed!
                    </h2>

                    <p className="text-gray-700">
                        Your mentor session has been successfully booked.
                    </p>

                    <a
                        href="/EventsAndNetworkingMap"
                        className="mt-6 px-4 py-2 rounded bg-purple-600 text-white inline-block"
                        onClick={() => setShowPopup(false)}
                    >
                        Proceed to Events Map
                    </a>
                    </div>
                </div>
            )}
            <Footer />
        </Background>
    );
}