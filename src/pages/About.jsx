import Background from './Background';
import Footer from './Footer';

export default function About() {
    return (
        <Background>
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-6xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-6">About EduMap</h1>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        
                        {/* Project Overview */}
                        <div className="bg-white/100 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-orange-500 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                                EduMap is a student-driven initiative created to support future and current 
                                university students in making confident academic and career decisions.
                            </p>
                            <p className="text-lg text-gray-800 leading-relaxed">
                                Our platform bridges the gap between course exploration, peer mentorship 
                                and campus networking to help students thrive both academically and socially.
                            </p>
                        </div>

                        {/* Vision Description */}
                        <div className="bg-white/100 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-orange-500 mb-6">Our Vision</h2>
                            <p className="text-lg text-gray-800 leading-relaxed">
                                We envision a future where every student enters university with clarity, 
                                confidence and community support. A world where educational decisions 
                                are informed, purposeful and lead to fulfilling careers.
                            </p>
                        </div>

                        {/* Core Values Section */}
                        <div className="bg-white/100 backdrop-blur-sm p-8 rounded-lg shadow-lg lg:col-span-2">
                            <h2 className="text-3xl pb-5 font-bold text-orange-500 mb-6 text-center">Our Core Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Empowerment</h3>
                                    <p className="text-gray-600 text-sm">Helping students take control of their educational journey</p>
                                </div>
                                
                                <div className="text-center">
                                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Connection</h3>
                                    <p className="text-gray-600 text-sm">Fostering meaningful relationships between peers and mentors</p>
                                </div>
                                
                                <div className="text-center">
                                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Growth</h3>
                                    <p className="text-gray-600 text-sm">Encouraging personal, academic and professional development</p>
                                </div>

                                <div className="text-center">
                                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Inclusivity</h3>
                                    <p className="text-gray-600 text-sm">Supporting diverse student backgrounds and experiences</p>
                                </div>
                            </div>
                        </div>
                        </div>

                    {/* EduMap Website Explanation */}
                    <div className="mb-16">
                        <h2 className="text-5xl md:text-5xl font-bold text-center text-blue-700 mb-6">How EduMap Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white/100 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
                                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Course Questionnaire</h3>
                                <p className="text-gray-600">
                                    Complete our interactive questionnaire to discover courses and programs 
                                    that align with your interests, goals and learning preferences.
                                </p>
                            </div>
                            
                            <div className="bg-white/100 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
                                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Buddy Program</h3>
                                <p className="text-gray-600">
                                    Connect with experienced mentors and fellow students who can guide you 
                                    through your academic journey and provide valuable insights.
                                </p>
                            </div>
                            
                            <div className="bg-white/100 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
                                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Events & Networking</h3>
                                <p className="text-gray-600">
                                    Discover academic and career development opportunities through our 
                                    interactive map featuring workshops, seminars and networking events.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Project Team */}
                    <div className="bg-white/100 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                        <h2 className="text-4xl font-bold text-orange-500 text-center mb-8">Meet Our Team</h2>
                        <p className="text-lg text-gray-800 text-center mb-8 max-w-2xl mx-auto">
                            EduMap is developed by a passionate team of students who understand the challenges 
                            of navigating university life and career decisions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-lg">DL</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Daniel Liu</h3>
                                <p className="text-gray-600 text-sm">Student ID: 14430779</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-lg">JA</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Julian Alcazaren</h3>
                                <p className="text-gray-600 text-sm">Student ID: 24608263</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-lg">RL</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Robert Ly</h3>
                                <p className="text-gray-600 text-sm">Student ID: 24561680</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-lg">DS</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Deeva Sood</h3>
                                <p className="text-gray-600 text-sm">Student ID: 14243214</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-lg">VD</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Vidanalage Ineshka De Mel</h3>
                                <p className="text-gray-600 text-sm">Student ID: 14540645</p>
                        </div>
                        
                            <div className="text-center">
                                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-lg">SG</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Sophie Supharath Gnoukhanthone</h3>
                                <p className="text-gray-600 text-sm">Student ID: 14241994</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Background>
    );
}