export const BUDDY_TABS = [
    { id: 'mentors', label: 'Mentors' },
    { id: 'saved', label: 'Saved Mentors' },
    { id: 'bookings', label: 'My Bookings' },
];

export const GENDER_OPTIONS = ['all', 'female', 'male'];

// Must match the backend Course enum: same names, same order (sign-up sends the index)
export const COURSE_OPTIONS = [
    'InformationTechnology', 'ComputerScience', 'Business', 'Law', 'Science', 'Engineering',
    'Communications', 'Architecture', 'Health', 'Mathematics', 'InternationalStudies', 'Education',
];

export const INITIAL_FILTERS = { gender: 'all', courses: [] };

// Booking options
export const TIME_SLOTS = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
export const DURATIONS = [30, 60, 90, 120, 150, 180]; // minutes
export const DEFAULT_DURATION = 60;

// Saved mentor ids are mirrored here for the Events map to read
export const SAVED_MENTORS_STORAGE_KEY = 'buddySavedMentors';
export const DEFAULT_SAVED_MENTOR_IDS = [1, 3];

// Placeholder conversations until messaging is backed by the API
export const MOCK_MESSAGES = [
    { mentorId: 2, mentorName: 'Emma Janice', lastMessage: 'Hi! Looking forward to our session tomorrow.' },
    { mentorId: 4, mentorName: 'Sarah Williams', lastMessage: 'Thanks for the great study tips!' },
];
