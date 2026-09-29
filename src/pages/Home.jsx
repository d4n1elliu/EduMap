import { Link } from 'react-router-dom';
import HeroImg from '../assets/EduMapWelcome.png';
import PageLayout from '../components/layout/PageLayout';
import { PATHS } from '../config/routes';
import EventCard from '../features/home/EventCard';
import FeatureSection from '../features/home/FeatureSection';
import { FEATURED_EVENTS, FEATURE_SECTIONS } from '../features/home/homeContent';
import usePageMeta from '../hooks/usePageMeta';

function Home() {
    usePageMeta(null, PATHS.HOME);
    return (
        <PageLayout>
            <div className="w-full flex flex-col items-center">

                {/* Hero */}
                <section className="w-full relative">
                    <img
                        src={HeroImg}
                        alt="Students learning together"
                        className="w-full h-[600px] object-cover object-[50%_30%]"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start px-10">
                        <h1 className="text-white text-4xl font-bold mb-4">Welcome to EduMap</h1>
                        <p className="text-white max-w-lg text-sm">
                            A place that provides prospective university students support and assists
                            you along your education journey.
                        </p>
                        <Link to={PATHS.QUESTIONNAIRE} className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-lg text-base font-medium">
                            Join Now!
                        </Link>
                    </div>
                </section>

                {FEATURE_SECTIONS.map((section) => <FeatureSection key={section.title} {...section} />)}

                {/* Discover Events */}
                <section className="w-full bg-gradient-to-r from-blue-500 via-[#EED6C4] to-orange-500 py-16 px-6">
                    <div className="w-full flex justify-center mb-10">
                        <div className="px-105 py-3 bg-white/20 backdrop-blur-md rounded-2xl shadow-sm">
                            <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900">
                                Discover Events
                            </h2>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {FEATURED_EVENTS.map((event) => <EventCard key={event.title} {...event} />)}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
}

export default Home;
