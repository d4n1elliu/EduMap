// Placeholder profile data until these sections are backed by the API
import abstractImg from '../../assets/abstract.png';
import boatRaceImg from '../../assets/boatrace.png';
import taskBotImg from '../../assets/taskbot.png';

// Side tabs; activeClass is the full Tailwind class for the selected colour
export const PROFILE_TABS = [
    { id: 'profile', label: 'Profile', icon: '👤', activeClass: 'bg-red-500' },
    { id: 'projects', label: 'Projects', icon: '💼', activeClass: 'bg-blue-500' },
    { id: 'bookings', label: 'Planner', icon: '📅', activeClass: 'bg-orange-500' },
    { id: 'settings', label: 'Settings', icon: '⚙️', activeClass: 'bg-purple-500' },
];

export const QUESTIONNAIRE_STATS = [
    { title: 'Location Preference', percent: 79, barClass: 'bg-orange-400', text: 'of others had a preference to study in the city' },
    { title: 'Type of Support', percent: 65, barClass: 'bg-blue-400', text: "of international students had a preference for 'Visa and Work Guidance'" },
    { title: 'Topics of Interest', percent: 15, barClass: 'bg-green-400', text: 'of others had a preference to study Engineering and Technology' },
];

export const PROJECTS = [
    {
        title: 'Miniature Boat Build',
        description: 'Built a miniature boat for a local contest, focusing on stability, design, and speed. Learned teamwork and problem-solving while constructing the boat from scratch.',
        images: [boatRaceImg],
    },
    {
        title: 'Robotics Challenge',
        description: 'Designed a small robot to navigate a maze for a competition. Improved programming skills and mechanical design abilities.',
        images: [taskBotImg],
    },
    {
        title: 'Art Installation',
        description: 'Created a collaborative art installation for a local exhibition, focusing on sustainability and community involvement.',
        images: [abstractImg],
    },
];

/* ---------- Planner ---------- */

export const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const PLANNER_TIME_SLOTS = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM',
];

export const SAMPLE_EVENTS = [
    { day: 'Monday', time: '10:00 AM', title: 'Study Group', type: 'event', color: 'bg-blue-200' },
    { day: 'Wednesday', time: '2:00 PM', title: 'Mentor Session', type: 'booking', color: 'bg-green-200' },
    { day: 'Friday', time: '4:00 PM', title: 'Project Meeting', type: 'event', color: 'bg-purple-200' },
];

export const PLANNER_LEGEND = [
    { label: 'Study Events', swatch: 'bg-blue-200' },
    { label: 'Mentor Sessions', swatch: 'bg-green-200' },
    { label: 'Project Meetings', swatch: 'bg-purple-200' },
    { label: 'Selected Slots', swatch: 'bg-blue-100 border-2 border-blue-400' },
];

/* ---------- Settings ---------- */

export const NOTIFICATION_SETTINGS = [
    { title: 'Email Notifications', description: 'Receive updates via email' },
    { title: 'Mentor Messages', description: 'Get notified when mentors message you' },
    { title: 'Session Reminders', description: 'Reminders for booked sessions' },
];

export const PRIVACY_SETTINGS = [
    { title: 'Profile Visibility', description: 'Allow others to see your profile' },
    { title: 'Project Sharing', description: 'Allow mentors to view your projects' },
];

/* ---------- Sidebar ---------- */

export const CONNECTED_MENTORS = [
    { name: 'Mentor Jacob', time: '15h', specialty: 'Computer Science' },
    { name: 'Mentor Germaine', time: '10h', specialty: 'Engineering' },
    { name: 'Mentor Oxob', time: '3h', specialty: 'Robotics' },
];

export const CONNECTED_BUDDIES = [
    { name: 'Buddy Pepper', course: 'Computer Science', status: 'Online' },
    { name: 'Buddy Killua', course: 'Mechanical Engineering', status: 'Offline' },
    { name: 'Buddy Alex', course: 'Electrical Engineering', status: 'Online' },
];
