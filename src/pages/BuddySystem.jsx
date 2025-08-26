export default function BuddySystem() {
    return (
        <div className="w-full max-w-6xl px-6 pt-4">
            <section className="text-center mb-10">
                <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-3">Buddy Program</h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">Connect with peers, mentors and study partners who share your goals.</p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                    <div className="text-2xl font-semibold text-blue-800 mb-2">Find a Study Buddy</div>
                    <p className="text-gray-600">Match based on course, availability and preferred learning style.</p>
                </div>
                <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                    <div className="text-2xl font-semibold text-blue-800 mb-2">Mentorship</div>
                    <p className="text-gray-600">Connect with seniors or alumni for guidance and tips.</p>
                </div>
                <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                    <div className="text-2xl font-semibold text-blue-800 mb-2">Group Projects</div>
                    <p className="text-gray-600">Join teams for hackathons, labs and collaborative assignments.</p>
                </div>
            </section>
        </div>
    )
}