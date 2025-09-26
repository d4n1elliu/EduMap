import Footer from './Footer';
import Background from './Background';

export default function CourseQuestionnaire() {
    return (
        <Background>
            <div className="w-full max-w-6xl px-6 pt-28 mx-auto flex-1">
                <main className="flex-1">
                    <section className="text-center mb-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-3">Course Questionnaire</h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">Answer a few questions and get tailored course recommendations.</p>
                    </section>

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