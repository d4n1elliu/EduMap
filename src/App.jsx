import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { PATHS } from './config/routes';
import About from './pages/About';
import BuddySystem from './pages/BuddySystem';
import ContactUs from './pages/ContactUs';
import CourseQuestionnaire from './pages/CourseQuestionnaire';
import EventsAndNetworkingMap from './pages/EventsAndNetworkingMap';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Login from './pages/Login';
import ProfileSetup from './pages/ProfileSetup';
import Register from './pages/Register';
import TermsOfService from './pages/TermsOfService';

const ROUTES = [
    { path: PATHS.HOME, element: <Home /> },
    { path: PATHS.ABOUT, element: <About /> },
    { path: PATHS.LOGIN, element: <Login /> },
    { path: PATHS.SIGNUP, element: <Register /> },
    { path: PATHS.QUESTIONNAIRE, element: <CourseQuestionnaire /> },
    { path: PATHS.PROFILE, element: <ProfileSetup /> },
    { path: PATHS.BUDDY, element: <BuddySystem /> },
    { path: PATHS.EVENTS_MAP, element: <EventsAndNetworkingMap /> },
    { path: PATHS.CONTACT, element: <ContactUs /> },
    { path: PATHS.FAQ, element: <FAQ /> },
    { path: PATHS.TERMS, element: <TermsOfService /> },
];

// Fixed navbar on top, routed page content below it
function App() {
    return (
        <>
            <Navbar />
            <div className="pt-24">
                <Routes>
                    {ROUTES.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </div>
        </>
    );
}

export default App;
