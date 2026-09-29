// All app URLs live here so links and routes can't drift apart
export const PATHS = {
    HOME: '/',
    ABOUT: '/about',
    LOGIN: '/login',
    SIGNUP: '/signup',
    QUESTIONNAIRE: '/course-questionnaire',
    PROFILE: '/profile-setup',
    BUDDY: '/buddy-system',
    EVENTS_MAP: '/EventsAndNetworkingMap',
    CONTACT: '/contact',
    FAQ: '/faq',
    TERMS: '/terms',
};

// Hamburger menu entries
export const NAV_LINKS = [
    { to: PATHS.HOME, label: 'Home' },
    { to: PATHS.QUESTIONNAIRE, label: 'Questionnaire' },
    { to: PATHS.BUDDY, label: 'Mentors' },
    { to: PATHS.EVENTS_MAP, label: 'Events & CampusMap' },
    { to: PATHS.ABOUT, label: 'About' },
    { to: PATHS.CONTACT, label: 'Contact Us' },
    { to: PATHS.FAQ, label: 'FAQ' },
    { to: PATHS.TERMS, label: 'Terms & Service' },
];

// Menu entries shown when logged out
export const GUEST_LINKS = [
    { to: PATHS.LOGIN, label: 'Login' },
    { to: PATHS.SIGNUP, label: 'Sign Up' },
];

// Footer "Support" column
export const FOOTER_LINKS = [
    { to: PATHS.CONTACT, label: 'Contact Us' },
    { to: PATHS.ABOUT, label: 'About Us' },
    { to: PATHS.TERMS, label: 'Terms of Service' },
    { to: PATHS.FAQ, label: 'FAQ' },
];
