import { useState } from 'react';
import Background from './Background';
import Footer from './Footer';

export default function CourseQuestionnaire() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => prev + 1);

    return (
        <Background>
            <div className="w-full max-w-6xl px-6 pt-10 pb-10 mx-auto flex-1">
                <main className="flex-1">
                    <header className="mx-auto max-w-3xl rounded-lg bg-white shadow-2xl px-8 md:px-10 py-10 md:py-10 shadow text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-3">
                            Course Questionnaire
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                            Answer a few questions and get tailored course recommendations.
                        </p>
                    </header>

                    {/* Step 1: Interests */}
                    {step === 1 && (
                        <section className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                            <div className="p-6">
                                <div className="text-2xl font-semibold text-blue-800 mb-4">Interests</div>
                                <p className="text-gray-600 mb-4">
                                    Tell us what subjects and topics excite you most.
                                </p>

                                <div className="space-y-2">
                                    {[
                                        'English',
                                        'Science',
                                        'Mathematics',
                                        'HSIE',
                                        'Business',
                                        'Legal Studies',
                                        'Design and Technology',
                                    ].map((interest) => (
                                        <label key={interest} className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" className="peer hidden" />
                                            <span className="px-3 py-1 rounded border text-gray-700 peer-checked:bg-gray-800 peer-checked:text-white">
                                                {interest}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={nextStep}
                                className="mt-6 w-full py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600"
                            >
                                Continue
                            </button>
                        </section>
                    )}

                    {/* Step 2: Goals */}
                    {step === 2 && (
                        <section className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                            <div className="text-2xl font-semibold text-blue-800 mb-4">Goals</div>
                            <p className="text-gray-600 mb-4">
                                Share your career goals and the skills you want to build.
                            </p>

                            <div className="space-y-2">
                                {['Get a Job', 'Upskill'].map((goal) => (
                                    <label key={goal} className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="peer hidden" />
                                        <span className="px-3 py-1 rounded border text-gray-700 peer-checked:bg-gray-800 peer-checked:text-white">
                                            {goal}
                                        </span>
                                    </label>
                                ))}
                            </div>

                            <button
                                onClick={nextStep}
                                className="mt-6 w-full py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600"
                            >
                                Continue
                            </button>
                        </section>
                    )}

                    {/* Step 3: Schedule */}
                    {step === 3 && (
                        <section className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                            <div className="text-2xl font-semibold text-blue-800 mb-4">Schedule</div>
                            <p className="text-gray-600 mb-4">
                                We'll adapt suggestions to fit your time and workload.
                            </p>

                            <div className="space-y-2">
                                {['Part-Time', 'Full-Time'].map((schedule) => (
                                    <label key={schedule} className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="peer hidden" />
                                        <span className="px-3 py-1 rounded border text-gray-700 peer-checked:bg-gray-800 peer-checked:text-white">
                                            {schedule}
                                        </span>
                                    </label>
                                ))}
                            </div>

                            <button
                                onClick={nextStep}
                                className="mt-6 w-full py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600"
                            >
                                Continue
                            </button>
                        </section>
                    )}
                </main>
            </div>
            <Footer/>
        </Background>
    );
}