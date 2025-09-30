import Footer from './Footer';
import Background from './Background';

export default function CourseQuestionnaire() {
    return (
        <Background>
            <div className="w-full max-w-6xl px-6 pt-28 mx-auto flex-1">
                <main className="flex-1">
                    <header className="mx-auto max-w-3xl rounded-lg bg-white shadow-2xl px-8 md:px-10 py-10 md:py-10 shadow text-center mb-12">
                        <h1 className="text-3xl md:text-6xl font-extrabold text-blue-700 mb-8">
                            Course Questionnaire
                        </h1>
                        <p className="text-lg md:text-xl font-bold text-black max-w-3xl mx-auto">
                            Answer a few questions and get tailored course recommendations.
                        </p>
                    </header>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                            <div className="text-2xl font-semibold text-blue-800 mb-2">Interests</div>
                            <p className="text-gray-600">Tell us what subjects and topics excite you most.</p>
                        </div>
                        <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                            <div className="text-2xl font-semibold text-blue-800 mb-2">Goals</div>
                            <p className="text-gray-600">Share your career goals and the skills you want to build.</p>
                        </div>
                        <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                            <div className="text-2xl font-semibold text-blue-800 mb-2">Schedule</div>
                            <p className="text-gray-600">We'll adapt suggestions to fit your time and workload.</p>
                        </div>
                    </section>
                </main>
            </div>
            <Footer/>
        </Background>
    )
}