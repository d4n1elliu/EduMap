import Background from './Background';
import Footer from './Footer';

export default function About() {
    return (
        // Main Layout
        <Background>
            <div className="w-full max-w-6xl px-6 pt-28 mx-auto flex-1">
                <main className="flex-1">
                    {/*General project overview*/}
                    <section className="text-center mb-10 space-y-5">
                        <div className="mx-auto max-w-xl rounded-lg bg-white shadow-2xl px-8 md:px5 py-5 md:py-8 shadow text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-8">Overview</h1>
                            <p className="text-lg font-semibold md:text-l text black max-w-3xl mx-auto">
                                EduMap is a student-driven initiative created to support future and current university students in making confident academic and career decisions. 
                                Our platform bridges the gap between course exploration, peer mentorship and campus networking to help students thrive both academically and socially.
                            </p>
                        </div>

                        {/*Project Statement*/}
                        <div className="mx-auto max-w-xl rounded-lg bg-white shadow-2xl px-8 md:px5 py-5 md:py-8 shadow text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-8">Project statement</h1>
                            <p className="text-lg font-semibold md:text-l text black max-w-3xl mx-auto">
                                Our mission is to empower students to make informed decisions about their education and career paths through interactive tools, mentorship programs
                                and accessible resources that encourage growth, connection and lifelong learning.
                            </p>
                        </div>

                        {/* Project vision*/}
                        <div className="mx-auto max-w-xl rounded-lg bg-white shadow-2xl px-8 md:px5 py-5 md:py-8 shadow text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-8">Our vision</h1>
                            <p className="text-lg font-semibold md:text-l text black max-w-3xl mx-auto">
                                We envision a future where every student enters university with clarity, confidence and community support.</p>
                        </div>

                        {/*Core Project Values*/}
                        <div className="mx-auto max-w-xl rounded-lg bg-white shadow-2xl px-8 md:px5 py-5 md:py-8 shadow text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-8">Core Values</h1>
                            <p className="text-lg font-semibold md:text-l text blackx-w-3xl mx-auto">
                                Empowerment: Helping students take control of their educational journey.
                                Connection: Fostering meaningful relationships between peers, mentors and educators.
                                Growth: Encouraging personal, academic and professional development.
                                Inclusivity: Supporting diverse student backgrounds and experiences.</p>
                        </div>

                        {/* EduMap Explanation*/}
                        <div className="mx-auto max-w-xl rounded-lg bg-white shadow-2xl px-8 md:px5 py-5 md:py-8 shadow text-center">
                            <h1 className="text-5xl md:text-5xl font-bold text-orange-500 mb-8">How EduMap Works</h1>
                            <p className="text-lg font-semibold md:text-l text black max-w-3xl mx-auto">
                                EduMap provides three core features: 
                            </p>
                            <p className="text-lg font-semibold md:text-l text black max-w-3xl mx-auto">
                                Course Questionnaire to align interests with study options. 
                            </p>
                            <p className="text-lg font-semibold md:text-l text black max-w-3xl mx-auto">
                                Buddy Program that pairs students with mentors.
                            </p>
                            <p className="text-lg font-semibold md:text-l text black max-w-3xl mx-auto">
                                An Events & Networking Map that highlights academic and career development opportunities.
                            </p>
                        </div>
                        
                        {/* Team introduction*/}
                        <div className="mx-auto max-w-xl rounded-lg bg-white shadow-2xl px-8 md:px5 py-5 md:py-8 shadow text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-8">Meet The Team! </h1>
                            <p className="text-lg font-semibold md:text-xl text-black max-w-3xl mx-auto">Daniel Liu (14430779)</p>
                            <p className="text-lg font-semibold md:text-xl text-black max-w-3xl mx-auto">Julian Alcazaren (24608263)</p>
                            <p className="text-lg font-semibold md:text-xl text-black max-w-3xl mx-auto">Robert Ly (24561680)</p>
                            <p className="text-lg font-semibold md:text-xl text-black max-w-3xl mx-auto">Deeva Sood (14243214)</p>
                            <p className="text-lg font-semibold md:text-xl text-black max-w-3xl mx-auto">Vidanalage Ineshka De Mel (14540645)</p>
                            <p className="text-lg font-semibold md:text-xl text-black max-w-3xl mx-auto">Sophie Supharath Gnoukhanthone (14241994)</p>
                        </div>
                    </section>  
                </main>
            </div>
            <Footer/>
        </Background>
    )
}