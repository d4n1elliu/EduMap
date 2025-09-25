import Footer from './Footer';


export default function JobProspects() {
    return (
        // JSX for the Job Prospects page
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-300 via-blue-100 via-orange-100 to-orange-300">
            <div className="w-full max-w-6xl px-6 pt-28 mx-auto flex-1">
                <main className="flex-1">
                    <section className="text-center mb-10">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-3">Job Prospects</h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">Explore career paths, compare your skills to market needs and follow a step-by-step roadmap with mentor support.</p>
                    </section>

                    <section className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex-1 rounded-xl border border-gray-200 p-6 shadow-sm bg-white max-w-md">
                            <div className="text-2xl font-semibold text-blue-800 mb-2">Career RoadMap</div>
                            <p className="text-gray-600">
                                Generate a clear learning path topics, milestones and next steps for the job you pick. Track progress as you go.
                            </p>
                        </div>
                        <div className="flex-1 rounded-xl border border-gray-200 p-6 shadow-sm bg-white max-w-md">
                            <div className="text-2xl font-semibold text-blue-800 mb-2">MentorConnect</div>
                            <p className="text-gray-600">
                                Connect with mentors for Q&A, portfolio feedback, career advice and interview prep.
                                Provides a built-in skill comparison feature to identify gaps and get a personalised plan to close them with targeted courses and projects.
                            </p>
                        </div>
                    </section>
                </main>
            </div>
            <Footer/>
        </div>
    )
}